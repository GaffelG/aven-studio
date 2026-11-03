import { localeCookie, type Locale } from "./config";

/** Persists the visitor's language choice for one year (read by the proxy). */
export function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
