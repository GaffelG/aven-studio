import { NextResponse, type NextRequest } from "next/server";
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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (hasLocale(pathname.split("/")[1])) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes, demo sites, extensionless metadata routes and anything that looks like a file.
  matcher: ["/((?!_next|api|demo|apple-icon|.*\\..*).*)"],
};
