import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { DemoLocaleProvider } from "@/components/demos/DemoLocale";
import { FerrumFooter } from "@/components/demos/ferrum/FerrumFooter";
import { FerrumHeader } from "@/components/demos/ferrum/FerrumHeader";
import { barlowCondensed } from "@/demos/ferrum/fonts";
import { getFerrum } from "@/demos/ferrum/server";
import { demoStaticParams } from "@/demos/shared/locale";
import { inter } from "@/lib/fonts";
import "../../../globals.css";

export const generateStaticParams = demoStaticParams;

export const viewport: Viewport = {
  themeColor: "#15171a", // --color-ferrum-ink
};

export async function generateMetadata(): Promise<Metadata> {
  const ferrum = await getFerrum();
  return {
    title: { default: `${ferrum.name} — ${ferrum.meta.title}`, template: `%s — ${ferrum.name} (demo)` },
    description: ferrum.meta.description,
    // Demo sites are fictional and must not appear in search results.
    robots: { index: false, follow: false },
  };
}

/** Separate root layout: the demo shares nothing visual with the Aven site except the demo banner. */
export default async function FerrumLayout({ children }: LayoutProps<"/demo/ferrum/[lang]">) {
  const ferrum = await getFerrum();

  return (
    <html lang={ferrum.locale} className={`${barlowCondensed.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-ferrum-ink text-ferrum-text selection:bg-ferrum-accent selection:text-ferrum-ink [&_:focus-visible]:outline-ferrum-accent">
        <DemoLocaleProvider locale={ferrum.locale}>
          <DemoBanner {...ferrum.demo} />
          <FerrumHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <FerrumFooter />
        </DemoLocaleProvider>
      </body>
    </html>
  );
}
