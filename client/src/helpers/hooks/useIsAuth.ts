import { getCurrentUserId, getToken } from "../local-storage";

export function useIsAuth() {
    const token = getToken();
    const currentUserId = getCurrentUserId();
    return token && currentUserId;
}
