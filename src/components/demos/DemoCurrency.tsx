"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { currencies, defaultCurrency, formatPrice, type Currency } from "@/content/pricing";
import { cn } from "@/lib/cn";
import { useDemoLocale } from "./DemoLocale";

/*
 * Currency switching for the concept demos. The demo businesses price in SEK; other currencies are
 * approximate conversions with fixed rates, rounded to tidy numbers and marked with "≈".
 * The choice is shared with the Aven pricing page through the same localStorage key.
 */

/** Approximate SEK per unit of each currency. Rough guide values: update now and then. */
const sekPer: Record<Currency, number> = { SEK: 1, EUR: 11.5, USD: 10.7, NOK: 1, DKK: 1.5 };

const storageKey = "aven-currency";
const labels = { sv: "Valuta", en: "Currency" } as const;

/** Converts a SEK amount and rounds it so it reads like a real price (nearest 5, or 1 for small amounts). */
export function convertFromSek(sek: number, currency: Currency): number {
  if (currency === "SEK") return sek;
  const value = sek / sekPer[currency];
  return value >= 50 ? Math.round(value / 5) * 5 : Math.round(value);
}

const CurrencyContext = createContext<{ currency: Currency; setCurrency: (c: Currency) => void } | null>(null);

function useDemoCurrency() {
  const value = useContext(CurrencyContext);
  if (!value) throw new Error("DemoPrice and DemoCurrencySwitch must be inside DemoCurrencyProvider");
  return value;
}

/** Holds the visitor's currency for a demo. Starts with the language default, then restores a saved choice. */
export function DemoCurrencyProvider({ children }: { children: ReactNode }) {
  const locale = useDemoLocale();
  const [currency, setCurrencyState] = useState<Currency>(defaultCurrency[locale]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restores the saved choice after hydration; the server renders the default
      if (saved && (currencies as readonly string[]).includes(saved)) setCurrencyState(saved as Currency);
    } catch {
      // Storage blocked: keep the default.
    }
  }, []);

  const setCurrency = (next: Currency) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Switched for this visit only.
    }
  };

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
}

/** Rounds to `digits` significant digits, for large amounts such as budgets (43 478 → 43 000). */
const roundSignificant = (value: number, digits: number) => {
  const factor = 10 ** Math.max(Math.floor(Math.log10(Math.abs(value))) - digits + 1, 0);
  return Math.round(value / factor) * factor;
};

/**
 * Formats SEK amounts in the visitor's currency, for text that isn't a single price (e.g. budget ranges).
 * `approx` is true when the amounts are conversions, so callers can add one "≈" to the whole label.
 */
export function useSekFormatter() {
  const { currency } = useDemoCurrency();
  const locale = useDemoLocale();
  return {
    approx: currency !== "SEK",
    format: (sek: number) => formatPrice(currency === "SEK" ? sek : roundSignificant(sek / sekPer[currency], 2), locale, currency),
  };
}

/** A SEK price shown in the visitor's currency; converted prices get a "≈" prefix. */
export function DemoPrice({ sek, className }: { sek: number; className?: string }) {
  const { currency } = useDemoCurrency();
  const locale = useDemoLocale();
  const text = formatPrice(convertFromSek(sek, currency), locale, currency);
  return <span className={className}>{currency === "SEK" ? text : `≈ ${text}`}</span>;
}

/** Compact currency menu that inherits the surrounding text colour, so it fits every demo's header. */
export function DemoCurrencySwitch({ className }: { className?: string }) {
  const { currency, setCurrency } = useDemoCurrency();
  const locale = useDemoLocale();

  return (
    <label className={cn("relative inline-flex items-center text-xs tracking-[0.12em]", className)}>
      <span className="sr-only">{labels[locale]}</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        className="cursor-pointer appearance-none bg-transparent py-2 pr-4 pl-1 uppercase text-current focus-visible:outline-2 focus-visible:outline-current"
      >
        {currencies.map((code) => (
          <option key={code} value={code} className="text-black">
            {code}
          </option>
        ))}
      </select>
      <span aria-hidden className="pointer-events-none absolute right-0 text-[0.6rem] opacity-60">
        ▾
      </span>
    </label>
  );
}
