"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, type ReactNode } from "react";
import { boAdmin, boContent, boHome, boLocales, type BoLocale } from "@/demos/bosvietdeli/content";
import { cn } from "@/lib/cn";

const BoLocaleContext = createContext<BoLocale>("de");

/** Gives the mock-up's client components the page language (root params are server-only). */
export function BoLocaleProvider({ locale, children }: { locale: BoLocale; children: ReactNode }) {
  return <BoLocaleContext.Provider value={locale}>{children}</BoLocaleContext.Provider>;
}

/** Content in the current page's language (Client Components). */
export const useBo = () => boContent[useContext(BoLocaleContext)];

/** DE / EN toggle that keeps the visitor on the same page (site or team area). */
export function BoLanguageSwitch({ className }: { className?: string }) {
  const bo = useBo();
  const pathname = usePathname();
  const onAdmin = pathname.replace(/\/$/, "").endsWith("/admin");

  return (
    <nav aria-label={bo.language} className={cn("flex items-center gap-1 text-xs tracking-[0.12em]", className)}>
      {boLocales.map((target, i) => (
        <span key={target} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden className="opacity-30">
              /
            </span>
          )}
          <Link
            href={onAdmin ? boAdmin(target) : boHome(target)}
            hrefLang={target}
            lang={target}
            aria-current={target === bo.locale ? "true" : undefined}
            className={cn("px-1 py-2 uppercase transition-opacity hover:opacity-100", target === bo.locale ? "opacity-100" : "opacity-50")}
          >
            {target}
          </Link>
        </span>
      ))}
    </nav>
  );
}
