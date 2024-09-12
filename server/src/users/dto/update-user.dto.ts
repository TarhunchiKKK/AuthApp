import { UserStatus } from "../enums/user-status.enum";

export class UpdateUserDto {
    lastLoginAt?: Date;

    status?: UserStatus;
}
