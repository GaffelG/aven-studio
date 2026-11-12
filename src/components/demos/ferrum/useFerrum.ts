import { useDemoLocale } from "@/components/demos/DemoLocale";
import { ferrumContent } from "@/demos/ferrum/content";

/** Ferrum content in the current page's language (Client Components). */
export const useFerrum = () => ferrumContent[useDemoLocale()];
