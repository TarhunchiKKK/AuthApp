import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { SignUpDto } from "./dto/sign-up.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { ValidateUserDto } from "./dto/validate-user.dto";
import { User } from "src/users/entities/user.entity";
import * as argon2 from "argon2";
import { UserStatus } from "src/users/enums/user-status.enum";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    private async validateUser(validateUserDto: ValidateUserDto) {
        const user = await this.usersService.findUserByEmail(validateUserDto.email);

        if (!user) {
            throw new NotFoundException(`User with email="${validateUserDto.email} not found.`);
        }

        const passwordsMatch = await argon2.verify(user.password, validateUserDto.password);
        if (passwordsMatch) {
            return user;
        }
        throw new BadRequestException("Incorrect password.");
    }

    private async generateToken(user: User) {
        return {
            access: this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
            }),
        };
    }

    public async signUp(signUpDto: SignUpDto) {
        const user = await this.usersService.create(signUpDto);

        const { password: _, ...userWithoutPassword } = user;

        const token = await this.generateToken(user);

        return {
            user: userWithoutPassword,
            access: token,
        };
    }

    public async signIn(signInDto: SignInDto) {
        const user = await this.validateUser(signInDto);

        const token = await this.generateToken(user);

        const { password: _, ...userWithoutPassword } = user;

        await this.usersService.updateUser(user.id, {
            lastLoginAt: new Date(),
            status: UserStatus.Active,
        });

        return {
            user: userWithoutPassword,
            access: token,
        };
    }
}
