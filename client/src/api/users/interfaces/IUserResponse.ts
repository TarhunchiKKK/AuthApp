import { UserStatus } from "../../../types";

export interface IUserResponse {
    id: string;

    name: string;

    email: string;

    password: string;

    regiteredAt: string;

    lastLoginAt: string | null;

    status: UserStatus;
}
