"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, type ReactNode } from "react";
import { locales, type Locale } from "@/i18n/config";
import { switchDemoLocale } from "@/demos/shared/routing";
import { cn } from "@/lib/cn";

const DemoLocaleContext = createContext<Locale>("sv");

/** Gives client components inside a demo the page locale (root params are server-only). */
export function DemoLocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <DemoLocaleContext.Provider value={locale}>{children}</DemoLocaleContext.Provider>;
}

export const useDemoLocale = () => useContext(DemoLocaleContext);

/** SV / EN toggle that keeps the visitor on the same demo page. */
export function DemoLanguageSwitch({ className, label }: { className?: string; label: string }) {
  const locale = useDemoLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={cn("flex items-center gap-1 text-xs tracking-[0.12em]", className)}>
      {locales.map((target, i) => (
        <span key={target} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden className="opacity-30">
              /
            </span>
          )}
          <Link
            href={switchDemoLocale(pathname, target)}
            hrefLang={target}
            lang={target}
            aria-current={target === locale ? "true" : undefined}
            className={cn("px-1 py-2 uppercase transition-opacity hover:opacity-100", target === locale ? "opacity-100" : "opacity-45")}
          >
            {target}
          </Link>
        </span>
      ))}
    </nav>
  );
}
