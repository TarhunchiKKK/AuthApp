import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("sign-up")
    public async signUp(@Body() signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto);
    }

    @Post("sign-in")
    public async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto);
    }
}
