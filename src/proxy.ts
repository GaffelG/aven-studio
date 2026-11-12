import { NextResponse, type NextRequest } from "next/server";
import { projectSlugs as bergstenProjectSlugs } from "@/demos/bergsten/content";
import { parseDemoPath } from "@/demos/shared/routing";
import { defaultLocale, hasLocale, localeCookie, type Locale } from "@/i18n/config";

/** Picks a locale from the saved cookie, then Accept-Language, then the default. */
function detectLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && hasLocale(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";
  const match = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find(({ lang }) => hasLocale(lang));

  return match ? (match.lang as Locale) : defaultLocale;
}

const projectSlugs = new Set(bergstenProjectSlugs);

/**
 * Bilingual demos: public URLs (Swedish slugs, or /en/ + English slugs) are rewritten onto
 * app/demo/<demo>/[lang]/<swedish-slug>. Explicit /sv/ URLs redirect to the clean Swedish URL.
 */
function routeDemo(request: NextRequest, pathname: string) {
  if (pathname.split("/").pop()?.includes(".")) return; // icons and other files inside the demo tree
  const parsed = parseDemoPath(pathname);
  if (!parsed) return;
  const { demo, locale, segments } = parsed;

  if (pathname.split("/")[3] === "sv") {
    const url = request.nextUrl.clone();
    url.pathname = ["", "demo", demo, ...segments].join("/");
    return NextResponse.redirect(url);
  }

  // Unknown project slugs: with Cache Components the page streams, so it can't set a 404 itself.
  if (demo === "bergsten" && segments[0] === "projekt" && segments[1] && !projectSlugs.has(decodeURIComponent(segments[1]))) {
    segments.splice(0, segments.length, "finns-inte");
  }

  const url = request.nextUrl.clone();
  url.pathname = ["", "demo", demo, locale, ...segments].join("/");
  return NextResponse.rewrite(url);
}

/**
 * bo´s viet deli mock-up (German / English): /demo/bosvietdeli(/admin) is German and rewritten onto /de,
 * /demo/bosvietdeli/en(/admin) is English. Explicit /de/ URLs redirect to the clean German URL.
 */
function routeBo(request: NextRequest, pathname: string) {
  if (pathname.split("/").pop()?.includes(".")) return;
  const [, , , first, ...rest] = pathname.split("/");
  const url = request.nextUrl.clone();
  if (first === "de") {
    url.pathname = ["/demo/bosvietdeli", ...rest].filter(Boolean).join("/");
    return NextResponse.redirect(url);
  }
  if (first === "en") return;
  url.pathname = ["/demo/bosvietdeli/de", first, ...rest].filter(Boolean).join("/");
  return NextResponse.rewrite(url);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/demo/bosvietdeli" || pathname.startsWith("/demo/bosvietdeli/")) return routeBo(request, pathname);
  if (pathname.startsWith("/demo/")) return routeDemo(request, pathname);

  if (hasLocale(pathname.split("/")[1])) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes, demo sites, extensionless metadata routes and anything that looks like a file.
  // The bilingual demos are matched separately and rewritten by routeDemo / routeBo.
  matcher: [
    "/((?!_next|api|demo|apple-icon|.*\\..*).*)",
    "/demo/(ferrum|bergsten|sora|bosvietdeli)",
    "/demo/(ferrum|bergsten|sora|bosvietdeli)/:path*",
  ],
};
