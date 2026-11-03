import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref } from "@/lib/routes";

export default async function NotFound() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <Container className="flex flex-1 flex-col justify-center py-24 sm:py-32">
      <p className="font-display text-sm text-silver-deep">404</p>
      <h1 className="mt-4 text-display-md">{dict.notFound.heading}</h1>
      <p className="mt-4 max-w-md text-silver-deep">{dict.notFound.body}</p>
      <Button href={localizedHref(locale)} variant="secondary" size="sm" className="mt-10 self-start">
        {dict.notFound.back}
      </Button>
    </Container>
  );
}
