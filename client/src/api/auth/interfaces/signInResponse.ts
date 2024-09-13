import { IUser } from "../../../types";

export interface ISignInResponse {
    user: Omit<IUser, "password">;

    access: {
        access: string;
    };
}
