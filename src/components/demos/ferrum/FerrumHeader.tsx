"use client";

import { useId, useState } from "react";
import { ferrum } from "@/demos/ferrum/content";
import { cn } from "@/lib/cn";
import { FerrumLogo } from "./FerrumLogo";

export function FerrumHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <header className="sticky top-0 z-40 border-b border-ferrum-line bg-ferrum-ink/95">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-10">
        <FerrumLogo />

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex gap-8 font-ferrum text-lg font-semibold tracking-wide uppercase">
            {ferrum.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ferrum-text/75 transition-colors hover:text-ferrum-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={ferrum.phone.href} className="text-sm text-ferrum-muted transition-colors hover:text-ferrum-text">
            {ferrum.phone.label}
          </a>
          <a
            href="#boka"
            className="bg-ferrum-accent px-5 py-2.5 font-ferrum text-lg font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
          >
            {ferrum.hero.primaryCta}
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-10 items-center gap-3 px-2 font-ferrum text-lg font-semibold tracking-wide uppercase lg:hidden"
        >
          {open ? "Stäng" : "Meny"}
          <span aria-hidden className="relative block h-3 w-6">
            <span className={cn("absolute inset-x-0 top-0 h-0.5 bg-current transition-transform", open && "translate-y-[5px] rotate-45")} />
            <span className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform", open && "-translate-y-[5px] -rotate-45")} />
          </span>
        </button>
      </div>

      <nav id={panelId} aria-label="Huvudmeny" hidden={!open} className="border-t border-ferrum-line lg:hidden">
        <ul className="px-5 py-4 sm:px-8">
          {ferrum.nav.map((item) => (
            <li key={item.href} className="border-b border-ferrum-line last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-ferrum text-3xl font-bold tracking-wide uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4 border-t border-ferrum-line px-5 py-4 sm:px-8">
          <a href={ferrum.phone.href} className="text-sm text-ferrum-muted">
            {ferrum.phone.label}
          </a>
          <a
            href="#boka"
            onClick={() => setOpen(false)}
            className="bg-ferrum-accent px-5 py-2.5 font-ferrum text-lg font-bold tracking-wide text-ferrum-ink uppercase"
          >
            {ferrum.hero.primaryCta}
          </a>
        </div>
      </nav>
    </header>
  );
}
