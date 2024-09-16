export function removeCurrentUserId() {
    localStorage.removeItem(import.meta.env.VITE_CURRENT_USER_ID_LOCALSTORAGE_KEY);
}
