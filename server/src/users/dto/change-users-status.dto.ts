import { User } from "../entities/user.entity";
import { UserStatus } from "../enums/user-status.enum";

export class ChangeUsersStatusDto {
    users: Pick<User, "id">[];

    status: UserStatus;
}
