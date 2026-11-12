import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { BoLocaleProvider } from "@/components/demos/bosvietdeli/BoLocale";
import { fraunces, outfit } from "@/demos/bosvietdeli/fonts";
import { boStaticParams, getBo } from "@/demos/bosvietdeli/server";
import "../../../globals.css";

export const generateStaticParams = boStaticParams;

export const viewport: Viewport = { themeColor: "#1c3324" };

export async function generateMetadata(): Promise<Metadata> {
  const bo = await getBo();
  return {
    title: { default: bo.meta.title, template: `%s — ${bo.name}` },
    description: bo.meta.description,
    // Pitch mock-up for a real business: never indexed, never linked from the Aven site.
    robots: { index: false, follow: false },
  };
}

/** Plant-based palette: oat, forest, leaf and sprout greens, with beetroot for vouchers. */
const palette = {
  "--bo-cream": "#f4f2e4",
  "--bo-paper": "#fbfaf1",
  "--bo-ink": "#1c3324",
  "--bo-muted": "#5a6a56",
  "--bo-line": "#d8dbc1",
  "--bo-matcha": "#4f7d2f",
  "--bo-accent": "#3d7a2a",
  "--bo-sprout": "#b9de87",
  "--bo-beet": "#8e2f55",
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
