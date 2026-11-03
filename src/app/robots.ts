import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** Vercel sets VERCEL_ENV; preview and development deployments must never be indexed. */
const isIndexable = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
