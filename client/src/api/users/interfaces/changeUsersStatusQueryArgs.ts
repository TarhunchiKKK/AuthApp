import { UserStatus } from "../../../types";

export interface IChangeUsersStatusQueryArgs {
    headers: {
        Authorization: string;
    };
    body: {
        users: { id: string }[];
        status: UserStatus;
    };
}
