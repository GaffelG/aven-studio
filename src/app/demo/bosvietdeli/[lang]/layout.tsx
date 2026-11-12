import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { BoLocaleProvider } from "@/components/demos/bosvietdeli/BoLocale";
import { fraunces, outfit } from "@/demos/bosvietdeli/fonts";
import { boStaticParams, getBo } from "@/demos/bosvietdeli/server";
import "../../../globals.css";

export const generateStaticParams = boStaticParams;

export const viewport: Viewport = { themeColor: "#2a1038" };

export async function generateMetadata(): Promise<Metadata> {
  const bo = await getBo();
  return {
    title: { default: bo.meta.title, template: `%s — ${bo.name}` },
    description: bo.meta.description,
    // Pitch mock-up for a real business: never indexed, never linked from the Aven site.
    robots: { index: false, follow: false },
  };
}

/**
 * Their own brand colours (from bosvietdeli.de): light lime green tiles and deep purple with a neon-violet
 * accent like the "deli" sign. Token names are kept from the first draft; values are what matter.
 */
const palette = {
  "--bo-cream": "#eef9e6",
  "--bo-paper": "#f8fdf4",
  "--bo-ink": "#2a1038",
  "--bo-muted": "#5f5168",
  "--bo-line": "#cfe8bf",
  "--bo-matcha": "#7a2db0",
  "--bo-accent": "#6d22a8",
  "--bo-sprout": "#bff5a8",
  "--bo-beet": "#8f2bd6",
} as CSSProperties;

export default async function BoLayout({ children }: LayoutProps<"/demo/bosvietdeli/[lang]">) {
  const bo = await getBo();

  return (
    <html lang={bo.locale} className={`${fraunces.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body
        style={{ ...palette, fontFamily: "var(--font-outfit), sans-serif" }}
        className="min-h-dvh bg-[var(--bo-cream)] text-[var(--bo-ink)] selection:bg-[var(--bo-accent)] selection:text-white"
      >
        <BoLocaleProvider locale={bo.locale}>
          <DemoBanner {...bo.banner} />
          {children}
        </BoLocaleProvider>
      </body>
    </html>
  );
}
