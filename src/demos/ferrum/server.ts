import { demoLocale } from "@/demos/shared/locale";
import { ferrumContent, type Ferrum } from "./content";

/** Ferrum content in the current page's language (Server Components only). */
export async function getFerrum(): Promise<Ferrum> {
  return ferrumContent[await demoLocale()];
}
