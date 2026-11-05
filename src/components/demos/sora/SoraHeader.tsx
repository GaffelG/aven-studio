"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { sora, soraPaths } from "@/demos/sora/content";
import { cn } from "@/lib/cn";
import { SoraLogo, soraContainer } from "./SoraUi";

export function SoraHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-sora-line/70 bg-sora-cream/95">
      <div className={cn(soraContainer, "flex h-16 items-center justify-between gap-6 lg:h-20")}>
        <nav aria-label="Huvudmeny" className="hidden flex-1 lg:block">
          <ul className="flex gap-9 font-sora text-[0.8125rem] tracking-[0.18em] uppercase">
            {sora.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="py-2 text-sora-espresso/70 transition-colors hover:text-sora-clay-deep aria-[current=page]:text-sora-clay-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SoraLogo />

        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          <a href={sora.phone.href} className="text-sm text-sora-muted transition-colors hover:text-sora-espresso">
            {sora.phone.label}
          </a>
          <Link
            href={soraPaths.booking}
            className="rounded-full bg-sora-espresso px-5 py-2.5 font-sora text-[0.8125rem] tracking-[0.14em] text-sora-shell uppercase transition-colors hover:bg-sora-clay-deep"
          >
            {sora.bookCta}
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-10 items-center gap-3 px-2 font-sora text-[0.8125rem] tracking-[0.18em] uppercase lg:hidden"
        >
          {open ? "Stäng" : "Meny"}
        </button>
      </div>

      <nav id={panelId} aria-label="Huvudmeny" hidden={!open} className="border-t border-sora-line lg:hidden">
        <ul className={cn(soraContainer, "py-6 text-center")}>
          {[...sora.nav, { label: sora.bookCta, href: soraPaths.booking }].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block py-3 font-sora-serif text-4xl italic aria-[current=page]:text-sora-clay-deep"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
