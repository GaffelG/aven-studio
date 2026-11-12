import type { Locale } from "@/i18n/config";

/*
 * URL scheme for the bilingual concept demos.
 *   Swedish (default): /demo/<demo>/<swedish-slug>       e.g. /demo/ferrum/tjanster
 *   English:           /demo/<demo>/en/<english-slug>    e.g. /demo/ferrum/en/services
 * Pages live in app/demo/<demo>/[lang]/<swedish-slug>; the proxy rewrites public URLs onto that tree.
 * Kept free of server-only imports so both the proxy and client components can use it.
 */

export const demoIds = ["ferrum", "bergsten", "sora"] as const;
export type DemoId = (typeof demoIds)[number];

/** Page key → slug per locale. The Swedish slug is also the folder name. */
export const demoPages = {
  ferrum: {
    services: { sv: "tjanster", en: "services" },
    prices: { sv: "priser", en: "prices" },
    about: { sv: "om-oss", en: "about" },
    contact: { sv: "kontakt", en: "contact" },
    booking: { sv: "boka", en: "book" },
  },
  bergsten: {
    projects: { sv: "projekt", en: "projects" },
    services: { sv: "tjanster", en: "services" },
    about: { sv: "om-oss", en: "about" },
    quote: { sv: "offert", en: "quote" },
  },
  sora: {
    treatments: { sv: "behandlingar", en: "treatments" },
    salon: { sv: "salongen", en: "salon" },
    inspiration: { sv: "inspiration", en: "inspiration" },
    booking: { sv: "boka", en: "book" },
  },
} as const satisfies Record<DemoId, Record<string, Record<Locale, string>>>;

export const isDemoId = (value: string): value is DemoId => (demoIds as readonly string[]).includes(value);

/** Public base URL of a demo in a locale. */
export const demoBase = (demo: DemoId, locale: Locale) => (locale === "sv" ? `/demo/${demo}` : `/demo/${demo}/${locale}`);

/** Builds the public path map for one demo, e.g. paths.services → "/demo/ferrum/en/services". */
export function demoPaths<D extends DemoId>(demo: D, locale: Locale) {
  const base = demoBase(demo, locale);
  const pages = demoPages[demo] as Record<string, Record<Locale, string>>;
  const out: Record<string, string> = { home: base };
  for (const [key, slugs] of Object.entries(pages)) out[key] = `${base}/${slugs[locale]}`;
  return out as Record<keyof (typeof demoPages)[D] | "home", string>;
}

/** Converts a page slug between locales; unknown slugs (e.g. project ids) pass through unchanged. */
function translateSlug(demo: DemoId, slug: string, to: Locale): string {
  for (const slugs of Object.values(demoPages[demo]) as Record<Locale, string>[]) {
    if (slugs.sv === slug || slugs.en === slug) return slugs[to];
  }
  return slug;
}

/** Parses a public demo URL into its demo, locale and Swedish (folder) segments. */
export function parseDemoPath(pathname: string): { demo: DemoId; locale: Locale; segments: string[] } | null {
  const [, root, demo, ...rest] = pathname.split("/");
  if (root !== "demo" || !demo || !isDemoId(demo)) return null;
  const segments = rest.filter(Boolean);
  const locale: Locale = segments[0] === "en" ? "en" : "sv";
  const page = segments[0] === "en" || segments[0] === "sv" ? segments.slice(1) : segments;
  return { demo, locale, segments: page.map((seg, i) => (i === 0 ? translateSlug(demo, seg, "sv") : seg)) };
}

/** The same page in another locale, for the demo language switcher. */
export function switchDemoLocale(pathname: string, to: Locale): string {
  const parsed = parseDemoPath(pathname);
  if (!parsed) return pathname;
  const [first, ...rest] = parsed.segments;
  const page = first ? [translateSlug(parsed.demo, first, to), ...rest] : [];
  return [demoBase(parsed.demo, to), ...page].join("/");
}

/** Where the demo banner's "back" link points on the Aven site. */
export const workAnchor: Record<DemoId, string> = { ferrum: "automotive", bergsten: "construction", sora: "salon" };
export const backToWork = (demo: DemoId, locale: Locale) => `/${locale}/work#${workAnchor[demo]}`;

/** True when `pathname` is inside the section `href` points to (works for public and internal /[lang] paths). */
export function isDemoSection(pathname: string, href: string): boolean {
  const current = parseDemoPath(pathname)?.segments[0];
  const target = parseDemoPath(href)?.segments[0];
  return !!current && current === target;
}
