import Link from "next/link";
import { getBergsten } from "@/demos/bergsten/server";
import { cn } from "@/lib/cn";
import { BergstenLogo, bergstenContainer } from "./BergstenUi";

const heading = "font-bergsten text-xs font-medium tracking-[0.2em] text-bergsten-green-light uppercase";

export async function BergstenFooter() {

  const bergsten = await getBergsten();
  const bergstenPaths = bergsten.paths;
  return (
    <footer className="bg-bergsten-ink text-bergsten-paper">
      <div className={cn(bergstenContainer, "grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20")}>
        <div className="lg:col-span-5">
          <BergstenLogo b={bergsten} tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bergsten-paper/60">{bergsten.footer.tagline}</p>
        </div>
        <nav aria-label={bergsten.ui.footerNav} className="lg:col-span-2">
          <p className={heading}>{bergsten.ui.menu}</p>
          <ul className="mt-5 space-y-2.5 text-sm text-bergsten-paper/75">
            {[...bergsten.nav, { label: bergsten.quoteCta, href: bergstenPaths.quote }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bergsten-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-2">
          <p className={heading}>{bergsten.ui.visit}</p>
          <address className="mt-5 text-sm leading-relaxed text-bergsten-paper/75 not-italic">
            {bergsten.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div className="lg:col-span-3">
          <p className={heading}>{bergsten.ui.contact}</p>
          <ul className="mt-5 space-y-2.5 text-sm text-bergsten-paper/75">
            <li>
              <a href={bergsten.phone.href} className="hover:text-bergsten-paper">
                {bergsten.phone.label}
              </a>
            </li>
            <li>
              <a href={`mailto:${bergsten.email}`} className="hover:text-bergsten-paper">
                {bergsten.email}
              </a>
            </li>
            <li className="text-bergsten-paper/50">{bergsten.ui.orgNr} {bergsten.orgNumber}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bergsten-paper/10">
        <p className={cn(bergstenContainer, "py-6 text-xs text-bergsten-paper/50")}>
          © {bergsten.name}. {bergsten.footer.legal}
        </p>
      </div>
    </footer>
  );
}
