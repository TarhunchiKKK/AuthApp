import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { HomePage, SignInPage, SignUpPage } from "../pages";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: (
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
        ),
    },
    {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />,
    },
    {
        path: ROUTES.SIGN_UP,
        element: <SignUpPage />,
    },
]);
