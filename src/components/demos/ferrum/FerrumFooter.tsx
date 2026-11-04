import { ferrum } from "@/demos/ferrum/content";
import { FerrumLogo } from "./FerrumLogo";

export function FerrumFooter() {
  return (
    <footer className="border-t border-ferrum-line bg-ferrum-ink">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <FerrumLogo />
          <p className="mt-4 max-w-xs text-sm text-ferrum-muted">{ferrum.footer.tagline}</p>
        </div>
        <address className="text-sm leading-relaxed text-ferrum-text/80 not-italic">
          {ferrum.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <ul className="space-y-1 text-sm text-ferrum-text/80">
          <li>
            <a href={ferrum.phone.href} className="hover:text-ferrum-accent">
              {ferrum.phone.label}
            </a>
          </li>
          <li>
            <a href={`mailto:${ferrum.email}`} className="hover:text-ferrum-accent">
              {ferrum.email}
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-ferrum-line">
        <p className="mx-auto max-w-site px-5 py-6 text-xs text-ferrum-muted sm:px-8 lg:px-10">
          © {ferrum.name}. {ferrum.footer.legal}
        </p>
      </div>
    </footer>
  );
}
