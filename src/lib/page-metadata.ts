import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pagePaths, type PageKey } from "./routes";
import { siteName } from "./site";

const ogLocales: Record<Locale, string> = { sv: "sv_SE", en: "en_GB" };

/** Canonical URL plus hreflang alternates for a path shared by all locales. */
export function localeAlternates(locale: Locale, path = "/"): Metadata["alternates"] {
  return {
    canonical: localizedHref(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localizedHref(l, path)])),
      "x-default": localizedHref(defaultLocale, path),
    },
  };
}

type Options = { locale: Locale; path?: string; title: string; description: string };

/** Shared metadata shape: alternates, Open Graph and Twitter card. */
export function buildMetadata({ locale, path = "/", title, description }: Options): Metadata {
  return {
    description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: localizedHref(locale, path),
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Metadata for an inner page. */
export async function pageMetadata(key: PageKey): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const title = dict.nav[key];
  const base = buildMetadata({
    locale,
    path: pagePaths[key],
    title: `${title} — ${siteName}`,
    description: dict[key].metaDescription,
  });

  // Defining openGraph here replaces the inherited one, so re-attach the locale's share image.
  const image = { url: `${localizedHref(locale)}/opengraph-image`, width: 1200, height: 630, alt: siteName };
  return {
    title,
    ...base,
    openGraph: { ...base.openGraph, images: [image] },
    twitter: { ...base.twitter, images: [image.url] },
  };
}
