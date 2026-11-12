"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { addBooking, type Seat } from "@/demos/bosvietdeli/bookings";
import { boAdmin, seatingsFor, type Bo } from "@/demos/bosvietdeli/content";
import { dayKey, isTaken, upcomingDays } from "@/demos/shared/schedule";
import { cn } from "@/lib/cn";
import { useBo } from "./BoLocale";

/** Date formats follow the page language. */
const dates = (bo: Bo) => ({
  long: new Intl.DateTimeFormat(bo.intl, { weekday: "long", day: "numeric", month: "long" }),
  month: new Intl.DateTimeFormat(bo.intl, { month: "long", year: "numeric" }),
});
const serif = { fontFamily: "var(--font-fraunces), serif" };
const label = "text-xs font-medium tracking-[0.22em] text-[var(--bo-sprout)] uppercase";
const choice =
  "relative cursor-pointer border border-white/15 transition-colors hover:border-white/50 has-checked:border-[var(--bo-sprout)] has-checked:bg-[var(--bo-sprout)] has-checked:text-[var(--bo-ink)] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-[var(--bo-sprout)]";
const inputClass =
  "mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-[var(--bo-cream)] focus:border-[var(--bo-sprout)] focus:outline-none aria-invalid:border-[#ff8f7a]";

const guestOptions = [1, 2, 3, 4, 5, 6];

/** Dates depend on the visitor's "today", so the calendar only renders in the browser. */
export function BoBooking() {
  const [days, setDays] = useState<Date[] | null>(null);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the visitor's clock after hydration
  useEffect(() => setDays(upcomingDays(30, [])), []);
  if (!days) return <div className="h-[34rem] animate-pulse rounded-2xl bg-white/[0.04]" />;
  return <BookingForm days={days} />;
}

function BookingForm({ days }: { days: Date[] }) {
  const bo = useBo();
  const t = bo.booking;
  const seats = t.seats;
  const longDate = dates(bo).long;
  const money = new Intl.NumberFormat(bo.intl, { style: "currency", currency: "EUR" });
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
      if (!time) return setErrors({ time: t.errors.time });
      setErrors({});
      return setStep(1);
    }
    const next: typeof errors = {};
    if (!name.trim()) next.name = t.errors.name;
    if (!/^[0-9 +()/-]{6,}$/.test(phone.trim())) next.phone = t.errors.phone;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      addBooking({ day: key, time: time!, guests, seat: seat as Seat, name: name.trim(), phone: phone.trim() });
      setDone(true);
    }
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
        <p className="text-xs font-medium tracking-[0.22em] text-[var(--bo-matcha)] uppercase">{t.confirmed}</p>
        <h3 ref={headingRef} tabIndex={-1} className="mt-5 text-5xl font-semibold outline-none" style={serif}>
          {t.seeYou}, {name.trim().split(" ")[0]}!
        </h3>
        <p className="mt-6 text-lg">
          <span className="first-letter:uppercase">{longDate.format(day)}</span>, {time}
          {t.timeSuffix}
          <br />
          {guests} {guests === 1 ? t.person : t.persons} · {seats.find((s) => s.id === seat)?.short}
        </p>
        <p className="mx-auto mt-4 max-w-md text-[var(--bo-muted)]">
          {t.smsNote}
        </p>
        <p className="mx-auto mt-8 max-w-md border-t border-[var(--bo-line)] pt-6 text-sm text-[var(--bo-muted)]">
          {bo.notice} {t.teamBefore}{" "}
          <Link href={boAdmin(bo.locale)} className="underline underline-offset-4">
            {t.teamLink}
          </Link>{" "}
          {t.teamAfter}
        </p>
        <button type="button" onClick={reset} className="mt-6 rounded-full border border-[var(--bo-ink)]/30 px-6 py-3 text-sm hover:border-[var(--bo-ink)]">
          {t.again}
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
          {t.headings[step]}
        </h3>

        {step === 0 ? (
          <div className="mt-8 space-y-8">
            <fieldset className="min-w-0">
              <legend className={label}>{t.guests}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {guestOptions.map((n) => (
                  <label key={n} className={cn(choice, "grid size-12 place-items-center rounded-full tabular-nums")}>
                    <input type="radio" name="guests" checked={guests === n} onChange={() => setGuests(n)} className="sr-only" />
                    {n}
                  </label>
                ))}
              </div>
              <p className="mt-2 text-sm text-[var(--bo-cream)]/60">{t.moreThanSix} {bo.phone}</p>
            </fieldset>

            <fieldset className="min-w-0">
              <legend className={label}>{t.day}</legend>
              <DayCalendar
                days={days}
                selected={dayIndex}
                onSelect={(i) => {
                  setDayIndex(i);
                  setTime(null);
                }}
              />
            </fieldset>

            <fieldset className="min-w-0">
              <legend className={label}>{t.time}</legend>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
                {seatingsFor(day).map((slot, i) => {
                  // The first seating is usually free at the belt, so it is never shown as full.
                  const taken = i > 0 && isTaken(key, slot, `bo${guests}`);
                  return (
                    <label key={slot} className={cn(choice, "rounded-xl px-3 py-3 text-center", taken && "pointer-events-none opacity-35")}>
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
                      <span className="block text-xs opacity-75">{taken ? t.slot.taken : i === 0 ? t.slot.plenty : t.slot.free}</span>
                    </label>
                  );
                })}
              </div>
              {errors.time && <p role="alert" className="mt-3 text-sm text-[#ff8f7a]">{errors.time}</p>}
            </fieldset>

            <fieldset className="min-w-0">
              <legend className={label}>{t.seat}</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
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
            <Field id="name" text={t.fields.name} value={name} error={errors.name} autoComplete="name" onChange={setName} />
            <Field id="phone" text={t.fields.phone} value={phone} error={errors.phone} type="tel" autoComplete="tel" onChange={setPhone} />
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button type="submit" className="rounded-full bg-[var(--bo-sprout)] px-8 py-4 font-medium text-[var(--bo-ink)] hover:bg-white hover:text-[var(--bo-ink)]">
            {step === 0 ? t.next : t.submit}
          </button>
          {step === 1 && (
            <button type="button" onClick={() => setStep(0)} className="text-sm text-[var(--bo-cream)]/70 hover:text-white">
              {t.back}
            </button>
          )}
        </div>
        <p className="mt-6 text-xs text-[var(--bo-cream)]/50">{bo.notice}</p>
      </div>

      <aside aria-label={t.summary} className="lg:col-span-4">
        <div className="rounded-2xl bg-white/[0.06] p-7 lg:sticky lg:top-6">
          <p className={label}>{t.summary}</p>
          <dl className="mt-6 space-y-4">
            <Row term={t.summaryRows.day} value={longDate.format(day)} />
            <Row term={t.summaryRows.time} value={time ? `${time}${t.timeSuffix} · 90 min` : "–"} />
            <Row term={t.summaryRows.guests} value={String(guests)} />
            <Row term={t.summaryRows.seat} value={seats.find((s) => s.id === seat)?.short ?? "–"} />
          </dl>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs text-[var(--bo-cream)]/55">{t.summaryRows.price}</p>
            <p className="mt-1 text-3xl" style={serif}>
              {money.format(bo.price * guests)}
            </p>
            <p className="mt-1 text-xs text-[var(--bo-cream)]/55">
              {guests} × {money.format(bo.price)} · {t.priceNote}
            </p>
          </div>
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


/** Month grid (Monday first). Only the bookable `days` can be picked; arrows switch between their months. */
function DayCalendar({ days, selected, onSelect }: { days: Date[]; selected: number; onSelect: (index: number) => void }) {
  const bo = useBo();
  const t = bo.booking;
  const { long: longDate, month: monthTitle } = dates(bo);
  const weekdayNames = t.weekdays;
  const months = Array.from(new Set(days.map((d) => `${d.getFullYear()}-${d.getMonth()}`))).map((k) => {
    const [y, m] = k.split("-").map(Number);
    return new Date(y, m, 1, 12);
  });
  const [monthIndex, setMonthIndex] = useState(0);
  const month = months[monthIndex];
  const bookable = new Map(days.map((d, i) => [dayKey(d), i]));
  const leading = (month.getDay() + 6) % 7;
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1, 12));
  const arrow = "grid size-10 place-items-center rounded-full border border-white/20 hover:border-white/60 disabled:pointer-events-none disabled:opacity-25";

  return (
    <div className="mt-3 max-w-md rounded-2xl border border-white/10 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <button type="button" aria-label={t.prevMonth} disabled={monthIndex === 0} onClick={() => setMonthIndex(monthIndex - 1)} className={arrow}>
          ←
        </button>
        <p className="text-lg capitalize" style={serif} aria-live="polite">
          {monthTitle.format(month)}
        </p>
        <button type="button" aria-label={t.nextMonth} disabled={monthIndex === months.length - 1} onClick={() => setMonthIndex(monthIndex + 1)} className={arrow}>
          →
        </button>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {weekdayNames.map((name) => (
          <span key={name} aria-hidden className="pb-2 text-xs text-[var(--bo-cream)]/50">
            {name}
          </span>
        ))}
        {Array.from({ length: leading }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {cells.map((d) => {
          const index = bookable.get(dayKey(d));
          if (index === undefined) {
            return (
              <span key={dayKey(d)} aria-hidden className="grid aspect-square place-items-center text-sm text-[var(--bo-cream)]/25 tabular-nums">
                {d.getDate()}
              </span>
            );
          }
          return (
            <label key={dayKey(d)} className={cn(choice, "grid aspect-square place-items-center rounded-full border-transparent text-sm tabular-nums")}>
              <input type="radio" name="day" aria-label={longDate.format(d)} checked={index === selected} onChange={() => onSelect(index)} className="sr-only" />
              {d.getDate()}
            </label>
          );
        })}
      </div>
    </div>
  );
}
