/* eslint-disable class-methods-use-this */
import { LocalStorageKey } from "@enums/localStorage";

class LocalStorageServiceImpl {
  setItem(key: LocalStorageKey, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: LocalStorageKey): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: LocalStorageKey): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export const LocalStorage = new LocalStorageServiceImpl();
