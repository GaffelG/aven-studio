import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { DemoLocaleProvider } from "@/components/demos/DemoLocale";
import { SoraFooter } from "@/components/demos/sora/SoraFooter";
import { SoraHeader } from "@/components/demos/sora/SoraHeader";
import { demoStaticParams } from "@/demos/shared/locale";
import { cormorant, jost } from "@/demos/sora/fonts";
import { getSora } from "@/demos/sora/server";
import "../../../globals.css";

export const generateStaticParams = demoStaticParams;

export const viewport: Viewport = {
  themeColor: "#f4ece5", // --color-sora-cream
};

export async function generateMetadata(): Promise<Metadata> {
  const sora = await getSora();

  return {
    title: { default: `${sora.name} — ${sora.meta.title}`, template: `%s — ${sora.name} (demo)` },
    description: sora.meta.description,
    // Demo sites are fictional and must not appear in search results.
    robots: { index: false, follow: false },
  };
}

/** Separate root layout: the demo shares nothing visual with the Aven site except the demo banner. */
export default async function SoraLayout({ children }: LayoutProps<"/demo/sora/[lang]">) {
  const sora = await getSora();

  return (
    <html lang={sora.locale} className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-sora-cream font-sora text-sora-espresso selection:bg-sora-clay selection:text-sora-shell [&_:focus-visible]:outline-sora-clay-deep">
        <DemoLocaleProvider locale={sora.locale}>
          <DemoBanner {...sora.demo} />
          <SoraHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SoraFooter />
        </DemoLocaleProvider>
      </body>
    </html>
  );
}
