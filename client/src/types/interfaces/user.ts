export interface IUser {
    id: string;

    name: string;

    email: string;

    password: string;

    regiteredAt: Date;

    lastLoginAt: Date;

    status: UserStatus;
}
