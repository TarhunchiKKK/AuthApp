import { UserStatus } from "../enums";

export interface IUser {
    id: string;

    name: string;

    email: string;

    password: string;

    regiteredAt: Date;

    lastLoginAt: Date | null;

    status: UserStatus;
}
