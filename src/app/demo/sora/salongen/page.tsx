import type { Metadata } from "next";
import Image from "next/image";
import { SoraBookBand, SoraHeading, SoraPageHero, soraContainer } from "@/components/demos/sora/SoraUi";
import { Reveal } from "@/components/ui/Reveal";
import { sora } from "@/demos/sora/content";
import { soraImages } from "@/demos/sora/images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Salongen" };

const t = sora.salon;

export default function SoraSalonPage() {
  return (
    <>
      <SoraPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <div className="relative mx-auto aspect-[16/9] max-h-[75vh] w-full max-w-[1600px] overflow-hidden lg:aspect-[21/9]">
        <Image src={soraImages.interior.src} alt={soraImages.interior.alt} placeholder="blur" priority fill sizes="100vw" className="object-cover" />
      </div>

      <section aria-label={t.eyebrow}>
        <div className={cn(soraContainer, "grid gap-10 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32")}>
          <p className="font-sora-serif text-4xl leading-[1.2] italic lg:col-span-5">
            “Vi bokar generöst med tid, så att ingen behöver stressa – varken du eller vi.”
          </p>
          <Reveal className="space-y-6 text-lg leading-relaxed text-sora-muted lg:col-span-6 lg:col-start-7">
            {t.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="team-title" className="bg-sora-shell">
        <div className={cn(soraContainer, "grid gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32")}>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image src={soraImages.stylists.src} alt={soraImages.stylists.alt} placeholder="blur" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <SoraHeading eyebrow={sora.stylists.eyebrow} title={sora.stylists.title} id="team-title" />
            <ul className="mt-12 divide-y divide-sora-line border-y border-sora-line">
              {sora.stylists.items.map((person) => (
                <li key={person.id} className="flex items-center gap-5 py-6">
                  <span aria-hidden className="grid size-14 shrink-0 place-items-center rounded-full bg-sora-blush font-sora-serif text-2xl italic">
                    {person.name[0]}
                  </span>
                  <div>
                    <h3 className="font-sora-serif text-3xl">{person.name}</h3>
                    <p className="text-sm text-sora-muted">
                      {person.role} · {person.focus}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title">
        <div className={cn(soraContainer, "py-24 lg:py-32")}>
          <SoraHeading eyebrow="Så arbetar vi" title="Små detaljer, stor skillnad" id="values-title" center />
          <ul className="mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-3">
            {sora.highlights.map((item, i) => (
              <li key={item.title} className="text-center">
                <Reveal delay={i * 100}>
                  <span className="font-sora-serif text-5xl text-sora-clay italic">{i + 1}</span>
                  <h3 className="mt-4 font-sora-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-sora-muted">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SoraBookBand />
    </>
  );
}
