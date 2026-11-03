import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pagePaths } from "@/lib/routes";

// The headline renders without animation so it can paint immediately (it is the LCP element).
export async function Hero() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.home.hero;

  return (
    <section className="border-b border-ink/8">
      <Container className="pt-16 pb-14 sm:pt-24 lg:pt-32 lg:pb-20">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-[13ch] text-display-xl">
          {t.headline}
          <span className="text-sage">.</span>
        </h1>

        <div className="mt-12 grid gap-10 motion-safe:animate-rise lg:mt-16 lg:grid-cols-12 lg:items-end">
          <p className="max-w-md text-lg leading-relaxed text-ink/70 lg:col-span-6">{t.lead}</p>
          <div className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
            <Button href={localizedHref(locale, pagePaths.contact)} arrow>
              {t.primaryCta}
            </Button>
            <Button href={localizedHref(locale, pagePaths.services)} variant="secondary">
              {t.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>

      <Container>
        <ul className="grid border-t border-ink/8 text-sm sm:grid-cols-3">
          {t.pillars.map((pillar, i) => (
            <li
              key={pillar}
              className="flex items-baseline gap-3 border-b border-ink/8 py-5 last:border-b-0 sm:border-b-0 sm:not-first:border-l sm:not-first:pl-6"
            >
              <span className="font-display text-xs text-silver-deep tabular-nums">({String(i + 1).padStart(2, "0")})</span>
              {pillar}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
