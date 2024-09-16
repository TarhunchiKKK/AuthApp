export function removeToken() {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_LOCALSTORAGE_KEY);
}
