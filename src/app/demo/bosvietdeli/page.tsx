import { BoBooking } from "@/components/demos/bosvietdeli/BoBooking";
import { bo } from "@/demos/bosvietdeli/content";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const serif = { fontFamily: "var(--font-fraunces), serif" };
const eyebrow = "text-xs font-medium tracking-[0.22em] uppercase";

export default function BoPage() {
  return (
    <>
      <header className="border-b border-[var(--bo-line)]">
        <div className={`${container} flex items-center justify-between py-5`}>
          <a href="#top" className="text-2xl font-semibold tracking-tight" style={serif}>
            bo´s <span className="text-[var(--bo-matcha)] italic">viet deli</span>
          </a>
          <nav className="hidden gap-8 text-sm sm:flex">
            <a href="#speisen" className="hover:text-[var(--bo-coral)]">Speisen</a>
            <a href="#zeiten" className="hover:text-[var(--bo-coral)]">Öffnungszeiten</a>
            <a href="#gutscheine" className="hover:text-[var(--bo-coral)]">Gutscheine</a>
          </nav>
          <a href="#reservieren" className="rounded-full bg-[var(--bo-ink)] px-5 py-2.5 text-sm font-medium text-[var(--bo-cream)] hover:bg-[var(--bo-coral)]">
            Tisch reservieren
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${container} grid gap-12 pt-16 pb-12 lg:grid-cols-12 lg:items-end lg:pt-24`}>
          <div className="lg:col-span-7">
            <p className={`${eyebrow} text-[var(--bo-matcha)]`}>100 % pflanzlich · München-Giesing</p>
            <h1 className="mt-6 text-6xl leading-[0.95] font-semibold tracking-[-0.03em] sm:text-7xl lg:text-8xl" style={serif}>
              Sushi, das <em className="text-[var(--bo-coral)]">vorbeirollt</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--bo-muted)]">
              Veganes Running Sushi – 90 Minuten all you can eat, direkt vom Band. Reserviere deinen Platz jetzt online, in
              unter einer Minute.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#reservieren" className="rounded-full bg-[var(--bo-coral)] px-7 py-4 font-medium text-white hover:bg-[var(--bo-ink)]">
                Platz reservieren →
              </a>
              <a href="#speisen" className="rounded-full border border-[var(--bo-ink)]/25 px-7 py-4 font-medium hover:border-[var(--bo-ink)]">
                Was es gibt
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[var(--bo-line)] lg:col-span-4 lg:col-start-9">
            {[
              ["90 min", "All you can eat"],
              ["3×", "Slots pro Abend"],
              ["0 %", "Tierisches"],
              ["7 Tage", "geöffnet"],
            ].map(([value, label]) => (
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
          <p className={`${eyebrow} text-[var(--bo-matcha)]`}>So einfach geht’s</p>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3">
            {bo.steps.map((step, i) => (
              <li key={step.title} className="border-t border-[var(--bo-ink)]/20 pt-6">
                <span className="text-sm text-[var(--bo-coral)] tabular-nums">0{i + 1}</span>
                <h2 className="mt-3 text-2xl font-semibold" style={serif}>{step.title}</h2>
                <p className="mt-3 leading-relaxed text-[var(--bo-muted)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Booking */}
        <section id="reservieren" className="scroll-mt-6 bg-[var(--bo-ink)] py-20 text-[var(--bo-cream)] lg:py-28">
          <div className={container}>
            <p className={`${eyebrow} text-[#a9c79a]`}>Online reservieren</p>
            <h2 className="mt-4 max-w-2xl text-5xl leading-none font-semibold tracking-[-0.02em] sm:text-6xl" style={serif}>
              Dein Platz am Band – <em className="text-[var(--bo-coral)]">sofort bestätigt</em>.
            </h2>
            <p className="mt-6 max-w-xl text-[var(--bo-cream)]/70">
              Kein Warten auf eine Antwort im Chat. Wähle deinen Slot, und du bekommst direkt eine Bestätigung.
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
              <p className={`${eyebrow} text-[var(--bo-matcha)]`}>Speisen</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.02em]" style={serif}>
                Alles <em>pflanzlich</em>, alles frisch.
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
              <p className={`${eyebrow} text-[var(--bo-matcha)]`}>Öffnungszeiten</p>
              <dl className="mt-6 space-y-3">
                {bo.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4 border-b border-[var(--bo-line)] pb-3">
                    <dt>{row.days}</dt>
                    <dd className="tabular-nums">{row.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-[var(--bo-muted)]">Kein Ruhetag. Feiertage werden hier aktuell angezeigt.</p>
            </div>
            <div className="rounded-2xl bg-[var(--bo-paper)] p-8">
              <p className={`${eyebrow} text-[var(--bo-matcha)]`}>So findest du uns</p>
              <address className="mt-6 text-2xl leading-snug not-italic" style={serif}>
                {bo.address.street}
                <br />
                {bo.address.city}
              </address>
              <a href={bo.phoneHref} className="mt-6 inline-block underline decoration-[var(--bo-coral)] underline-offset-4">
                {bo.phone}
              </a>
            </div>
            <div id="gutscheine" className="rounded-2xl bg-[var(--bo-plum)] p-8 text-[var(--bo-cream)]">
              <p className={`${eyebrow} text-[var(--bo-cream)]/70`}>Gutscheine</p>
              <p className="mt-6 text-3xl leading-tight font-semibold" style={serif}>
                Verschenke 90 Minuten <em>Sushi-Glück</em>.
              </p>
              <span className="mt-8 inline-block rounded-full bg-[var(--bo-cream)] px-6 py-3 font-medium text-[var(--bo-plum)]">
                Gutschein kaufen →
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--bo-line)]">
        <div className={`${container} flex flex-wrap justify-between gap-4 py-8 text-sm text-[var(--bo-muted)]`}>
          <span>© {bo.name}</span>
          <span>Entwurf: Aven Studio</span>
        </div>
      </footer>
    </>
  );
}

/** Decorative running-sushi belt drawn in CSS; pauses for visitors who prefer reduced motion. */
function ConveyorBelt() {
  const plates = ["#d9643f", "#4a6b3a", "#6d3f6b", "#e8b04a", "#d9643f", "#4a6b3a", "#6d3f6b", "#e8b04a"];
  const row = [...plates, ...plates];

  return (
    <div aria-hidden className="overflow-hidden border-y-[10px] border-[#cfc4b1] bg-[#e7dfd0] py-6">
      <style>{`@keyframes bo-belt{to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.bo-belt{animation:none!important}}`}</style>
      <div className="bo-belt flex w-max gap-10 px-5" style={{ animation: "bo-belt 40s linear infinite" }}>
        {row.map((color, i) => (
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
    </div>
  );
}
