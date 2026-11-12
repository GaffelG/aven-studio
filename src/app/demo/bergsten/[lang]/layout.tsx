import type { Metadata, Viewport } from "next";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { DemoLocaleProvider } from "@/components/demos/DemoLocale";
import { BergstenFooter } from "@/components/demos/bergsten/BergstenFooter";
import { BergstenHeader } from "@/components/demos/bergsten/BergstenHeader";
import { archivo } from "@/demos/bergsten/fonts";
import { getBergsten } from "@/demos/bergsten/server";
import { demoStaticParams } from "@/demos/shared/locale";
import { inter } from "@/lib/fonts";
import "../../../globals.css";

export const generateStaticParams = demoStaticParams;

export const viewport: Viewport = {
  themeColor: "#ebe6dc", // --color-bergsten-sand
};

export async function generateMetadata(): Promise<Metadata> {
  const bergsten = await getBergsten();

  return {
    title: { default: `${bergsten.name} — ${bergsten.meta.title}`, template: `%s — ${bergsten.name} (demo)` },
    description: bergsten.meta.description,
    // Demo sites are fictional and must not appear in search results.
    robots: { index: false, follow: false },
  };
}

/** Separate root layout: the demo shares nothing visual with the Aven site except the demo banner. */
export default async function BergstenLayout({ children }: LayoutProps<"/demo/bergsten/[lang]">) {
  const bergsten = await getBergsten();

  return (
    <html lang={bergsten.locale} className={`${archivo.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-bergsten-sand text-bergsten-ink selection:bg-bergsten-green selection:text-bergsten-paper [&_:focus-visible]:outline-bergsten-green">
        <DemoLocaleProvider locale={bergsten.locale}>
          <DemoBanner {...bergsten.demo} />
          <BergstenHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <BergstenFooter />
        </DemoLocaleProvider>
      </body>
    </html>
  );
}
