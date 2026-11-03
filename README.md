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

## Structure

- `src/app/[lang]/` — all routes, nested under the locale segment (`/sv`, `/en`)
- `src/app/globals.css` — brand tokens (`@theme`): colors, fonts, display sizes
- `src/i18n/` — locale config and typed dictionaries (Swedish is the source of truth)
- `src/proxy.ts` — redirects locale-less URLs using the `NEXT_LOCALE` cookie, then `Accept-Language`, defaulting to Swedish
- `src/lib/fonts.ts` — Manrope (headings) and Inter (body) via `next/font`
