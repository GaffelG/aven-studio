import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { BergstenFooter } from "@/components/demos/bergsten/BergstenFooter";
import { BergstenHeader } from "@/components/demos/bergsten/BergstenHeader";
import { bergsten } from "@/demos/bergsten/content";
import { archivo } from "@/demos/bergsten/fonts";
import { inter } from "@/lib/fonts";
import "../../globals.css";

export const viewport: Viewport = {
  themeColor: "#ebe6dc", // --color-bergsten-sand
};

export const metadata: Metadata = {
  title: { default: `${bergsten.name} — Konceptdemo av Aven Studio`, template: `%s — ${bergsten.name} (demo)` },
  description: "Konceptdemo av en webbplats för ett byggföretag, skapad av Aven Studio. Företaget är fiktivt.",
  // Demo sites are fictional and must not appear in search results.
  robots: { index: false, follow: false },
};

/** Separate root layout: the demo shares nothing visual with the Aven site except the demo banner. */
export default function BergstenLayout({ children }: LayoutProps<"/demo/bergsten">) {
  return (
    <html lang="sv" className={`${archivo.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-bergsten-sand text-bergsten-ink selection:bg-bergsten-green selection:text-bergsten-paper [&_:focus-visible]:outline-bergsten-green">
        <DemoBanner {...bergsten.demo} />
        <BergstenHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <BergstenFooter />
      </body>
    </html>
  );
}
