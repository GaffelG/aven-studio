import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { boContent, boLocales, isBoLocale, type Bo } from "./content";

/** bo´s viet deli content in the current page's language (Server Components only). */
export async function getBo(): Promise<Bo> {
  const value = await lang();
  if (!value || !isBoLocale(value)) notFound();
  return boContent[value];
}

/** German and English are both prerendered. */
export const boStaticParams = () => boLocales.map((value) => ({ lang: value }));
