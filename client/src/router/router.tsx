import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { HomePage, SignInPage, SignUpPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <SignUpPage />,
        // element: <HomePage/>,
        children: [
            {
                path: ROUTES.SIGN_IN,
                element: <SignInPage />,
            },
            {
                path: ROUTES.SIGN_UP,
                element: <SignUpPage />,
            },
        ],
    },
]);
