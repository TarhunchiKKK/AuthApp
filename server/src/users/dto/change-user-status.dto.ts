import { UserStatus } from "../enums/user-status.enum";

export class ChangeUserStatusDto {
    userId: string;

    status: UserStatus;
}
