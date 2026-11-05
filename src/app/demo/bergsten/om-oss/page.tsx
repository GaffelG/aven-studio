import type { Metadata } from "next";
import Image from "next/image";
import { BergstenCtaBand, BergstenHeading, BergstenPageHero, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { Reveal } from "@/components/ui/Reveal";
import { bergsten } from "@/demos/bergsten/content";
import { bergstenImages } from "@/demos/bergsten/images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Om oss" };

const t = bergsten.about;

export default function BergstenAboutPage() {
  return (
    <>
      <BergstenPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <section aria-label="Bergsten Bygg">
        <div className={cn(bergstenContainer, "grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28")}>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image src={bergstenImages.saw.src} alt={bergstenImages.saw.alt} placeholder="blur" priority fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <Reveal className="space-y-6 text-lg leading-relaxed lg:col-span-6 lg:col-start-7 lg:self-center">
            {t.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <dl className="grid grid-cols-2 gap-6 border-t border-bergsten-line pt-8">
              {bergsten.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-bergsten text-4xl font-semibold tabular-nums">{stat.value}</span>
                    <span className="ml-1 font-bergsten text-lg text-bergsten-green">{stat.unit}</span>
                    <span className="block text-sm text-bergsten-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="border-t border-bergsten-line bg-bergsten-paper">
        <div className={cn(bergstenContainer, "py-20 lg:py-28")}>
          <BergstenHeading eyebrow="Värderingar" title="Det här kan du räkna med" id="values-title" />
          <ul className="mt-14 grid gap-px bg-bergsten-line md:grid-cols-3">
            {t.values.map((value, i) => (
              <li key={value.title} className="bg-bergsten-paper p-8 lg:p-10">
                <Reveal delay={i * 100}>
                  <span className="font-bergsten text-5xl font-semibold text-bergsten-green tabular-nums">0{i + 1}</span>
                  <h3 className="mt-10 font-bergsten text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-bergsten-muted">{value.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="trust-title">
        <div className={cn(bergstenContainer, "py-20 lg:py-28")}>
          <BergstenHeading eyebrow={bergsten.trust.eyebrow} title={bergsten.trust.title} id="trust-title" />
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bergsten.trust.items.map((item) => (
              <li key={item.title} className="border-t-2 border-bergsten-green pt-5">
                <h3 className="font-bergsten text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-bergsten-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BergstenCtaBand />
    </>
  );
}
