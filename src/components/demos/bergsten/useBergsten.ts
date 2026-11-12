import { useDemoLocale } from "@/components/demos/DemoLocale";
import { bergstenContent } from "@/demos/bergsten/content";

/** Bergsten content in the current page's language (Client Components). */
export const useBergsten = () => bergstenContent[useDemoLocale()];
