import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Statement() {
  const t = (await getDictionary()).home.statement;

  return (
    <section>
      <Container className="grid gap-8 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
        <Eyebrow className="lg:col-span-3 lg:pt-3">{t.eyebrow}</Eyebrow>
        <Reveal className="lg:col-span-9">
          <p className="font-display text-display-md font-medium text-balance">
            {t.lead} <span className="text-silver-deep">{t.body}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
