import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { SignUpDto } from "./dto/sign-up.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    public async signUp(signUpDto: SignUpDto) {
        const user = await this.usersService.create(signUpDto);

        const { password: _, ...userWithoutPassword } = user;

        return {
            user: userWithoutPassword,
            access: this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
            }),
        };
    }

    public async signIn(signInDto: SignInDto) {
        const user = await this.usersService.findOneByEmail(signInDto.email);

        if (!user) {
            throw new NotFoundException(`User with email="${signInDto.email} not found.`);
        }

        const passwordsMatch = await argon2.verify(user.password, signInDto.password);
        if (passwordsMatch) {
            return {
                access: this.jwtService.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                }),
            };
        }
        throw new BadRequestException("Password incorrect");
    }
}
