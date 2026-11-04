import { Reveal } from "@/components/ui/Reveal";
import { ferrum } from "@/demos/ferrum/content";
import { FerrumHeading } from "../FerrumHeading";

const t = ferrum.reasons;

export function FerrumReasons() {
  return (
    <section id="varfor" aria-labelledby="varfor-title" className="scroll-mt-20">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <FerrumHeading eyebrow={t.eyebrow} title={t.title} id="varfor-title" />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {t.items.map((item, i) => (
            <li key={item.value}>
              <Reveal delay={i * 80} className="border-t-2 border-ferrum-accent pt-6">
                <p className="font-ferrum text-5xl font-bold uppercase">{item.value}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ferrum-muted">{item.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
