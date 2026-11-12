"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { DemoPrice } from "@/components/demos/DemoCurrency";
import type { Locale } from "@/i18n/config";
import type { FerrumServiceId } from "@/demos/ferrum/content";
import { dateFormats, dayKey, hoursToSlots, isTaken, upcomingDays } from "@/demos/shared/schedule";
import { cn } from "@/lib/cn";
import { useFerrum } from "./useFerrum";

type Details = { name: string; phone: string; email: string; plate: string; message: string };
type DetailErrors = Partial<Record<keyof Details, string>>;

const emptyDetails: Details = { name: "", phone: "", email: "", plate: "", message: "" };
const phonePattern = /^[0-9 +()-]{7,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const platePattern = /^[A-ZÅÄÖ]{3}\s?\d{2}[A-Z0-9]$/i;

/** Workshop hours: shorter on Saturdays. */
function slotsFor(day: Date, locale: Locale): string[] {
  return hoursToSlots(day.getDay() === 6 ? [9, 10, 11, 12] : [7, 8, 9, 10, 11, 13, 14, 15, 16], locale);
}

/** Language-dependent pieces every step needs. */
function useBookingText() {
  const ferrum = useFerrum();
  const formats = dateFormats(ferrum.locale);
  return { ferrum, t: ferrum.booking, services: ferrum.services.items, dateFormat: formats.short, longDateFormat: formats.long };
}

export function BookingFlow() {
  const { ferrum, t, services, dateFormat, longDateFormat } = useBookingText();
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<FerrumServiceId | null>(null);
  const [slot, setSlot] = useState<{ day: Date; time: string } | null>(null);
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [errors, setErrors] = useState<DetailErrors>({});
  const [stepError, setStepError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const service = services.find((s) => s.id === serviceId) ?? null;

  // Move focus to the new step's heading, but not on first load.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, done]);

  const goTo = (next: number) => {
    setStepError(null);
    setStep(next);
  };

  const advance = () => {
    if (step === 0 && !service) return setStepError(t.errors.service);
    if (step === 1 && !slot) return setStepError(t.errors.slot);
    if (step === 2) {
      const next: DetailErrors = {};
      if (!details.name.trim()) next.name = t.errors.required;
      if (!phonePattern.test(details.phone.trim())) next.phone = details.phone.trim() ? t.errors.phone : t.errors.required;
      if (details.email.trim() && !emailPattern.test(details.email.trim())) next.email = t.errors.email;
      if (!platePattern.test(details.plate.trim())) next.plate = t.errors.plate;
      setErrors(next);
      if (Object.keys(next).length > 0) return;
    }
    if (step === 3) return setDone(true);
    goTo(step + 1);
  };

  const reset = () => {
    setServiceId(null);
    setSlot(null);
    setDetails(emptyDetails);
    setErrors({});
    setDone(false);
    goTo(0);
  };

  if (done && service && slot) {
    return (
      <div role="status" className="border border-ferrum-line bg-ferrum-surface p-8 sm:p-12">
        <span aria-hidden className="grid size-12 place-items-center bg-ferrum-accent font-ferrum text-2xl font-bold text-ferrum-ink">
          ✓
        </span>
        <h2 ref={headingRef} tabIndex={-1} className="mt-8 font-ferrum text-5xl leading-none font-bold uppercase outline-none">
          {t.success.title}
        </h2>
        <p className="mt-6 text-lg">
          {service.title} · {longDateFormat.format(slot.day)} {ferrum.ui.at} {slot.time}
        </p>
        <p className="mt-4 max-w-lg text-ferrum-muted">{t.success.body}</p>
        <p className="mt-8 border-l-2 border-ferrum-accent pl-4 text-sm text-ferrum-text/80">{ferrum.demoNotice}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-10 border border-ferrum-text/25 px-6 py-3 font-ferrum text-lg font-bold tracking-wide uppercase transition-colors hover:border-ferrum-text"
        >
          {t.success.again}
        </button>
      </div>
    );
  }

  const headings = [t.chooseService, t.chooseTime, t.yourDetails, t.review];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      {/* min-w-0 lets the horizontally scrolling day list scroll instead of widening the grid. */}
      <div className="min-w-0 lg:col-span-8">
        <ol className="grid grid-cols-4 gap-2" aria-label={t.page.eyebrow}>
          {t.steps.map((label, i) => (
            <li
              key={label}
              aria-current={i === step ? "step" : undefined}
              className={cn(
                "border-t-4 pt-3 text-xs font-semibold tracking-[0.15em] uppercase",
                i < step && "border-ferrum-accent text-ferrum-text",
                i === step && "border-ferrum-accent text-ferrum-accent",
                i > step && "border-ferrum-line text-ferrum-muted",
              )}
            >
              <span className="sr-only">
                {t.stepLabel} {i + 1}:{" "}
              </span>
              <span className="hidden sm:inline">{i + 1}. </span>
              {label}
            </li>
          ))}
        </ol>

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            advance();
          }}
          className="mt-10"
        >
          <h2 ref={headingRef} tabIndex={-1} className="font-ferrum text-4xl font-bold uppercase outline-none sm:text-5xl">
            {headings[step]}
          </h2>

          {stepError && (
            <p role="alert" className="mt-4 border-l-2 border-ferrum-accent pl-4 text-sm text-ferrum-accent">
              {stepError}
            </p>
          )}

          <div className="mt-8">
            {step === 0 && <ServiceStep selected={serviceId} onSelect={(id) => { setServiceId(id); setStepError(null); }} />}
            {step === 1 && <TimeStep selected={slot} onSelect={(value) => { setSlot(value); setStepError(null); }} />}
            {step === 2 && <DetailsStep details={details} errors={errors} onChange={setDetails} />}
            {step === 3 && service && slot && (
              <ReviewStep service={service.title} slot={slot} details={details} onEdit={goTo} />
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-ferrum-accent px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
            >
              {step === 3 ? t.confirm : t.next} <span aria-hidden>→</span>
            </button>
            {step > 0 && (
              <button
                type="button"
                onClick={() => goTo(step - 1)}
                className="px-4 py-4 font-ferrum text-lg font-bold tracking-wide text-ferrum-muted uppercase hover:text-ferrum-text"
              >
                ← {t.back}
              </button>
            )}
          </div>
          <p className="mt-8 text-xs text-ferrum-muted">{ferrum.demoNotice}</p>
        </form>
      </div>

      <aside aria-label={t.summary} className="lg:col-span-4">
        <div className="border border-ferrum-line bg-ferrum-surface p-6 sm:p-8 lg:sticky lg:top-28">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase">{t.summary}</h2>
          <dl className="mt-6 space-y-5">
            <SummaryRow label={t.steps[0]}>{service ? service.title : "–"}</SummaryRow>
            <SummaryRow label={t.steps[1]}>{slot ? `${dateFormat.format(slot.day)} ${ferrum.ui.at} ${slot.time}` : "–"}</SummaryRow>
          </dl>
          {service && (
            <p className="mt-6 border-t border-ferrum-line pt-6">
              <span className="text-sm text-ferrum-muted">{t.from} </span>
              <span className="font-ferrum text-4xl font-bold"><DemoPrice sek={service.from} /></span>
              <span className="block text-xs text-ferrum-muted">{service.duration}</span>
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}

function SummaryRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-xs text-ferrum-muted">{label}</dt>
      <dd className="mt-1 font-ferrum text-2xl font-bold uppercase">{children}</dd>
    </div>
  );
}

// relative: keeps the visually hidden (absolute) radio inside its label, so it can't widen the page.
const choiceClass =
  "relative cursor-pointer border border-ferrum-line bg-ferrum-ink transition-colors hover:border-ferrum-muted has-checked:border-ferrum-accent has-checked:bg-ferrum-surface has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ferrum-accent";

function ServiceStep({ selected, onSelect }: { selected: FerrumServiceId | null; onSelect: (id: FerrumServiceId) => void }) {
  const { t, services } = useBookingText();
  return (
    <fieldset>
      <legend className="sr-only">{t.chooseService}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {services.map((item) => (
          <label key={item.id} className={cn(choiceClass, "flex flex-col p-5")}>
            <input
              type="radio"
              name="service"
              value={item.id}
              checked={selected === item.id}
              onChange={() => onSelect(item.id)}
              className="sr-only"
            />
            <span className="flex items-baseline justify-between gap-4">
              <span className="font-ferrum text-2xl font-bold uppercase">{item.title}</span>
              <span className="text-sm whitespace-nowrap">
                <span className="text-ferrum-muted">{t.from} </span>
                <span className="font-semibold"><DemoPrice sek={item.from} /></span>
              </span>
            </span>
            <span className="mt-2 text-sm text-ferrum-muted">{item.description}</span>
            <span className="mt-3 text-xs text-ferrum-muted">{item.duration}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function TimeStep({
  selected,
  onSelect,
}: {
  selected: { day: Date; time: string } | null;
  onSelect: (value: { day: Date; time: string }) => void;
}) {
  const { ferrum, t, dateFormat } = useBookingText();
  const days = useMemo(() => upcomingDays(), []);
  const [activeDay, setActiveDay] = useState(() =>
    selected ? days.findIndex((d) => dayKey(d) === dayKey(selected.day)) : 0,
  );
  const day = days[Math.max(activeDay, 0)];
  const key = dayKey(day);
  const slots = slotsFor(day, ferrum.locale);

  return (
    <div>
      {/* Fieldsets default to min-width: min-content; min-w-0 lets the day list scroll instead. */}
      <fieldset className="min-w-0">
        <legend className="text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase">{ferrum.ui.day}</legend>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-3 [scrollbar-color:var(--color-ferrum-line)_transparent] [scrollbar-width:thin]">
          {days.map((d, i) => (
            <label key={dayKey(d)} className={cn(choiceClass, "shrink-0 px-4 py-3 text-center")}>
              <input
                type="radio"
                name="day"
                checked={i === activeDay}
                onChange={() => setActiveDay(i)}
                className="sr-only"
              />
              <span className="block text-sm capitalize">{dateFormat.format(d)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase">{ferrum.ui.time}</legend>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {slots.map((time) => {
            const taken = isTaken(key, time);
            const checked = !!selected && dayKey(selected.day) === key && selected.time === time;
            return (
              <label
                key={time}
                className={cn(choiceClass, "px-3 py-3 text-center", taken && "pointer-events-none opacity-35")}
              >
                <input
                  type="radio"
                  name="time"
                  value={time}
                  disabled={taken}
                  checked={checked}
                  onChange={() => onSelect({ day, time })}
                  className="sr-only"
                />
                <span className="font-ferrum text-xl font-bold tabular-nums">{time}</span>
                {taken && <span className="block text-[0.6875rem] text-ferrum-muted">{t.taken}</span>}
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}

const inputClass =
  "mt-2 w-full border border-ferrum-line bg-ferrum-ink px-4 py-3 text-base text-ferrum-text placeholder:text-ferrum-muted/60 focus:border-ferrum-accent focus:outline-none aria-invalid:border-ferrum-accent";

function DetailsStep({
  details,
  errors,
  onChange,
}: {
  details: Details;
  errors: DetailErrors;
  onChange: (details: Details) => void;
}) {
  const { t } = useBookingText();
  const field = (key: keyof Details, label: string, props: Record<string, string | number | boolean> = {}, optional = false) => (
    <div className={key === "message" ? "sm:col-span-2" : undefined}>
      <label htmlFor={`booking-${key}`} className="flex justify-between text-sm font-medium">
        {label}
        {optional && <span className="text-xs font-normal text-ferrum-muted">{t.fields.optional}</span>}
      </label>
      {key === "message" ? (
        <textarea
          id={`booking-${key}`}
          rows={3}
          value={details[key]}
          onChange={(e) => onChange({ ...details, [key]: e.target.value })}
          className={inputClass}
        />
      ) : (
        <input
          id={`booking-${key}`}
          value={details[key]}
          onChange={(e) => onChange({ ...details, [key]: e.target.value })}
          aria-invalid={errors[key] ? true : undefined}
          aria-describedby={errors[key] ? `booking-${key}-error` : undefined}
          className={inputClass}
          {...props}
        />
      )}
      {errors[key] && (
        <p id={`booking-${key}-error`} className="mt-2 text-sm text-ferrum-accent">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {field("name", t.fields.name, { autoComplete: "name" })}
      {field("phone", t.fields.phone, { type: "tel", autoComplete: "tel" })}
      {field("email", t.fields.email, { type: "email", autoComplete: "email" }, true)}
      {field("plate", t.fields.plate, { placeholder: t.fields.platePlaceholder, autoCapitalize: "characters" })}
      {field("message", t.fields.message, {}, true)}
    </div>
  );
}

function ReviewStep({
  service,
  slot,
  details,
  onEdit,
}: {
  service: string;
  slot: { day: Date; time: string };
  details: Details;
  onEdit: (step: number) => void;
}) {
  const { ferrum, t, longDateFormat } = useBookingText();
  const rows: Array<{ label: string; value: string; step: number }> = [
    { label: t.steps[0], value: service, step: 0 },
    { label: t.steps[1], value: `${longDateFormat.format(slot.day)} ${ferrum.ui.at} ${slot.time}`, step: 1 },
    { label: t.fields.name, value: details.name, step: 2 },
    { label: t.fields.phone, value: details.phone, step: 2 },
    { label: t.fields.plate, value: details.plate.toUpperCase(), step: 2 },
  ];
  if (details.email) rows.push({ label: t.fields.email, value: details.email, step: 2 });
  if (details.message) rows.push({ label: t.fields.message, value: details.message, step: 2 });

  return (
    <dl className="divide-y divide-ferrum-line border-y border-ferrum-line">
      {rows.map((row) => (
        <div key={row.label} className="flex items-start justify-between gap-6 py-4">
          <div>
            <dt className="text-xs text-ferrum-muted">{row.label}</dt>
            <dd className="mt-1 text-[0.9375rem] first-letter:uppercase">{row.value}</dd>
          </div>
          <button
            type="button"
            onClick={() => onEdit(row.step)}
            className="text-sm text-ferrum-muted underline underline-offset-4 hover:text-ferrum-accent"
          >
            {t.edit}
            <span className="sr-only"> {row.label}</span>
          </button>
        </div>
      ))}
    </dl>
  );
}
