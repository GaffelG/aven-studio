import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pagePaths, type PageKey } from "./routes";

/** Title and language alternates for an inner page. */
export async function pageMetadata(key: PageKey): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: dict.nav[key],
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${pagePaths[key]}`])),
    },
  };
}
