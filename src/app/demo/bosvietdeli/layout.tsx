import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { bo } from "@/demos/bosvietdeli/content";
import { fraunces, outfit } from "@/demos/bosvietdeli/fonts";
import "../../globals.css";

export const viewport: Viewport = { themeColor: "#1c3324" };

export const metadata: Metadata = {
  title: `Entwurf für ${bo.name} — Aven Studio`,
  description: "Unverbindlicher Website-Entwurf von Aven Studio.",
  // Pitch mock-up for a real business: never indexed, never linked from the Aven site.
  robots: { index: false, follow: false },
};

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

export default function BoLayout({ children }: LayoutProps<"/demo/bosvietdeli">) {
  return (
    <html lang="de" className={`${fraunces.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body
        style={{ ...palette, fontFamily: "var(--font-outfit), sans-serif" }}
        className="min-h-dvh bg-[var(--bo-cream)] text-[var(--bo-ink)] selection:bg-[var(--bo-accent)] selection:text-white"
      >
        <DemoBanner {...bo.banner} />
        {children}
      </body>
    </html>
  );
}
