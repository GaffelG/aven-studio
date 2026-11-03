import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Process() {
  const t = (await getDictionary()).home.process;

  return (
    <section className="bg-paper-dim">
      <Container className="py-24 sm:py-32 lg:py-40">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 100} className="border-t border-ink/20 pt-6">
                <span className="font-display text-sm text-sage-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-xl lg:mt-12">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
