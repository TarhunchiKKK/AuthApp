import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        try {
            const authHeaders = request.headers.authorization;
            const [bearer, token, _] = authHeaders.split(" ");

            if (bearer !== "Bearer" || !token) {
                throw new UnauthorizedException("No authorization token found.");
            }

            const { id, name, email, password } = this.jwtService.verify(token);
            request.user = { id, name, email, password };
            return true;
        } catch (error) {
            throw new UnauthorizedException("Authorization error.");
        }
    }
}
