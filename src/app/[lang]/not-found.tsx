import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export default async function NotFound() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className="mx-auto flex w-full max-w-site flex-1 flex-col justify-center px-6 py-24 sm:px-10">
      <p className="font-display text-sm text-silver-deep">404</p>
      <h1 className="mt-4 text-display-md">{dict.notFound.heading}</h1>
      <p className="mt-4 max-w-md text-silver-deep">{dict.notFound.body}</p>
      <Link href={`/${locale}`} className="mt-10 w-fit text-sm underline underline-offset-4">
        {dict.notFound.back}
      </Link>
    </main>
  );
}
