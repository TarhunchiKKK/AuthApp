import { useNavigate } from "react-router-dom";
import { removeCurrentUserId, removeToken } from "../local-storage";
import { ROUTES } from "../../router";

export function useLogout() {
    const navigate = useNavigate();

    const logout = () => {
        removeToken();
        removeCurrentUserId();
        navigate(ROUTES.SIGN_IN);
    };

    return logout;
}
