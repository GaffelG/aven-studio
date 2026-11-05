import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/i18n/config";
import { localizedHref, pageKeys, pagePaths } from "@/lib/routes";
import { siteUrl } from "@/lib/site";

const paths = ["/", ...pageKeys.map((key) => pagePaths[key]), "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localizedHref(locale, path)}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localizedHref(l, path)}`])),
          "x-default": `${siteUrl}${localizedHref(defaultLocale, path)}`,
        },
      },
    })),
  );
}
