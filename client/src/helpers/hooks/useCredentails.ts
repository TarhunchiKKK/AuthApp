import { getCurrentUserId, getToken, setCurrentUserId, setToken } from "../local-storage";

export function useCredentails() {
    const token = getToken() || "";
    const currentUserId = getCurrentUserId() || "";

    const saveCredentails = (userId: string, token: string) => {
        setCurrentUserId(userId);
        setToken(token);
    };

    return {
        token,
        currentUserId,
        saveCredentails,
    };
}
