import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { bo } from "@/demos/bosvietdeli/content";
import { fraunces, outfit } from "@/demos/bosvietdeli/fonts";
import "../../globals.css";

export const viewport: Viewport = { themeColor: "#f6f1e7" };

export const metadata: Metadata = {
  title: `Entwurf für ${bo.name} — Aven Studio`,
  description: "Unverbindlicher Website-Entwurf von Aven Studio.",
  // Pitch mock-up for a real business: never indexed, never linked from the Aven site.
  robots: { index: false, follow: false },
};

const palette = {
  "--bo-cream": "#f6f1e7",
  "--bo-paper": "#fffaf2",
  "--bo-ink": "#1f2a22",
  "--bo-muted": "#5f6a5f",
  "--bo-line": "#ddd3c2",
  "--bo-matcha": "#4a6b3a",
  "--bo-coral": "#d9643f",
  "--bo-plum": "#6d3f6b",
} as CSSProperties;

export default function BoLayout({ children }: LayoutProps<"/demo/bosvietdeli">) {
  return (
    <html lang="de" className={`${fraunces.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body
        style={{ ...palette, fontFamily: "var(--font-outfit), sans-serif" }}
        className="min-h-dvh bg-[var(--bo-cream)] text-[var(--bo-ink)] selection:bg-[var(--bo-coral)] selection:text-white"
      >
        <DemoBanner {...bo.banner} />
        {children}
      </body>
    </html>
  );
}
