import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { HomePage } from "../pages";
import { SignInPage } from "../pages/Auth";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <SignInPage />,
        children: [
            {
                path: ROUTES.SIGN_IN,
                element: <SignInPage />,
            },
        ],
    },
]);
