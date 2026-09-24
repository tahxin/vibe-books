/**
 * Safe localStorage helper functions with SSR and error boundary checks
 */

export function getStoredItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch (error) {
    console.error(`Failed to retrieve "${key}" from localStorage:`, error);
    return defaultValue;
  }
}

export function setStoredItem<T>(key: string, value: T): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Failed to store "${key}" in localStorage:`, error);
    return false;
  }
}
