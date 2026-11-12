import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

/*
 * Proposed starting prices, excluding VAT, set by hand per currency.
 * Other currencies are deliberately rounded guide prices, not live conversions:
 * review them now and then against the exchange rate.
 * Copy and features live in the pricing dictionaries.
 */
export type PackageId = keyof Dictionary["pricing"]["packages"];

export const currencies = ["SEK", "EUR", "USD", "NOK", "DKK"] as const;
export type Currency = (typeof currencies)[number];
export type Prices = Record<Currency, number>;

/** Currency shown before the visitor picks one. */
export const defaultCurrency: Record<Locale, Currency> = { sv: "SEK", en: "EUR" };

export const packagePrices: Record<PackageId, Prices> = {
  start: { SEK: 14900, EUR: 1290, USD: 1390, NOK: 14900, DKK: 9900 },
  business: { SEK: 29900, EUR: 2590, USD: 2790, NOK: 29900, DKK: 19900 },
  premium: { SEK: 54900, EUR: 4790, USD: 5190, NOK: 54900, DKK: 36900 },
};

export const recommendedPackage: PackageId = "business";

/** Monthly price for the care plan. */
export const carePrice: Prices = { SEK: 690, EUR: 59, USD: 65, NOK: 690, DKK: 449 };

export function formatPrice(amount: number, locale: Locale, currency: Currency = "SEK"): string {
  return new Intl.NumberFormat(locale === "sv" ? "sv-SE" : "en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
