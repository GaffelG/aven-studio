import { getFerrum } from "@/demos/ferrum/server";
import { FerrumHeading } from "../FerrumHeading";

const label = "text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase";

export async function FerrumContact() {

  const ferrum = await getFerrum();
  const t = ferrum.contact;
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="scroll-mt-20">
      <div className="mx-auto grid max-w-site gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <FerrumHeading eyebrow={t.eyebrow} title={t.title} id="kontakt-title" />

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className={label}>{t.hoursLabel}</h3>
              <dl className="mt-4 divide-y divide-ferrum-line border-y border-ferrum-line">
                {t.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-6 py-3 text-[0.9375rem]">
                    <dt className="text-ferrum-text/80">{row.days}</dt>
                    <dd className="font-ferrum text-xl font-semibold tabular-nums">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid gap-8">
              <div>
                <h3 className={label}>{t.addressLabel}</h3>
                <address className="mt-4 text-[0.9375rem] leading-relaxed not-italic">
                  {ferrum.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <div>
                <h3 className={label}>{t.reachLabel}</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed">
                  <a href={ferrum.phone.href} className="block hover:text-ferrum-accent">
                    {ferrum.phone.label}
                  </a>
                  <a href={`mailto:${ferrum.email}`} className="block hover:text-ferrum-accent">
                    {ferrum.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stylised map placeholder – a real map embed would go here for an actual client. */}
        <figure
          aria-label={t.mapLabel}
          className="relative min-h-80 overflow-hidden border border-ferrum-line bg-ferrum-surface lg:col-span-6 lg:col-start-7"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-ferrum-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-ferrum-line)_1px,transparent_1px)] bg-size-[48px_48px]"
          />
          <div aria-hidden className="absolute top-[58%] -right-10 -left-10 h-6 -rotate-6 bg-ferrum-raised" />
          <div aria-hidden className="absolute top-0 bottom-0 left-[38%] w-5 rotate-3 bg-ferrum-raised" />
          <div aria-hidden className="absolute top-[52%] left-[38%] -translate-x-1/2 -translate-y-full">
            <span className="block size-10 rotate-45 rounded-tl-full rounded-tr-full rounded-bl-full bg-ferrum-accent" />
          </div>
          <figcaption className="absolute bottom-0 left-0 bg-ferrum-ink px-4 py-2 text-xs text-ferrum-muted">
            {t.mapLabel}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
