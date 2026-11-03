import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

/*
 * Proposed starting prices in SEK, excluding VAT.
 * Adjust the numbers here; copy and features live in the pricing dictionaries.
 */
export type PackageId = keyof Dictionary["pricing"]["packages"];

export const packagePrices: Record<PackageId, number> = {
  start: 14900,
  business: 29900,
  premium: 54900,
};

export const recommendedPackage: PackageId = "business";

/** Monthly price for the care plan. */
export const carePrice = 690;

export function formatPrice(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "sv" ? "sv-SE" : "en-GB", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(amount);
}
