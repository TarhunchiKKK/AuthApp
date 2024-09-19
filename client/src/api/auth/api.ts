import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types";
import {
    IAuthError,
    IGetProfileQueryArgs,
    ISignInQueryArgs,
    ISignInResponse,
    ISignUpQueryArgs,
    ISignUpResponse,
} from "./interfaces";

export const authApi = createApi({
    reducerPath: "auth/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/auth`,
    }),

    endpoints: (builder) => ({
        signUp: builder.mutation<ISignUpResponse, ISignUpQueryArgs>({
            query: (queryArgs: ISignUpQueryArgs) => ({
                url: "/sign-up",
                method: "POST",
                body: queryArgs.body,
            }),
            transformErrorResponse: (error: unknown) => (error as IAuthError).data.message,
        }),

        signIn: builder.mutation<ISignInResponse, ISignInQueryArgs>({
            query: (queryArgs: ISignInQueryArgs) => ({
                url: "/sign-in",
                method: "POST",
                body: queryArgs.body,
            }),
            // transformResponse: (response: ISignInResponse) => response.access.access,
            transformErrorResponse: (error: unknown) => (error as IAuthError).data.message,
        }),

        getProfile: builder.query<Omit<IUser, "password">, IGetProfileQueryArgs>({
            query: (queryArgs: IGetProfileQueryArgs) => ({
                url: "/me",
                method: "GET",
                headers: queryArgs.headers,
            }),
            // transformErrorResponse: (error: unknown) => (error as IAuthError).message,
        }),
    }),
});
