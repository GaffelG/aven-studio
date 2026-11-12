import Link from "next/link";
import { BoBooking } from "@/components/demos/bosvietdeli/BoBooking";
import { BoLanguageSwitch } from "@/components/demos/bosvietdeli/BoLocale";
import { BoVoucher } from "@/components/demos/bosvietdeli/BoVoucher";
import { boAdmin } from "@/demos/bosvietdeli/content";
import { getBo } from "@/demos/bosvietdeli/server";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const serif = { fontFamily: "var(--font-fraunces), serif" };
const eyebrow = "text-xs font-medium tracking-[0.22em] uppercase";

export default async function BoPage() {
  const bo = await getBo();

  return (
    <>
      <header className="bg-[var(--bo-ink)] text-[var(--bo-cream)]">
        <div className={`${container} flex items-center justify-between py-3`}>
          <a href="#top" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- small static logo, white on transparent */}
            <img src="/demos/bosvietdeli/logo.webp" alt={bo.name} width={42} height={60} className="h-14 w-auto" />
            <span className="hidden text-xl font-semibold tracking-tight sm:inline" style={serif}>
              bo´s <span className="text-[var(--bo-sprout)] italic">viet deli</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#speisen" className="hover:text-[var(--bo-sprout)]">{bo.nav.menu}</a>
            <a href="#zeiten" className="hover:text-[var(--bo-sprout)]">{bo.nav.hours}</a>
            <a href="#gutscheine" className="hover:text-[var(--bo-sprout)]">{bo.nav.vouchers}</a>
          </nav>
          <div className="flex items-center gap-4">
            <BoLanguageSwitch />
            <a href="#reservieren" className="rounded-full bg-[var(--bo-sprout)] px-5 py-2.5 text-sm font-medium whitespace-nowrap text-[var(--bo-ink)] hover:bg-white">
              {bo.nav.reserve}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${container} grid gap-12 pt-16 pb-12 lg:grid-cols-12 lg:items-end lg:pt-24`}>
          <div className="lg:col-span-7">
            <p className={`${eyebrow} text-[var(--bo-matcha)]`}>{bo.hero.eyebrow}</p>
            <h1 className="mt-6 text-6xl leading-[0.95] font-semibold tracking-[-0.03em] sm:text-7xl lg:text-8xl" style={serif}>
              {bo.hero.titleStart}
              <em className="text-[var(--bo-accent)]">{bo.hero.titleAccent}</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--bo-muted)]">
              {bo.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#reservieren" className="rounded-full bg-[var(--bo-accent)] px-7 py-4 font-medium text-white hover:bg-[var(--bo-ink)]">
                {bo.hero.primary}
              </a>
              <a href="#speisen" className="rounded-full border border-[var(--bo-ink)]/25 px-7 py-4 font-medium hover:border-[var(--bo-ink)]">
                {bo.hero.secondary}
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[var(--bo-line)] lg:col-span-4 lg:col-start-9">
            {bo.hero.stats.map(([value, label]) => (
              <div key={label} className="bg-[var(--bo-paper)] p-5">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold whitespace-nowrap" style={serif}>{value}</span>
                  <span className="text-sm text-[var(--bo-muted)]">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <ConveyorBelt />

        {/* How it works */}
        <section className={`${container} py-20 lg:py-28`}>
          <p className={`${eyebrow} text-[var(--bo-matcha)]`}>{bo.stepsEyebrow}</p>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3">
            {bo.steps.map((step, i) => (
              <li key={step.title} className="border-t border-[var(--bo-ink)]/20 pt-6">
                <span className="text-sm text-[var(--bo-accent)] tabular-nums">0{i + 1}</span>
                <h2 className="mt-3 text-2xl font-semibold" style={serif}>{step.title}</h2>
                <p className="mt-3 leading-relaxed text-[var(--bo-muted)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Booking */}
        <section id="reservieren" className="scroll-mt-6 bg-[var(--bo-ink)] py-20 text-[var(--bo-cream)] lg:py-28">
          <div className={container}>
            <p className={`${eyebrow} text-[var(--bo-sprout)]`}>{bo.bookingSection.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-5xl leading-none font-semibold tracking-[-0.02em] sm:text-6xl" style={serif}>
              {bo.bookingSection.titleStart}
              <em className="text-[var(--bo-sprout)]">{bo.bookingSection.titleAccent}</em>.
            </h2>
            <p className="mt-6 max-w-xl text-[var(--bo-cream)]/70">
              {bo.bookingSection.lead}
            </p>
            <div className="mt-12">
              <BoBooking />
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="speisen" className={`${container} scroll-mt-6 py-20 lg:py-28`}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className={`${eyebrow} text-[var(--bo-matcha)]`}>{bo.menuSection.eyebrow}</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.02em]" style={serif}>
                {bo.menuSection.titleStart}
                <em>{bo.menuSection.titleAccent}</em>
                {bo.menuSection.titleEnd}
              </h2>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-[var(--bo-line)] sm:grid-cols-2 lg:col-span-8">
              {bo.menu.map((item) => (
                <li key={item.title} className="bg-[var(--bo-paper)] p-7">
                  <h3 className="text-2xl font-semibold" style={serif}>{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--bo-muted)]">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hours, address, vouchers */}
        <section id="zeiten" className={`${container} scroll-mt-6 pb-20 lg:pb-28`}>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl bg-[var(--bo-paper)] p-8">
              <p className={`${eyebrow} text-[var(--bo-matcha)]`}>{bo.hoursTitle}</p>
              <dl className="mt-6 space-y-3">
                {bo.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4 border-b border-[var(--bo-line)] pb-3">
                    <dt>{row.days}</dt>
                    <dd className="tabular-nums">{row.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-[var(--bo-muted)]">{bo.hoursNote}</p>
            </div>
            <div className="rounded-2xl bg-[var(--bo-paper)] p-8">
              <p className={`${eyebrow} text-[var(--bo-matcha)]`}>{bo.findUs}</p>
              <address className="mt-6 text-2xl leading-snug not-italic" style={serif}>
                {bo.address.street}
                <br />
                {bo.address.city}
              </address>
              <a href={bo.phoneHref} className="mt-6 inline-block underline decoration-[var(--bo-accent)] underline-offset-4">
                {bo.phone}
              </a>
            </div>
            <div id="gutscheine" className="rounded-2xl bg-[var(--bo-beet)] p-8 text-[var(--bo-cream)]">
              <p className={`${eyebrow} text-[var(--bo-cream)]/70`}>{bo.vouchersSection.eyebrow}</p>
              <p className="mt-6 text-3xl leading-tight font-semibold" style={serif}>
                {bo.vouchersSection.titleStart}
                <em>{bo.vouchersSection.titleAccent}</em>.
              </p>
              <BoVoucher />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--bo-ink)] text-[var(--bo-cream)]/70">
        <div className={`${container} flex flex-wrap items-center justify-between gap-6 py-10 text-sm`}>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- small static logo, white on transparent */}
            <img src="/demos/bosvietdeli/logo.webp" alt="" width={42} height={60} className="h-16 w-auto opacity-90" />
            <span>
              © {bo.name}
              <br />
              {bo.address.street}, {bo.address.city}
            </span>
          </div>
          <span className="flex gap-6">
            <Link href={boAdmin(bo.locale)} className="underline-offset-4 hover:underline">
              {bo.footer.team}
            </Link>
            <span>{bo.footer.credit}</span>
          </span>
        </div>
      </footer>
    </>
  );
}

/** Decorative running-sushi belt drawn in CSS; pauses for visitors who prefer reduced motion. */
function ConveyorBelt() {
  // One set is ~3,600px, wider than any common screen (incl. 2560px monitors). Two identical sets (each with the same
  // trailing gap) slide by exactly one set width, so the loop is seamless and never shows an end.
  const colors = ["#8fbf5a", "#8e2f55", "#e8893a", "#e8b04a"];
  const set = Array.from({ length: 24 }, (_, i) => colors[i % colors.length]);

  return (
    <div aria-hidden className="overflow-hidden border-y-[10px] border-[#cdc8a2] bg-[#e9e6cc] py-6">
      <style>{`@keyframes bo-belt{to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.bo-belt{animation:none!important}}`}</style>
      <div className="bo-belt flex w-max" style={{ animation: "bo-belt 90s linear infinite" }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-10 pr-10">
            {set.map((color, i) => (
          <div key={i} className="grid size-24 shrink-0 place-items-center rounded-full bg-white shadow-[0_6px_0_rgba(0,0,0,0.08)] ring-4 ring-[var(--bo-cream)] sm:size-28">
            <div className="flex gap-1.5">
              {[0, 1].map((n) => (
                <span key={n} className="grid size-9 place-items-center rounded-full bg-[#22302a] sm:size-10">
                  <span className="grid size-6 place-items-center rounded-full bg-[#fbf7ef] sm:size-7">
                    <span className="size-3 rounded-full" style={{ backgroundColor: color }} />
                  </span>
                </span>
              ))}
            </div>
          </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
