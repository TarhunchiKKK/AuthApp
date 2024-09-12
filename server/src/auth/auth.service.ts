import { Injectable } from "@nestjs/common";
import { SignUpDto } from "./dto/sign-up.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";

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
}
