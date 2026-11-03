import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getDictionary } from "@/i18n/get-dictionary";

// Temporary: stands in for pages whose content arrives in later stages.
export async function PagePlaceholder({ title }: { title: string }) {
  const dict = await getDictionary();

  return (
    <Container className="flex flex-1 flex-col justify-center py-24 sm:py-32">
      <Eyebrow>{dict.placeholder.eyebrow}</Eyebrow>
      <h1 className="mt-6 max-w-4xl text-display-xl">{title}</h1>
      <p className="mt-6 max-w-xl text-lg text-silver-deep">{dict.placeholder.body}</p>
    </Container>
  );
}
