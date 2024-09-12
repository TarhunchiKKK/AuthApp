import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";
import { UserStatus } from "src/users/enums/user-status.enum";
import { UsersService } from "src/users/users.service";

@Injectable()
export class UserBlockedGuard implements CanActivate {
    constructor(private usersService: UsersService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        try {
            if (!request.user) {
                throw new BadRequestException("No user found in request.");
            }

            const { id } = request.user as Pick<User, "id">;

            const user = await this.usersService.findUserById(id);

            if (user.status === UserStatus.Blocked) {
                throw new BadRequestException("User is blocked.");
            }

            return true;
        } catch (exception: unknown) {
            throw exception;
        }
    }
}
