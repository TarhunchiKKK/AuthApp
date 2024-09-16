export function setToken(token: string) {
    localStorage.setItem(import.meta.env.VITE_TOKEN_LOCALSTORAGE_KEY, token);
}
