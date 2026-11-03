import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pageKeys, pagePaths } from "@/lib/routes";
import { DesktopNav } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export async function Header() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const items = pageKeys.map((key) => ({ href: localizedHref(locale, pagePaths[key]), label: dict.nav[key] }));
  const contactHref = localizedHref(locale, pagePaths.contact);

  return (
    <header className="group/header sticky top-0 z-40 border-b border-ink/8 bg-paper">
      <Container className="flex h-16 items-center justify-between gap-8 lg:h-20">
        <Logo
          href={localizedHref(locale)}
          label={dict.header.home}
          className="relative z-50 transition-colors group-has-[[aria-expanded=true]]/header:text-paper"
        />

        <DesktopNav items={items} label={dict.footer.navigation} className="hidden lg:block" />

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher locale={locale} labels={dict.languageSwitcher} />
          <Button href={contactHref} size="sm" arrow>
            {dict.header.cta}
          </Button>
        </div>

        <MobileNav
          className="lg:hidden"
          locale={locale}
          items={items}
          navLabel={dict.footer.navigation}
          labels={{ open: dict.header.menuOpen, close: dict.header.menuClose, cta: dict.header.cta, ctaHref: contactHref }}
          languageLabels={dict.languageSwitcher}
        />
      </Container>
    </header>
  );
}
