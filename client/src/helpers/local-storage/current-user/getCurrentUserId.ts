export function getCurrentUserId() {
    return localStorage.getItem(import.meta.env.VITE_CURRENT_USER_ID_LOCALSTORAGE_KEY);
}
