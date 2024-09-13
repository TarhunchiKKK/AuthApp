import { getToken } from "../local-storage";

export function useIsAuth() {
    return getToken() ? true : false;
}
