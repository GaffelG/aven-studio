"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { DemoLanguageSwitch } from "@/components/demos/DemoLocale";
import { isDemoSection } from "@/demos/shared/routing";
import { cn } from "@/lib/cn";
import { BergstenLogo, bergstenContainer } from "./BergstenUi";
import { useBergsten } from "./useBergsten";

export function BergstenHeader() {
  const bergsten = useBergsten();
  const bergstenPaths = bergsten.paths;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const isActive = (href: string) => isDemoSection(pathname, href);

  return (
    <header className="sticky top-0 z-40 border-b border-bergsten-line bg-bergsten-sand/95">
      <div className={cn(bergstenContainer, "flex h-16 items-center justify-between gap-6 lg:h-20")}>
        <BergstenLogo b={bergsten} />

        <nav aria-label={bergsten.ui.mainNav} className="hidden lg:block">
          <ul className="flex gap-10 font-bergsten text-sm tracking-[0.08em] uppercase">
            {bergsten.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="py-2 text-bergsten-ink/70 transition-colors hover:text-bergsten-green aria-[current=page]:text-bergsten-green"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <DemoLanguageSwitch label={bergsten.ui.language} />
          <a href={bergsten.phone.href} className="hidden text-sm whitespace-nowrap text-bergsten-muted transition-colors hover:text-bergsten-ink xl:inline">
            {bergsten.phone.label}
          </a>
          <Link
            href={bergstenPaths.quote}
            className="bg-bergsten-green px-5 py-2.5 font-bergsten text-sm font-medium tracking-[0.08em] whitespace-nowrap text-bergsten-paper uppercase transition-colors hover:bg-bergsten-ink"
          >
            {bergsten.quoteCta}
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-10 items-center gap-3 px-2 font-bergsten text-sm tracking-[0.12em] uppercase lg:hidden"
        >
          {open ? bergsten.ui.close : bergsten.ui.menu}
          <span aria-hidden className="relative block h-2.5 w-6">
            <span className={cn("absolute inset-x-0 top-0 h-px bg-current transition-transform", open && "translate-y-[5px] rotate-45")} />
            <span className={cn("absolute inset-x-0 bottom-0 h-px bg-current transition-transform", open && "-translate-y-[4px] -rotate-45")} />
          </span>
        </button>
      </div>

      <nav id={panelId} aria-label={bergsten.ui.mainNav} hidden={!open} className="border-t border-bergsten-line lg:hidden">
        <ul className={cn(bergstenContainer, "py-4")}>
          {[...bergsten.nav, { label: bergsten.quoteCta, href: bergstenPaths.quote }].map((item) => (
            <li key={item.href} className="border-b border-bergsten-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block py-4 font-bergsten text-2xl font-semibold aria-[current=page]:text-bergsten-green"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={cn(bergstenContainer, "border-t border-bergsten-line py-3")}>
          <DemoLanguageSwitch label={bergsten.ui.language} />
        </div>
      </nav>
    </header>
  );
}
