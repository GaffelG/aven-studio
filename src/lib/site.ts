/**
 * Public site origin, used for canonical URLs, sitemap and social previews.
 * Order: explicit NEXT_PUBLIC_SITE_URL, then Vercel's production domain (follows custom domains), then the planned domain.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://avenstudio.se";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");

export const siteName = "Aven Studio";
