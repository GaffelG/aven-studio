import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pagePaths } from "@/lib/routes";

// Temporary placeholder until the homepage is designed in Stage 3.
export default async function Home() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <Container className="flex flex-1 flex-col justify-center py-24 sm:py-32">
      <Eyebrow>{dict.placeholder.eyebrow}</Eyebrow>
      <h1 className="mt-6 max-w-4xl text-display-xl">{dict.placeholder.heading}</h1>
      <p className="mt-6 max-w-xl text-lg text-silver-deep">{dict.placeholder.body}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href={localizedHref(locale, pagePaths.contact)} arrow>
          {dict.header.cta}
        </Button>
        <Button href={localizedHref(locale, pagePaths.services)} variant="secondary">
          {dict.nav.services}
        </Button>
      </div>
    </Container>
  );
}
