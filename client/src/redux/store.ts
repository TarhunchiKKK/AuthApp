import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { usersApi } from "../api/users";
import { selectedUsersSlice } from "./selected-users";
import { authApi } from "../api";

export const store = configureStore({
    reducer: {
        [selectedUsersSlice.name]: selectedUsersSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware).concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
