"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { rememberLocale } from "@/i18n/remember-locale";
import { cn } from "@/lib/cn";
import type { LanguageLabels } from "./types";

type Props = { locale: Locale; labels: LanguageLabels; className?: string };

/** Swaps the locale segment of the current path and remembers the choice. */
export function LanguageSwitcher({ locale, labels, className }: Props) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <nav aria-label={labels.label} className={cn("flex items-center gap-1 text-xs tracking-[0.12em]", className)}>
      {locales.map((target, i) => (
        <span key={target} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="opacity-30">/</span>}
          <Link
            href={`/${target}${rest}`}
            hrefLang={target}
            lang={target}
            aria-label={labels[target]}
            aria-current={target === locale ? "true" : undefined}
            onClick={() => rememberLocale(target)}
            className={cn(
              "px-1 py-2 uppercase transition-opacity duration-300 hover:opacity-100",
              target === locale ? "opacity-100" : "opacity-45",
            )}
          >
            {target}
          </Link>
        </span>
      ))}
    </nav>
  );
}
