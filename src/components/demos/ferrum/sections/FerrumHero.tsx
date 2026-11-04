import { ferrum } from "@/demos/ferrum/content";

const t = ferrum.hero;

export function FerrumHero() {
  return (
    <section aria-labelledby="ferrum-hero" className="relative overflow-hidden">
      {/* Oversized outline lettering as texture behind the content. */}
      <p
        aria-hidden
        className="pointer-events-none absolute -right-8 bottom-6 font-ferrum text-[28vw] leading-none font-bold text-transparent uppercase select-none [-webkit-text-stroke:1px_var(--color-ferrum-line)] lg:text-[22vw]"
      >
        Ferrum
      </p>

      <div className="relative mx-auto grid max-w-site gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase">{t.eyebrow}</p>
          <h1
            id="ferrum-hero"
            className="mt-6 font-ferrum text-[clamp(3.75rem,11vw,9.5rem)] leading-[0.85] font-bold tracking-[-0.01em] uppercase"
          >
            {t.headline}
            <span className="text-ferrum-accent">.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ferrum-text/75">{t.lead}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#boka"
              className="group inline-flex items-center gap-3 bg-ferrum-accent px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
            >
              {t.primaryCta}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#priser"
              className="inline-flex items-center border border-ferrum-text/25 px-7 py-4 font-ferrum text-xl font-bold tracking-wide uppercase transition-colors hover:border-ferrum-text"
            >
              {t.secondaryCta}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ferrum-text/80">
            {t.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden className="grid size-5 place-items-center bg-ferrum-raised text-[0.7rem] text-ferrum-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside aria-label={t.nextSlot.label} className="lg:col-span-4">
          <div className="border border-ferrum-line bg-ferrum-surface p-6 sm:p-8">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase">
              <span aria-hidden className="size-2 rounded-full bg-ferrum-accent motion-safe:animate-pulse" />
              {t.nextSlot.label}
            </p>
            <p className="mt-4 font-ferrum text-4xl font-bold uppercase">{t.nextSlot.value}</p>
            <ul className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
              {t.quick.map((item) => (
                <li key={item}>
                  <a
                    href="#boka"
                    className="block border border-ferrum-line px-2 py-3 transition-colors hover:border-ferrum-accent hover:text-ferrum-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Hazard stripe */}
      <div
        aria-hidden
        className="h-2 bg-[repeating-linear-gradient(-45deg,var(--color-ferrum-accent)_0_14px,var(--color-ferrum-ink)_14px_28px)]"
      />
    </section>
  );
}
