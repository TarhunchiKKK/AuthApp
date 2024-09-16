export function getToken() {
    return localStorage.getItem(import.meta.env.VITE_TOKEN_LOCALSTORAGE_KEY);
}
