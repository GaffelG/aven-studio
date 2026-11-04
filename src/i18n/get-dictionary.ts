import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "./config";
import type sv from "./dictionaries/sv";

/** Swedish is the source of truth; every other locale must match its shape. */
export type Dictionary = typeof sv;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  sv: () => import("./dictionaries/sv").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

/** Resolves the current locale from the route segment (undefined outside app/[lang], e.g. demo sites). */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!locale || !hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}
