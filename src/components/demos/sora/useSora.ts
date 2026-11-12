import { useDemoLocale } from "@/components/demos/DemoLocale";
import { soraContent } from "@/demos/sora/content";

/** Sora content in the current page's language (Client Components). */
export const useSora = () => soraContent[useDemoLocale()];
