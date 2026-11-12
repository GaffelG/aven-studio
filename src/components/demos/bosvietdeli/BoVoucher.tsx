"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { useBo } from "./BoLocale";

/** Example voucher values; the restaurant would set its own. */
const amounts = [25, 50, 75, 100];

/** Voucher purchase sketch: pick an amount and a recipient, then a demo confirmation. Nothing is sold. */
export function BoVoucher() {
  const bo = useBo();
  const t = bo.voucher;
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(50);
  const [recipient, setRecipient] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div role="status" className="mt-6 rounded-xl bg-[var(--bo-cream)] p-5 text-[var(--bo-ink)]">
        <p className="font-medium">
          {t.done(amount, recipient.trim())}
        </p>
        <p className="mt-1 text-sm text-[var(--bo-muted)]">{t.realShop}</p>
        <p className="mt-3 text-xs text-[var(--bo-muted)]">{bo.notice}</p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setOpen(false);
            setRecipient("");
          }}
          className="mt-4 text-sm underline underline-offset-4"
        >
          {t.close}
        </button>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 rounded-full bg-[var(--bo-cream)] px-6 py-3 font-medium text-[var(--bo-beet)] hover:bg-white"
      >
        {t.buy}
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mt-6"
    >
      <fieldset>
        <legend className="text-sm text-[var(--bo-cream)]/75">{t.amount}</legend>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {amounts.map((value) => (
            <label
              key={value}
              className={cn(
                "relative cursor-pointer rounded-lg border border-white/25 py-2.5 text-center tabular-nums hover:border-white/60",
                "has-checked:border-[var(--bo-cream)] has-checked:bg-[var(--bo-cream)] has-checked:text-[var(--bo-beet)]",
                "has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-[var(--bo-cream)]",
              )}
            >
              <input type="radio" name="amount" checked={amount === value} onChange={() => setAmount(value)} className="sr-only" />
              {bo.locale === "de" ? `${value} €` : `€${value}`}
            </label>
          ))}
        </div>
      </fieldset>
      <label htmlFor="bo-recipient" className="mt-4 block text-sm text-[var(--bo-cream)]/75">
        {t.forWhom} <span className="text-xs">{t.optional}</span>
      </label>
      <input
        id="bo-recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="mt-2 w-full rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-[var(--bo-cream)] focus:border-[var(--bo-cream)] focus:outline-none"
      />
      <button type="submit" className="mt-5 w-full rounded-full bg-[var(--bo-cream)] px-6 py-3 font-medium text-[var(--bo-beet)] hover:bg-white">
        {t.pay}
      </button>
    </form>
  );
}
