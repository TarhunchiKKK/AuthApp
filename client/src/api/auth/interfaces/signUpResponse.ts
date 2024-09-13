import { IUser } from "../../../types";

export interface ISignUpResponse {
    user: Omit<IUser, "password">;

    access: {
        access: string;
    };
}
