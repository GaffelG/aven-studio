import { Archivo } from "next/font/google";

/** Typeface for the Bergsten Bygg demo; kept here so only demo routes load it. */
export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
});
