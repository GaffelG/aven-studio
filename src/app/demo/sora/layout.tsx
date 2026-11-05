import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { SoraFooter } from "@/components/demos/sora/SoraFooter";
import { SoraHeader } from "@/components/demos/sora/SoraHeader";
import { sora } from "@/demos/sora/content";
import { cormorant, jost } from "@/demos/sora/fonts";
import "../../globals.css";

export const viewport: Viewport = {
  themeColor: "#f4ece5", // --color-sora-cream
};

export const metadata: Metadata = {
  title: { default: `${sora.name} — Konceptdemo av Aven Studio`, template: `%s — ${sora.name} (demo)` },
  description: "Konceptdemo av en webbplats för en frisörsalong, skapad av Aven Studio. Företaget är fiktivt.",
  // Demo sites are fictional and must not appear in search results.
  robots: { index: false, follow: false },
};

/** Separate root layout: the demo shares nothing visual with the Aven site except the demo banner. */
export default function SoraLayout({ children }: LayoutProps<"/demo/sora">) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-sora-cream font-sora text-sora-espresso selection:bg-sora-clay selection:text-sora-shell [&_:focus-visible]:outline-sora-clay-deep">
        <DemoBanner {...sora.demo} />
        <SoraHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SoraFooter />
      </body>
    </html>
  );
}
