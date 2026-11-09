"use client";

import { useEffect, useRef, useState } from "react";
import { bo, seatingsFor } from "@/demos/bosvietdeli/content";
import { dayKey, isTaken, upcomingDays } from "@/demos/shared/schedule";
import { cn } from "@/lib/cn";

const shortDate = new Intl.DateTimeFormat("de-DE", { weekday: "short", day: "numeric", month: "short" });
const longDate = new Intl.DateTimeFormat("de-DE", { weekday: "long", day: "numeric", month: "long" });
const serif = { fontFamily: "var(--font-fraunces), serif" };
const label = "text-xs font-medium tracking-[0.22em] text-[#a9c79a] uppercase";
const choice =
  "cursor-pointer border border-white/15 transition-colors hover:border-white/50 has-checked:border-[var(--bo-coral)] has-checked:bg-[var(--bo-coral)] has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-[var(--bo-coral)]";
const inputClass =
  "mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-[var(--bo-cream)] focus:border-[var(--bo-coral)] focus:outline-none aria-invalid:border-[#ff8f7a]";

const guestOptions = [1, 2, 3, 4, 5, 6];
const seats = [
  { id: "band", name: "Am Band", note: "Meist frei beim ersten Slot" },
  { id: "tisch", name: "Am Tisch", note: "Ideal für Gruppen" },
];

/** Dates depend on the visitor's "today", so the calendar only renders in the browser. */
export function BoBooking() {
  const [days, setDays] = useState<Date[] | null>(null);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the visitor's clock after hydration
  useEffect(() => setDays(upcomingDays(10, [])), []);
  if (!days) return <div className="h-[34rem] animate-pulse rounded-2xl bg-white/[0.04]" />;
  return <BookingForm days={days} />;
}

function BookingForm({ days }: { days: Date[] }) {
  const [step, setStep] = useState(0);
  const [guests, setGuests] = useState(2);
  const [seat, setSeat] = useState("band");
  const [dayIndex, setDayIndex] = useState(0);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ time?: string; name?: string; phone?: string }>({});
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const day = days[dayIndex];
  const key = dayKey(day);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, done]);

  const submit = () => {
    if (step === 0) {
      if (!time) return setErrors({ time: "Bitte wähle eine Uhrzeit." });
      setErrors({});
      return setStep(1);
    }
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Bitte gib deinen Namen an.";
    if (!/^[0-9 +()/-]{6,}$/.test(phone.trim())) next.phone = "Bitte gib eine gültige Telefonnummer an.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  const reset = () => {
    setStep(0);
    setTime(null);
    setName("");
    setPhone("");
    setErrors({});
    setDone(false);
  };

  if (done && time) {
    return (
      <div role="status" className="mx-auto max-w-2xl rounded-2xl bg-[var(--bo-cream)] px-8 py-14 text-center text-[var(--bo-ink)] sm:px-14">
        <p className="text-xs font-medium tracking-[0.22em] text-[var(--bo-matcha)] uppercase">Reservierung bestätigt</p>
        <h3 ref={headingRef} tabIndex={-1} className="mt-5 text-5xl font-semibold outline-none" style={serif}>
          Bis bald, {name.trim().split(" ")[0]}!
        </h3>
        <p className="mt-6 text-lg">
          <span className="first-letter:uppercase">{longDate.format(day)}</span>, {time} Uhr
          <br />
          {guests} {guests === 1 ? "Person" : "Personen"} · {seats.find((s) => s.id === seat)?.name}
        </p>
        <p className="mx-auto mt-4 max-w-md text-[var(--bo-muted)]">
          Die Bestätigung kommt per SMS. Euer Slot dauert 90 Minuten.
        </p>
        <p className="mx-auto mt-8 max-w-md border-t border-[var(--bo-line)] pt-6 text-sm text-[var(--bo-muted)]">{bo.notice}</p>
        <button type="button" onClick={reset} className="mt-6 rounded-full border border-[var(--bo-ink)]/30 px-6 py-3 text-sm hover:border-[var(--bo-ink)]">
          Neue Reservierung
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="grid gap-10 lg:grid-cols-12"
    >
      <div className="min-w-0 lg:col-span-8">
        <h3 ref={headingRef} tabIndex={-1} className="text-3xl font-semibold outline-none" style={serif}>
          {step === 0 ? "1. Wann und wie viele?" : "2. Deine Kontaktdaten"}
        </h3>

        {step === 0 ? (
          <div className="mt-8 space-y-8">
            <fieldset className="min-w-0">
              <legend className={label}>Personen</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {guestOptions.map((n) => (
                  <label key={n} className={cn(choice, "grid size-12 place-items-center rounded-full tabular-nums")}>
                    <input type="radio" name="guests" checked={guests === n} onChange={() => setGuests(n)} className="sr-only" />
                    {n}
                  </label>
                ))}
              </div>
              <p className="mt-2 text-sm text-[var(--bo-cream)]/60">Mehr als 6? Ruf uns kurz an: {bo.phone}</p>
            </fieldset>

            <fieldset className="min-w-0">
              <legend className={label}>Tag</legend>
              <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                {days.map((d, i) => (
                  <label key={dayKey(d)} className={cn(choice, "shrink-0 rounded-full px-4 py-2.5 text-sm")}>
                    <input
                      type="radio"
                      name="day"
                      checked={i === dayIndex}
                      onChange={() => {
                        setDayIndex(i);
                        setTime(null);
                      }}
                      className="sr-only"
                    />
                    {shortDate.format(d)}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="min-w-0">
              <legend className={label}>Slot (90 Minuten)</legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {seatingsFor(day).map((slot, i) => {
                  // The first seating is usually free at the belt, so it is never shown as full.
                  const taken = i > 0 && isTaken(key, slot, `bo${guests}`);
                  return (
                    <label key={slot} className={cn(choice, "rounded-xl px-3 py-4 text-center", taken && "pointer-events-none opacity-35")}>
                      <input
                        type="radio"
                        name="time"
                        disabled={taken}
                        checked={time === slot}
                        onChange={() => {
                          setTime(slot);
                          setErrors({});
                        }}
                        className="sr-only"
                      />
                      <span className="block text-xl tabular-nums" style={serif}>{slot}</span>
                      <span className="block text-xs opacity-75">{taken ? "ausgebucht" : i === 0 ? "viel frei am Band" : "frei"}</span>
                    </label>
                  );
                })}
              </div>
              {errors.time && <p role="alert" className="mt-3 text-sm text-[#ff8f7a]">{errors.time}</p>}
            </fieldset>

            <fieldset className="min-w-0">
              <legend className={label}>Platz</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {seats.map((s) => (
                  <label key={s.id} className={cn(choice, "rounded-xl px-5 py-4")}>
                    <input type="radio" name="seat" checked={seat === s.id} onChange={() => setSeat(s.id)} className="sr-only" />
                    <span className="block font-medium">{s.name}</span>
                    <span className="block text-sm opacity-75">{s.note}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Field id="name" text="Name" value={name} error={errors.name} autoComplete="name" onChange={setName} />
            <Field id="phone" text="Handynummer (für die SMS)" value={phone} error={errors.phone} type="tel" autoComplete="tel" onChange={setPhone} />
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button type="submit" className="rounded-full bg-[var(--bo-coral)] px-8 py-4 font-medium text-white hover:bg-white hover:text-[var(--bo-ink)]">
            {step === 0 ? "Weiter →" : "Verbindlich reservieren"}
          </button>
          {step === 1 && (
            <button type="button" onClick={() => setStep(0)} className="text-sm text-[var(--bo-cream)]/70 hover:text-white">
              ← Zurück
            </button>
          )}
        </div>
        <p className="mt-6 text-xs text-[var(--bo-cream)]/50">{bo.notice}</p>
      </div>

      <aside aria-label="Deine Auswahl" className="lg:col-span-4">
        <div className="rounded-2xl bg-white/[0.06] p-7 lg:sticky lg:top-6">
          <p className={label}>Deine Auswahl</p>
          <dl className="mt-6 space-y-4">
            <Row term="Tag" value={longDate.format(day)} />
            <Row term="Uhrzeit" value={time ? `${time} Uhr · 90 min` : "–"} />
            <Row term="Personen" value={String(guests)} />
            <Row term="Platz" value={seats.find((s) => s.id === seat)?.name ?? "–"} />
          </dl>
        </div>
      </aside>
    </form>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-[var(--bo-cream)]/55">{term}</dt>
      <dd className="mt-1 text-xl first-letter:uppercase" style={serif}>{value}</dd>
    </div>
  );
}

type FieldProps = {
  id: string;
  text: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
};

function Field({ id, text, value, error, type = "text", autoComplete, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={`bo-${id}`} className="text-sm">{text}</label>
      <input
        id={`bo-${id}`}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `bo-${id}-error` : undefined}
        className={inputClass}
      />
      {error && <p id={`bo-${id}-error`} className="mt-2 text-sm text-[#ff8f7a]">{error}</p>}
    </div>
  );
}
