import { NextResponse, type NextRequest } from "next/server";
import { bergsten } from "@/demos/bergsten/content";
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

const projectPath = /^\/demo\/bergsten\/projekt\/([^/]+)\/?$/;
const projectSlugs = new Set(bergsten.projects.map((p) => p.slug));

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Unknown project slugs: with Cache Components the page streams, so it can't set a 404 itself.
  const project = pathname.match(projectPath);
  if (project) {
    if (projectSlugs.has(decodeURIComponent(project[1]))) return;
    return NextResponse.rewrite(new URL("/demo/bergsten/finns-inte", request.url));
  }

  if (hasLocale(pathname.split("/")[1])) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes, demo sites, extensionless metadata routes and anything that looks like a file.
  // Bergsten project pages are matched separately so unknown slugs can return a real 404.
  matcher: ["/((?!_next|api|demo|apple-icon|.*\\..*).*)", "/demo/bergsten/projekt/:slug"],
};
