# Aven Studio

Website for Aven Studio — premium web design and digital solutions for small and medium-sized businesses.

Next.js (App Router) · TypeScript · Tailwind CSS v4

## Development

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /sv or /en
npm run check    # lint + typecheck + production build
```

Requires Node.js 20.9 or later. See [DEPLOYMENT.md](DEPLOYMENT.md) for hosting, domain and email setup.

## Configuration

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin for canonical URLs, sitemap and share images | Vercel production domain, else `https://avenstudio.se` |
| `RESEND_API_KEY` | Resend API key for contact form delivery | – |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries (comma-separated for several) | – |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend | – |

Copy `.env.example` to `.env.local` to configure locally. Without the email variables, enquiries are logged to the terminal in development, and the form shows a "could not send" message with the fallback address in production.

## Structure

- `src/app/[lang]/` — all routes, nested under the locale segment (`/sv`, `/en`)
- `src/app/globals.css` — brand tokens (`@theme`): colors, fonts, display sizes
- `src/i18n/dictionaries/{sv,en}/` — copy, one file per page (Swedish is the source of truth; English must match its shape)
- `src/content/` — prices (`pricing.ts`) and concept projects (`projects.ts`)
- `src/proxy.ts` — redirects locale-less URLs using the `NEXT_LOCALE` cookie, then `Accept-Language`, defaulting to Swedish
- `src/lib/page-metadata.ts` — canonical, hreflang, Open Graph and Twitter metadata
- `src/app/[lang]/contact/actions.ts` — contact form validation and spam guard
- `src/lib/email/send-enquiry.ts` — enquiry delivery via the Resend HTTP API (swap provider here)
- `src/lib/fonts.ts` — Manrope (headings) and Inter (body) via `next/font`
