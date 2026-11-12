"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { bookingsFor, capacity, clearDemo, setStatus, type Booking } from "@/demos/bosvietdeli/bookings";
import { boHome, seatingsFor } from "@/demos/bosvietdeli/content";
import { dayKey } from "@/demos/shared/schedule";
import { cn } from "@/lib/cn";
import { BoLanguageSwitch, useBo } from "./BoLocale";

const serif = { fontFamily: "var(--font-fraunces), serif" };
const demoPin = "1234";
const sessionKey = "bo-demo-admin";

/** Owner view mock-up. A real version would sit behind a server-side login; this demo PIN only shows the idea. */
export function BoAdmin() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the demo session after hydration
      setUnlocked(sessionStorage.getItem(sessionKey) === "1");
    } catch {
      // Storage blocked: ask for the PIN each time.
    }
    setReady(true);
  }, []);

  if (!ready) return <div className="min-h-[60vh]" />;
  if (!unlocked) return <PinGate onUnlock={() => setUnlocked(true)} />;
  return <Dashboard />;
}

function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const bo = useBo();
  const t = bo.admin;
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="grid min-h-[80vh] place-items-center bg-[var(--bo-ink)] px-5 py-16 text-[var(--bo-cream)]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (pin === demoPin) {
            try {
              sessionStorage.setItem(sessionKey, "1");
            } catch {
              // Fine: unlocked for this page view only.
            }
            onUnlock();
          } else setError(true);
        }}
        className="w-full max-w-sm text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- small static logo, white on transparent */}
        <img src="/demos/bosvietdeli/logo.webp" alt={bo.name} width={56} height={80} className="mx-auto h-24 w-auto" />
        <h1 className="mt-8 text-4xl font-semibold" style={serif}>
          {t.area}
        </h1>
        <p className="mt-3 text-[var(--bo-cream)]/70">
          {t.onlyFor} {bo.name}.
        </p>
        <BoLanguageSwitch className="mt-4 justify-center text-[var(--bo-cream)]" />
        <label htmlFor="bo-pin" className="sr-only">
          PIN
        </label>
        <input
          id="bo-pin"
          inputMode="numeric"
          autoComplete="off"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
            setError(false);
          }}
          placeholder="PIN"
          aria-invalid={error || undefined}
          aria-describedby="bo-pin-hint"
          className="mt-8 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-center text-2xl tracking-[0.5em] focus:border-[var(--bo-sprout)] focus:outline-none aria-invalid:border-[#ff8f7a]"
        />
        {error && (
          <p role="alert" className="mt-3 text-sm text-[#ff8f7a]">
            {t.wrongPin}
          </p>
        )}
        <button type="submit" className="mt-4 w-full rounded-full bg-[var(--bo-sprout)] px-6 py-4 font-medium text-[var(--bo-ink)] hover:bg-white">
          {t.login}
        </button>
        <p id="bo-pin-hint" className="mt-6 rounded-lg bg-white/5 px-4 py-3 text-sm text-[var(--bo-cream)]/70">
          {t.demoPin} <strong className="text-[var(--bo-cream)]">{demoPin}</strong>
          <br />
          {t.realLogin}
        </p>
      </form>
    </div>
  );
}

function Dashboard() {
  const bo = useBo();
  const t = bo.admin;
  const tabDate = new Intl.DateTimeFormat(bo.intl, { weekday: "short", day: "numeric", month: "short" });
  const longDate = new Intl.DateTimeFormat(bo.intl, { weekday: "long", day: "numeric", month: "long" });
  const [days, setDays] = useState<Date[]>([]);
  const [active, setActive] = useState(0);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- dates depend on the owner's clock, read once after hydration
    setDays(Array.from({ length: 14 }, (_, i) => new Date(today.getFullYear(), today.getMonth(), today.getDate() + i, 12)));
  }, []);

  if (days.length === 0) return <div className="min-h-[60vh]" />;

  const day = days[active];
  const key = dayKey(day);
  const times = seatingsFor(day);
  // `version` forces a re-read of localStorage after status changes.
  const bookings = version >= 0 ? bookingsFor(key, times) : [];
  const live = bookings.filter((b) => b.status !== "cancelled");
  const guests = live.reduce((sum, b) => sum + b.guests, 0);
  const online = bookings.filter((b) => b.source === "online").length;

  const update = (id: string, status: Booking["status"]) => {
    setStatus(id, status);
    setVersion((v) => v + 1);
  };

  return (
    <div className="min-h-dvh bg-[var(--bo-cream)]">
      <header className="bg-[var(--bo-ink)] text-[var(--bo-cream)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- small static logo, white on transparent */}
            <img src="/demos/bosvietdeli/logo.webp" alt="" width={35} height={50} className="h-12 w-auto" />
            <div>
              <p className="text-xs tracking-[0.22em] text-[var(--bo-sprout)] uppercase">{t.area}</p>
              <h1 className="text-2xl font-semibold" style={serif}>
                {t.title}
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <BoLanguageSwitch />
            <Link href={`${boHome(bo.locale)}#reservieren`} className="rounded-full border border-white/25 px-4 py-2 hover:border-white">
              {t.toSite}
            </Link>
            <button
              type="button"
              onClick={() => {
                try {
                  sessionStorage.removeItem(sessionKey);
                } catch {}
                location.reload();
              }}
              className="rounded-full border border-white/25 px-4 py-2 hover:border-white"
            >
              {t.logout}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div role="tablist" aria-label={t.day} className="flex gap-2 overflow-x-auto pb-3">
          {days.map((d, i) => (
            <button
              key={dayKey(d)}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm",
                i === active ? "border-[var(--bo-ink)] bg-[var(--bo-ink)] text-[var(--bo-cream)]" : "border-[var(--bo-line)] bg-[var(--bo-paper)] hover:border-[var(--bo-ink)]",
              )}
            >
              {i === 0 ? t.today : i === 1 ? t.tomorrow : tabDate.format(d)}
            </button>
          ))}
        </div>

        <h2 className="mt-6 text-3xl font-semibold first-letter:uppercase" style={serif}>
          {longDate.format(day)}
        </h2>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat term={t.stats.bookings} value={live.length} />
          <Stat term={t.stats.guests} value={guests} />
          <Stat term={t.stats.online} value={online} highlight={online > 0} />
          <Stat term={t.stats.cancelled} value={bookings.length - live.length} />
        </dl>

        <div className="mt-8 space-y-4">
          {times.map((time) => {
            const slot = bookings.filter((b) => b.time === time);
            const seated = slot.filter((b) => b.status !== "cancelled").reduce((s, b) => s + b.guests, 0);
            const pct = Math.min(100, Math.round((seated / capacity) * 100));
            return (
              <section key={time} aria-labelledby={`slot-${time}`} className="overflow-hidden rounded-2xl bg-[var(--bo-paper)] ring-1 ring-[var(--bo-line)]">
                <div className="flex flex-wrap items-center gap-4 px-5 py-4">
                  <h3 id={`slot-${time}`} className="w-28 text-2xl font-semibold tabular-nums" style={serif}>
                    {time}
                  </h3>
                  <div className="min-w-40 flex-1">
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--bo-line)]">
                      <div className={cn("h-full rounded-full", pct > 85 ? "bg-[var(--bo-beet)]" : "bg-[var(--bo-accent)]")} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <p className="text-sm text-[var(--bo-muted)] tabular-nums">
                    {seated} / {capacity} {t.seatsLabel}
                  </p>
                </div>
                {slot.length > 0 ? (
                  <ul className="divide-y divide-[var(--bo-line)] border-t border-[var(--bo-line)]">
                    {slot.map((b) => (
                      <li key={b.id} className={cn("flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3 text-sm", b.status === "cancelled" && "opacity-45")}>
                        <span className="w-56 font-medium">
                          {b.name}
                          {b.source === "online" && (
                            <span className="ml-2 rounded-full bg-[var(--bo-sprout)] px-2 py-0.5 text-xs font-medium text-[var(--bo-ink)]">{t.onlineNew}</span>
                          )}
                        </span>
                        <span className="w-20 tabular-nums">{b.guests} {b.guests === 1 ? t.person : t.persons}</span>
                        <span className="w-20 text-[var(--bo-muted)]">{t.seat[b.seat]}</span>
                        <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="w-32 text-[var(--bo-muted)] tabular-nums hover:underline">
                          {b.phone}
                        </a>
                        <span className="ml-auto flex gap-2">
                          {b.status === "booked" && (
                            <>
                              <button type="button" onClick={() => update(b.id, "arrived")} className="rounded-full bg-[var(--bo-accent)] px-3 py-1.5 text-xs font-medium text-white hover:bg-[var(--bo-ink)]">
                                {t.arrived}
                              </button>
                              <button type="button" onClick={() => update(b.id, "cancelled")} className="rounded-full border border-[var(--bo-line)] px-3 py-1.5 text-xs hover:border-[var(--bo-beet)] hover:text-[var(--bo-beet)]">
                                {t.cancel}
                              </button>
                            </>
                          )}
                          {b.status === "arrived" && <span className="text-xs font-medium text-[var(--bo-accent)]">{t.arrivedDone}</span>}
                          {b.status === "cancelled" && (
                            <button type="button" onClick={() => update(b.id, "booked")} className="text-xs underline underline-offset-4">
                              {t.undo}
                            </button>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="border-t border-[var(--bo-line)] px-5 py-3 text-sm text-[var(--bo-muted)]">{t.empty}</p>
                )}
              </section>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--bo-line)] pt-6 text-sm text-[var(--bo-muted)]">
          <p className="max-w-xl">
            {t.footnote}
          </p>
          <button
            type="button"
            onClick={() => {
              clearDemo();
              setVersion((v) => v + 1);
            }}
            className="rounded-full border border-[var(--bo-line)] px-4 py-2 hover:border-[var(--bo-ink)]"
          >
            {t.reset}
          </button>
        </div>
      </main>
    </div>
  );
}

function Stat({ term, value, highlight }: { term: string; value: number; highlight?: boolean }) {
  return (
    <div className={cn("rounded-2xl p-5", highlight ? "bg-[var(--bo-sprout)]" : "bg-[var(--bo-paper)] ring-1 ring-[var(--bo-line)]")}>
      <dt className="text-sm text-[var(--bo-muted)]">{term}</dt>
      <dd className="mt-1 text-4xl font-semibold tabular-nums" style={serif}>
        {value}
      </dd>
    </div>
  );
}
