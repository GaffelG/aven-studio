import type { Metadata, Viewport } from "next";
import { lang } from "next/root-params";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { inter, manrope } from "@/lib/fonts";
import { buildMetadata } from "@/lib/page-metadata";
import { siteName, siteUrl } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const viewport: Viewport = {
  themeColor: "#f5f5f2", // --color-paper
};

/** Site-wide defaults; also the home page's metadata. Inner pages override via pageMetadata(). */
export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s — ${siteName}` },
    applicationName: siteName,
    ...buildMetadata({ locale, title: dict.meta.title, description: dict.meta.description }),
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const dict = await getDictionary();

  return (
    <html lang={await lang()} className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Flags JS support before paint so reveal animations never hide content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          {dict.header.skipToContent}
        </a>
        <Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
