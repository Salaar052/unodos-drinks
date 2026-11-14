export const MENU_UNLOCK_KEY = "unodos-drinks-menu-unlocked";

export function isMenuUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(MENU_UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

export function setMenuUnlocked(): void {
  try {
    localStorage.setItem(MENU_UNLOCK_KEY, "1");
  } catch {
    // ignore quota / private mode
  }
}