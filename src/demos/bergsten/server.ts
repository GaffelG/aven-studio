import { demoLocale } from "@/demos/shared/locale";
import { bergstenContent, type Bergsten } from "./content";

/** Bergsten content in the current page's language (Server Components only). */
export async function getBergsten(): Promise<Bergsten> {
  return bergstenContent[await demoLocale()];
}
