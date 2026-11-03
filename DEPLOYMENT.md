# Deployment

Recommended host: **Vercel**. It supports everything this site uses (proxy-based locale redirects, Server Actions, Cache Components, generated share images) without extra configuration.

## 1. Push the code to GitHub

1. Create a **private** repository on GitHub, e.g. `aven-studio`.
2. Connect and push the existing local repository:

   ```bash
   git remote add origin https://github.com/<your-account>/aven-studio.git
   git push -u origin main
   ```

The CI workflow in `.github/workflows/ci.yml` runs lint, type checking and a production build on every push and pull request.

## 2. Create the Vercel project

1. Sign in at vercel.com with your GitHub account.
2. **Add New → Project**, import the repository. Vercel detects Next.js automatically — keep the default build settings.
3. Before the first deploy, add the environment variables below (**Settings → Environment Variables**).

| Variable | Value | Environments |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://avenstudio.se` (your final domain, no trailing slash) | Production |
| `RESEND_API_KEY` | From Resend → API Keys | Production, Preview |
| `CONTACT_TO_EMAIL` | `aavenstudio@gmail.com` | Production, Preview |
| `CONTACT_FROM_EMAIL` | See step 4 | Production, Preview |

`NEXT_PUBLIC_SITE_URL` is read at build time — redeploy after changing it.

## 3. Connect the domain

1. Vercel → Project → **Settings → Domains** → add `avenstudio.se` and `www.avenstudio.se`.
2. Choose the bare domain as primary and let `www` redirect to it (or the reverse — just match `NEXT_PUBLIC_SITE_URL`).
3. Add the DNS records Vercel shows at your domain registrar. HTTPS is issued automatically once DNS resolves.

## 4. Set up email (Resend)

1. Sign up at resend.com with `aavenstudio@gmail.com`.
2. **Testing only:** set `CONTACT_FROM_EMAIL=Aven Studio <onboarding@resend.dev>`. Resend only delivers this sender to the account's own address, which is fine because enquiries go to that inbox.
3. **For launch:** Resend → **Domains** → add `avenstudio.se`, add the DNS records it lists (SPF/DKIM), wait for "Verified", then set e.g. `CONTACT_FROM_EMAIL=Aven Studio <forfragan@avenstudio.se>` and redeploy.

## 5. Check after deploying

- [ ] `/` redirects to `/sv` (or `/en` for an English browser)
- [ ] All pages load in both languages: `/sv`, `/sv/services`, `/sv/work`, `/sv/pricing`, `/sv/about`, `/sv/contact` and the `/en` equivalents
- [ ] Language switcher keeps you on the same page
- [ ] Contact form: submit a real test enquiry and confirm it arrives in the inbox, and that replying goes to the sender
- [ ] `https://<domain>/robots.txt` allows crawling and points to the sitemap (preview deployments should show `Disallow: /`)
- [ ] `https://<domain>/sitemap.xml` lists URLs on the real domain
- [ ] Share preview looks right, e.g. paste a link into a messaging app or use the LinkedIn Post Inspector
- [ ] Run Lighthouse (Chrome DevTools) on `/sv` and `/sv/contact` on mobile

## 6. After launch

- Add the site to **Google Search Console** and submit `https://<domain>/sitemap.xml`.
- Create a **Google Business Profile** if you want local visibility.
- Publish a **privacy policy** that mentions Resend as the processor of contact-form data (the consent text refers to storing enquiry details).

## Self-hosting instead

Any Node.js 20.9+ host works:

```bash
npm ci
npm run build
npm run start   # serves on port 3000; set PORT to change
```

Set the same environment variables on the host. The `robots.txt` preview guard relies on Vercel's `VERCEL_ENV`; elsewhere the site is always indexable.
