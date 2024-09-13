import { createEntityAdapter } from "@reduxjs/toolkit";
import { IUser } from "../../types";

export const selectedUsersAdapter = createEntityAdapter({
    selectId: (user: IUser) => user.id,
});
