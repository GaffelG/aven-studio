import Link from "next/link";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

// Temporary Stage 1 placeholder: verifies tokens, fonts and locale routing.
export default async function Home() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className="mx-auto flex w-full max-w-site flex-1 flex-col justify-center px-6 py-24 sm:px-10">
      <p className="text-sm font-medium tracking-[0.18em] text-sage-deep uppercase">
        {dict.placeholder.eyebrow}
      </p>
      <h1 className="mt-6 max-w-4xl text-display-xl">{dict.placeholder.heading}</h1>
      <p className="mt-6 max-w-xl text-lg text-silver-deep">{dict.placeholder.body}</p>

      <nav aria-label={dict.languageSwitcher.label} className="mt-12 flex gap-6 text-sm">
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            aria-current={l === locale ? "page" : undefined}
            className="text-silver-deep underline-offset-4 transition-colors hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline"
          >
            {dict.languageSwitcher[l]}
          </Link>
        ))}
      </nav>
    </main>
  );
}
