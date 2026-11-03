# Aven Studio

Website for Aven Studio — premium web design and digital solutions for small and medium-sized businesses.

Next.js (App Router) · TypeScript · Tailwind CSS v4

## Development

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /sv or /en
npm run lint
npm run build
```

## Configuration

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs, sitemap and share images | `https://avenstudio.se` |

## Structure

- `src/app/[lang]/` — all routes, nested under the locale segment (`/sv`, `/en`)
- `src/app/globals.css` — brand tokens (`@theme`): colors, fonts, display sizes
- `src/i18n/dictionaries/{sv,en}/` — copy, one file per page (Swedish is the source of truth; English must match its shape)
- `src/content/` — prices (`pricing.ts`) and concept projects (`projects.ts`)
- `src/proxy.ts` — redirects locale-less URLs using the `NEXT_LOCALE` cookie, then `Accept-Language`, defaulting to Swedish
- `src/lib/page-metadata.ts` — canonical, hreflang, Open Graph and Twitter metadata
- `src/app/[lang]/contact/actions.ts` — contact form validation; enquiry delivery is not connected yet
- `src/lib/fonts.ts` — Manrope (headings) and Inter (body) via `next/font`
