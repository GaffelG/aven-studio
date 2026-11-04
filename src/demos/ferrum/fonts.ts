import { Barlow_Condensed } from "next/font/google";

/** Display face for the Ferrum Verkstad demo; kept here so only demo routes load it. */
export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});
