import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/page-metadata";

export const generateMetadata = () => pageMetadata("pricing");

export default async function Page() {
  const dict = await getDictionary();
  return <PagePlaceholder title={dict.nav.pricing} />;
}
