"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { isActive } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { LanguageLabels, NavItem } from "./types";

type Props = {
  locale: Locale;
  items: NavItem[];
  navLabel: string;
  labels: { open: string; close: string; cta: string; ctaHref: string };
  languageLabels: LanguageLabels;
  className?: string;
};

/** Full-screen menu for small screens, toggled by a text label. */
export function MobileNav({ locale, items, navLabel, labels, languageLabels, className }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // While open: lock scroll, make the page behind inert, and keep Tab focus inside the menu.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const behind = document.querySelectorAll<HTMLElement>("#main, body > footer");
    root.style.overflow = "hidden";
    behind.forEach((el) => (el.inert = true));

    const focusables = () => [
      toggleRef.current,
      ...(panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []),
    ].filter((el): el is HTMLElement => !!el);
    focusables()[1]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const index = items.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey ? (index <= 0 ? items.length - 1 : index - 1) : (index + 1) % items.length;
      e.preventDefault();
      items[next]?.focus();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      root.style.overflow = "";
      behind.forEach((el) => (el.inert = false));
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative z-50 -mr-2 flex h-10 items-center gap-3 px-2 text-sm font-medium transition-colors",
          open && "text-paper",
        )}
      >
        <span>{open ? labels.close : labels.open}</span>
        <span aria-hidden className="relative block h-2.5 w-5">
          <span
            className={cn(
              "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-500 ease-out-soft",
              open && "translate-y-[5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-500 ease-out-soft",
              open && "-translate-y-[4px] -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-ink px-5 pt-24 pb-8 text-paper sm:px-8"
      >
        <nav aria-label={navLabel} className="flex-1 overflow-y-auto">
          <ol className="border-t border-paper/10">
            {items.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-paper/10">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className="flex items-baseline gap-5 py-5"
                  >
                    <span className="font-display text-xs text-silver tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("text-display-md font-display", active ? "text-sage" : "text-paper")}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-8 flex items-center justify-between gap-4">
          <LanguageSwitcher locale={locale} labels={languageLabels} />
          <Button href={labels.ctaHref} variant="inverse" size="sm" arrow onClick={close}>
            {labels.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
