import Link from "next/link";
import { getSora } from "@/demos/sora/server";
import { cn } from "@/lib/cn";
import { SoraLogo, soraContainer } from "./SoraUi";

const heading = "font-sora text-xs tracking-[0.28em] text-sora-blush/70 uppercase";

export async function SoraFooter() {
  const sora = await getSora();
  const soraPaths = sora.paths;
  return (
    <footer className="bg-sora-espresso text-sora-shell">
      <div className={cn(soraContainer, "grid gap-12 border-t border-sora-shell/10 py-16 sm:grid-cols-2 lg:grid-cols-4")}>
        <div>
          <SoraLogo s={sora} tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sora-shell/60">{sora.footer.tagline}</p>
        </div>
        <div>
          <p className={heading}>{sora.ui.hours}</p>
          <dl className="mt-5 space-y-2 text-sm text-sora-shell/75">
            {sora.visit.hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-6">
                <dt>{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className={heading}>{sora.ui.findUs}</p>
          <address className="mt-5 text-sm leading-relaxed text-sora-shell/75 not-italic">
            {sora.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div>
          <p className={heading}>{sora.ui.contact}</p>
          <ul className="mt-5 space-y-2 text-sm text-sora-shell/75">
            <li>
              <a href={sora.phone.href} className="hover:text-sora-shell">
                {sora.phone.label}
              </a>
            </li>
            <li>
              <a href={`mailto:${sora.email}`} className="hover:text-sora-shell">
                {sora.email}
              </a>
            </li>
            <li>
              <Link href={soraPaths.booking} className="hover:text-sora-shell">
                {sora.ui.bookOnline} →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={cn(soraContainer, "border-t border-sora-shell/10 py-6 text-xs text-sora-shell/50")}>
        © {sora.name}. {sora.footer.legal}
      </p>
    </footer>
  );
}
