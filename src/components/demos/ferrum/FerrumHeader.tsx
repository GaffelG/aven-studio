"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { DemoCurrencySwitch } from "@/components/demos/DemoCurrency";
import { DemoLanguageSwitch } from "@/components/demos/DemoLocale";
import { isDemoSection } from "@/demos/shared/routing";
import { cn } from "@/lib/cn";
import { FerrumLogo } from "./FerrumLogo";
import { useFerrum } from "./useFerrum";

export function FerrumHeader() {
  const ferrum = useFerrum();
  const ferrumPaths = ferrum.paths;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const isActive = (href: string) => isDemoSection(pathname, href);

  return (
    <header className="sticky top-0 z-40 border-b border-ferrum-line bg-ferrum-ink/95">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-10">
        <FerrumLogo />

        <nav aria-label={ferrum.ui.mainNav} className="hidden lg:block">
          <ul className="flex gap-8 font-ferrum text-lg font-semibold tracking-wide uppercase">
            {ferrum.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative py-2 text-ferrum-text/75 transition-colors hover:text-ferrum-accent aria-[current=page]:text-ferrum-text aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-ferrum-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <DemoLanguageSwitch label={ferrum.ui.language} className="text-ferrum-text" />
          <DemoCurrencySwitch className="text-ferrum-text" />
          <a href={ferrum.phone.href} className="hidden text-sm whitespace-nowrap text-ferrum-muted transition-colors hover:text-ferrum-text xl:inline">
            {ferrum.phone.label}
          </a>
          <Link
            href={ferrumPaths.booking}
            className="bg-ferrum-accent px-5 py-2.5 font-ferrum text-lg font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
          >
            {ferrum.hero.primaryCta}
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-10 items-center gap-3 px-2 font-ferrum text-lg font-semibold tracking-wide uppercase lg:hidden"
        >
          {open ? ferrum.ui.close : ferrum.ui.menu}
          <span aria-hidden className="relative block h-3 w-6">
            <span className={cn("absolute inset-x-0 top-0 h-0.5 bg-current transition-transform", open && "translate-y-[5px] rotate-45")} />
            <span className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform", open && "-translate-y-[5px] -rotate-45")} />
          </span>
        </button>
      </div>

      <nav id={panelId} aria-label={ferrum.ui.mainNav} hidden={!open} className="border-t border-ferrum-line lg:hidden">
        <ul className="px-5 py-4 sm:px-8">
          {ferrum.nav.map((item) => (
            <li key={item.href} className="border-b border-ferrum-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block py-4 font-ferrum text-3xl font-bold tracking-wide uppercase aria-[current=page]:text-ferrum-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4 border-t border-ferrum-line px-5 py-4 sm:px-8">
          <a href={ferrum.phone.href} className="text-sm text-ferrum-muted">
            {ferrum.phone.label}
          </a>
          <span className="flex items-center gap-3">
            <DemoLanguageSwitch label={ferrum.ui.language} />
            <DemoCurrencySwitch />
          </span>
          <Link
            href={ferrumPaths.booking}
            onClick={() => setOpen(false)}
            className="bg-ferrum-accent px-5 py-2.5 font-ferrum text-lg font-bold tracking-wide text-ferrum-ink uppercase"
          >
            {ferrum.hero.primaryCta}
          </Link>
        </div>
      </nav>
    </header>
  );
}
