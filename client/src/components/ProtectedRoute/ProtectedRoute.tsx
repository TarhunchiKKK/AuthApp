import { IProtectedRouteProps } from "./props";
import { useIsAuth } from "../../helpers";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../router";

export function ProtectedRoute({ children }: IProtectedRouteProps) {
    const isAuth = useIsAuth();

    if (!isAuth) {
        return <Navigate to={ROUTES.SIGN_IN} />;
    }

    return children;
}
