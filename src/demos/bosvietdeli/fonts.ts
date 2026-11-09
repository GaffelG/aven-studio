import { Fraunces, Outfit } from "next/font/google";

/** Typefaces for the bo´s viet deli pitch mock-up; only this demo route loads them. */
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});
