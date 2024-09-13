import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types";
import { transformUserResponse } from "./helpers";
import {
    IChangeUsersStatusQueryArgs,
    IGetAllUsersQueryArgs,
    IRemoveMultipleUsersQueryArgs,
    IUserResponse,
} from "./interfaces";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/users`,
    }),

    tagTypes: ["User"],

    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], IGetAllUsersQueryArgs>({
            query: (queryArgs: IGetAllUsersQueryArgs) => ({
                url: "",
                headers: {
                    Authorization: `Bearer ${queryArgs.headers.Authorization}`,
                },
            }),
            transformResponse: (users: IUserResponse[]) => users.map(transformUserResponse),
            providesTags: ["User"],
        }),

        changeUsersStatus: builder.mutation<void, IChangeUsersStatusQueryArgs>({
            query: (queryArgs: IChangeUsersStatusQueryArgs) => ({
                url: "/change-status",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${queryArgs.headers.Authorization}`,
                },
                body: {
                    ...queryArgs.body,
                },
            }),
            invalidatesTags: ["User"],
        }),

        removeMultipleUsers: builder.mutation<void, IRemoveMultipleUsersQueryArgs>({
            query: (queryArgs: IRemoveMultipleUsersQueryArgs) => ({
                url: "remove-multiple",
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${queryArgs.headers.Authorization}`,
                },
                body: {
                    ...queryArgs.body,
                },
            }),
            invalidatesTags: ["User"],
        }),
    }),
});
