import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, locales, type Locale } from "@/i18n/config";

/** Locale of the current demo page, from the [lang] segment above each demo's root layout. */
export async function demoLocale(): Promise<Locale> {
  const value = await lang();
  if (!value || !hasLocale(value)) notFound();
  return value;
}

/** Both locales are prerendered for every demo. */
export const demoStaticParams = () => locales.map((value) => ({ lang: value }));

/** Intl locale tag for numbers and dates inside the demos. */
export const intlLocale = (locale: Locale) => (locale === "sv" ? "sv-SE" : "en-GB");
