"use client";

import { useCallback, useSyncExternalStore } from "react";
import { MENU_UNLOCK_KEY, setMenuUnlocked } from "@/lib/storage";

const UNLOCK_EVENT = "unodos-menu-unlock";

function subscribe(onStoreChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === MENU_UNLOCK_KEY || e.key === null) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(UNLOCK_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(UNLOCK_EVENT, onStoreChange);
  };
}

function getSnapshot(): boolean {
  try {
    return localStorage.getItem(MENU_UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function useMenuUnlocked() {
  const unlocked = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const unlock = useCallback(() => {
    setMenuUnlocked();
    window.dispatchEvent(new Event(UNLOCK_EVENT));
  }, []);

  return { unlocked, unlock };
}