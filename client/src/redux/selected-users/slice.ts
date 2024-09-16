import { createSlice } from "@reduxjs/toolkit";
import { selectedUsersAdapter } from "./adapter";

export const selectedUsersSlice = createSlice({
    name: "users/selected",
    initialState: selectedUsersAdapter.getInitialState(),
    reducers: {
        selectOneUser: selectedUsersAdapter.addOne,
        selectManyUsers: selectedUsersAdapter.addMany,
        unselectOneUser: selectedUsersAdapter.removeOne,
        unselectAllUsers: selectedUsersAdapter.removeAll,
    },
});

export const { selectOneUser, unselectOneUser, selectManyUsers, unselectAllUsers } =
    selectedUsersSlice.actions;
