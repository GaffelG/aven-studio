import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { FerrumFooter } from "@/components/demos/ferrum/FerrumFooter";
import { FerrumHeader } from "@/components/demos/ferrum/FerrumHeader";
import { ferrum } from "@/demos/ferrum/content";
import { barlowCondensed } from "@/demos/ferrum/fonts";
import { inter } from "@/lib/fonts";
import "../../globals.css";

export const viewport: Viewport = {
  themeColor: "#15171a", // --color-ferrum-ink
};

export const metadata: Metadata = {
  title: { default: `${ferrum.name} — Konceptdemo av Aven Studio`, template: `%s — ${ferrum.name} (demo)` },
  description: "Konceptdemo av en webbplats för en bilverkstad, skapad av Aven Studio. Företaget är fiktivt.",
  // Demo sites are fictional and must not appear in search results.
  robots: { index: false, follow: false },
};

/** Separate root layout: the demo shares nothing visual with the Aven site except the demo banner. */
export default function FerrumLayout({ children }: LayoutProps<"/demo/ferrum">) {
  return (
    <html lang="sv" className={`${barlowCondensed.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-ferrum-ink text-ferrum-text selection:bg-ferrum-accent selection:text-ferrum-ink [&_:focus-visible]:outline-ferrum-accent">
        <DemoBanner {...ferrum.demo} />
        <FerrumHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <FerrumFooter />
      </body>
    </html>
  );
}
