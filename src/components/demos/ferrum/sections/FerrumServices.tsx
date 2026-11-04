import { Reveal } from "@/components/ui/Reveal";
import { formatPrice } from "@/content/pricing";
import { ferrum } from "@/demos/ferrum/content";
import { FerrumHeading } from "../FerrumHeading";

const t = ferrum.services;

export function FerrumServices() {
  return (
    <section id="tjanster" aria-labelledby="tjanster-title" className="scroll-mt-20">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <FerrumHeading eyebrow={t.eyebrow} title={t.title} id="tjanster-title" />

        <ul className="mt-14 grid gap-px border border-ferrum-line bg-ferrum-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <li key={item.title} className="bg-ferrum-ink">
              <Reveal delay={(i % 3) * 80} className="h-full">
                <a
                  href="#boka"
                  className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-ferrum-surface sm:p-9"
                >
                  <span className="font-ferrum text-lg font-semibold text-ferrum-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 font-ferrum text-4xl font-bold uppercase">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ferrum-muted">{item.description}</p>
                  <p className="mt-8 flex items-center justify-between border-t border-ferrum-line pt-5 text-sm">
                    <span>
                      <span className="text-ferrum-muted">från </span>
                      <span className="font-ferrum text-xl font-bold">{formatPrice(item.from, "sv")}</span>
                      <span className="text-ferrum-muted"> · {item.duration}</span>
                    </span>
                    <span
                      aria-hidden
                      className="text-ferrum-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-ferrum-accent"
                    >
                      →
                    </span>
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
