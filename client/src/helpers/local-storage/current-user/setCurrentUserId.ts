export function setCurrentUserId(userId: string) {
    localStorage.setItem(import.meta.env.VITE_CURRENT_USER_ID_LOCALSTORAGE_KEY, userId);
}
