import type { Locale } from "@/i18n/config";

/** Inner pages, in navigation order. Slugs are shared across locales. */
export const pageKeys = ["services", "work", "pricing", "about", "contact"] as const;
export type PageKey = (typeof pageKeys)[number];

export const pagePaths: Record<PageKey, string> = {
  services: "/services",
  work: "/work",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
};

/** Prefixes a path with the locale segment: ("sv", "/work") → "/sv/work". */
export function localizedHref(locale: Locale, path = "/"): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
