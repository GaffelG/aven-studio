import { Reveal } from "@/components/ui/Reveal";
import { getFerrum } from "@/demos/ferrum/server";
import { FerrumHeading } from "../FerrumHeading";

export async function FerrumReviews() {
  const ferrum = await getFerrum();
  const t = ferrum.reviews;

  return (
    <section aria-labelledby="omdomen-title" className="border-t border-ferrum-line bg-ferrum-surface">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <FerrumHeading eyebrow={t.eyebrow} title={t.title} id="omdomen-title" />
        <ul className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {t.items.map((review, i) => (
            <li key={review.name}>
              <Reveal delay={i * 100} className="flex h-full flex-col border border-ferrum-line bg-ferrum-ink p-7 sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <p aria-label={ferrum.ui.stars} className="tracking-[0.2em] text-ferrum-accent">
                    ★★★★★
                  </p>
                  <span className="border border-ferrum-line px-2 py-0.5 text-[0.6875rem] text-ferrum-muted">{t.badge}</span>
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed">“{review.quote}”</blockquote>
                <p className="mt-8 text-sm">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-ferrum-muted"> · {review.car}</span>
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ferrum-muted">{t.note}</p>
      </div>
    </section>
  );
}
