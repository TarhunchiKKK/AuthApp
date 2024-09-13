import { IUser } from "../../../types";
import { IUserResponse } from "../interfaces";

export function transformUserResponse(user: IUserResponse): IUser {
    return {
        ...user,
        regiteredAt: new Date(user.regiteredAt),
        lastLoginAt: user.lastLoginAt ? new Date(user.lastLoginAt) : null,
    };
}
