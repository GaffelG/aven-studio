import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pageKeys, pagePaths } from "@/lib/routes";
import { getCurrentYear } from "@/lib/year";
import { LanguageSwitcher } from "./LanguageSwitcher";

const heading = "mb-5 text-xs font-medium tracking-[0.18em] text-silver uppercase";
const link = "text-paper/75 transition-colors duration-300 hover:text-paper";

export async function Footer() {
  const [dict, locale, year] = await Promise.all([getDictionary(), getLocale(), getCurrentYear()]);

  return (
    <footer className="bg-ink text-paper">
      <Container className="pt-20 pb-10 sm:pt-28">
        <div className="flex flex-col gap-8 border-b border-paper/10 pb-16 md:flex-row md:items-end md:justify-between sm:pb-20">
          <p className="max-w-2xl font-display text-display-lg font-semibold text-balance">{dict.footer.statement}</p>
          <Button href={localizedHref(locale, pagePaths.contact)} variant="inverse" arrow className="self-start md:self-auto">
            {dict.footer.cta}
          </Button>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo href={localizedHref(locale)} label={dict.header.home} />
            <p className="mt-4 max-w-xs text-sm text-paper/60">{dict.footer.tagline}</p>
          </div>

          <nav aria-label={dict.footer.navigation} className="lg:col-span-3">
            <p className={heading}>{dict.footer.navigation}</p>
            <ul className="space-y-3 text-sm">
              {pageKeys.map((key) => (
                <li key={key}>
                  <Link href={localizedHref(locale, pagePaths[key])} className={link}>
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className={heading}>{dict.footer.contact}</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${dict.footer.email}`} className={link}>
                  {dict.footer.email}
                </a>
              </li>
              <li className="text-paper/60">{dict.footer.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Aven Studio. {dict.footer.rights}{" "}
            <Link href={localizedHref(locale, "/privacy")} className="ml-3 underline-offset-4 hover:text-paper hover:underline">
              {dict.privacy.linkLabel}
            </Link>
          </p>
          <LanguageSwitcher locale={locale} labels={dict.languageSwitcher} className="text-paper" />
        </div>
      </Container>
    </footer>
  );
}
