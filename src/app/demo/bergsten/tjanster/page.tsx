import type { Metadata } from "next";
import Image from "next/image";
import { BergstenButton, BergstenCtaBand, BergstenPageHero, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { Reveal } from "@/components/ui/Reveal";
import { bergsten, bergstenPaths } from "@/demos/bergsten/content";
import { bergstenImages } from "@/demos/bergsten/images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Tjänster" };

const t = bergsten.services;

export default function BergstenServicesPage() {
  return (
    <>
      <BergstenPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <nav aria-label="Tjänster på sidan" className="mt-10 flex flex-wrap gap-2">
          {t.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="border border-bergsten-line px-4 py-2 text-sm transition-colors hover:border-bergsten-ink"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </BergstenPageHero>

      <div className="relative aspect-[21/9] max-h-[70vh] w-full overflow-hidden">
        <Image
          src={bergstenImages.workerFrame.src}
          alt={bergstenImages.workerFrame.alt}
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className={cn(bergstenContainer, "py-10 lg:py-16")}>
        {t.items.map((item, i) => (
          <section
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-title`}
            className="grid scroll-mt-28 gap-8 border-b border-bergsten-line py-14 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-20"
          >
            <div className="lg:col-span-5">
              <span className="font-bergsten text-sm text-bergsten-green tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h2 id={`${item.id}-title`} className="mt-4 font-bergsten text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                {item.title}
              </h2>
              <p className="mt-5 max-w-md text-lg text-bergsten-muted">{item.text}</p>
            </div>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed">{item.details}</p>
              <ul className="mt-8 grid gap-px bg-bergsten-line sm:grid-cols-2">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3 bg-bergsten-sand py-3.5 pr-4 text-[0.9375rem]">
                    <span aria-hidden className="text-bergsten-green">
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <BergstenButton href={bergstenPaths.quote} variant="outline" className="mt-8">
                {bergsten.quoteCta}
              </BergstenButton>
            </Reveal>
          </section>
        ))}
      </div>

      <BergstenCtaBand />
    </>
  );
}
