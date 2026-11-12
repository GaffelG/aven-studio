import type { Metadata } from "next";
import { FerrumPageHero } from "@/components/demos/ferrum/FerrumPageHero";
import { FerrumHeading } from "@/components/demos/ferrum/FerrumHeading";
import { FerrumBooking } from "@/components/demos/ferrum/sections/FerrumBooking";
import { FerrumReasons } from "@/components/demos/ferrum/sections/FerrumReasons";
import { FerrumReviews } from "@/components/demos/ferrum/sections/FerrumReviews";
import { Reveal } from "@/components/ui/Reveal";
import { getFerrum } from "@/demos/ferrum/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getFerrum()).meta.pages.about };
}


export default async function FerrumAboutPage() {

  const ferrum = await getFerrum();
  const t = ferrum.about;
  return (
    <>
      <FerrumPageHero eyebrow={t.eyebrow} title={t.title} />

      <section>
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-28">
          <p className="font-ferrum text-3xl leading-tight font-semibold sm:text-4xl lg:col-span-6">{t.lead}</p>
          <Reveal className="space-y-6 text-lg leading-relaxed text-ferrum-text/75 lg:col-span-5 lg:col-start-8">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="besok-title" className="border-y border-ferrum-line bg-ferrum-surface">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <FerrumHeading eyebrow={t.visitEyebrow} title={t.visitTitle} id="besok-title" />
          <ol className="mt-14 grid gap-px bg-ferrum-line sm:grid-cols-2 lg:grid-cols-4">
            {t.visit.map((step, i) => (
              <li key={step.title} className="bg-ferrum-surface p-7 sm:p-8">
                <Reveal delay={i * 80}>
                  <span className="font-ferrum text-6xl leading-none font-bold text-ferrum-accent">{i + 1}</span>
                  <h3 className="mt-8 font-ferrum text-3xl font-bold uppercase">{step.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ferrum-muted">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FerrumReasons />
      <FerrumReviews />
      <FerrumBooking />
    </>
  );
}
