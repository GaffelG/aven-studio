"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { currencies, defaultCurrency, formatPrice, type Currency, type Prices } from "@/content/pricing";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

const storageKey = "aven-currency";
const CurrencyContext = createContext<{ currency: Currency; locale: Locale; setCurrency: (c: Currency) => void } | null>(null);

function useCurrency() {
  const value = useContext(CurrencyContext);
  if (!value) throw new Error("Price and CurrencySwitcher must be inside CurrencyProvider");
  return value;
}

/** Holds the visitor's currency for the pricing page and remembers it between visits. */
export function CurrencyProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(defaultCurrency[locale]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restores the saved choice after hydration; server renders the locale default
      if (saved && (currencies as readonly string[]).includes(saved)) setCurrencyState(saved as Currency);
    } catch {
      // Storage blocked: keep the locale default.
    }
  }, []);

  const setCurrency = (next: Currency) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Not remembered, but still switched for this visit.
    }
  };

  return <CurrencyContext.Provider value={{ currency, locale, setCurrency }}>{children}</CurrencyContext.Provider>;
}

/** Segmented control listing every supported currency. */
export function CurrencySwitcher({ label, note, className }: { label: string; note: string; className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>
      <fieldset className="flex items-center gap-3">
        <legend className="sr-only">{label}</legend>
        <span aria-hidden className="text-xs tracking-[0.12em] text-silver-deep uppercase">
          {label}
        </span>
        <div className="flex rounded-full p-1 ring-1 ring-ink/12">
          {currencies.map((code) => (
            <label
              key={code}
              className={cn(
                "relative cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors",
                "has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink",
                code === currency ? "bg-ink text-paper" : "text-ink/60 hover:text-ink",
              )}
            >
              <input type="radio" name="currency" value={code} checked={code === currency} onChange={() => setCurrency(code)} className="sr-only" />
              {code}
            </label>
          ))}
        </div>
      </fieldset>
      {currency !== "SEK" && <p className="text-xs text-silver-deep">{note}</p>}
    </div>
  );
}

/** A price in the visitor's chosen currency. */
export function Price({ prices, className }: { prices: Prices; className?: string }) {
  const { currency, locale } = useCurrency();
  return <span className={className}>{formatPrice(prices[currency], locale, currency)}</span>;
}
