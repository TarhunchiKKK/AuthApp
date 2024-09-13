import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { authApi } from "./api";
import { getToken, removeToken } from "./helpers";

export function App() {
    const [getProfile, { isLoading }] = authApi.useLazyGetProfileQuery();

    useEffect(() => {
        async function authorize() {
            const token = getToken();
            const authHeaders = {
                headers: {
                    Authorization: `Bearer ${token ?? ""}`,
                },
            };

            const { isError } = await getProfile(authHeaders);

            if (isError) {
                removeToken();
            }
        }

        authorize();
    }, [getProfile]);

    return <>{!isLoading && <RouterProvider router={router} />}</>;
}
