import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Principles() {
  const t = (await getDictionary()).home.principles;

  return (
    <section className="bg-ink text-paper">
      <Container className="grid gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8 lg:py-40">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} tone="dark" className="lg:col-span-5" />

        <ul className="lg:col-span-6 lg:col-start-7">
          {t.items.map((item, i) => (
            <li key={item.title} className="border-t border-paper/12 py-8 first:pt-8 last:pb-0 sm:py-10">
              <Reveal delay={i * 100} className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-sm text-sage tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-md text-paper/60">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
