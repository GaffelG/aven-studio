import { demoLocale } from "@/demos/shared/locale";
import { soraContent, type Sora } from "./content";

/** Sora content in the current page's language (Server Components only). */
export async function getSora(): Promise<Sora> {
  return soraContent[await demoLocale()];
}
