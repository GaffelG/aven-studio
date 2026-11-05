"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { formatPrice } from "@/content/pricing";
import { allTreatments, sora } from "@/demos/sora/content";
import { dayKey, hoursToSlots, isTaken, longDate, shortDate, upcomingDays, type Slot } from "@/demos/shared/schedule";
import { cn } from "@/lib/cn";

const t = sora.booking;
type StylistOption = { id: string; name: string; role: string; focus?: string };
const stylistOptions: StylistOption[] = [sora.stylists.noPreference, ...sora.stylists.items];
const phonePattern = /^[0-9 +()-]{7,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Details = { name: string; phone: string; email: string; message: string };
type DetailErrors = Partial<Record<keyof Details, string>>;
const emptyDetails: Details = { name: "", phone: "", email: "", message: "" };

/** Salon hours: closed Sunday–Monday, shorter Saturdays. */
const slotsFor = (day: Date) => hoursToSlots(day.getDay() === 6 ? [10, 11, 12, 13, 14, 15] : [10, 11, 12, 13, 14, 15, 16, 17, 18]);

const choice =
  "relative cursor-pointer border border-sora-line bg-sora-shell transition-colors hover:border-sora-clay has-checked:border-sora-espresso has-checked:bg-sora-espresso has-checked:text-sora-shell has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-sora-clay-deep";

export function SoraBooking() {
  const [step, setStep] = useState(0);
  const [treatmentId, setTreatmentId] = useState<string | null>(null);
  const [stylistId, setStylistId] = useState<string | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [errors, setErrors] = useState<DetailErrors>({});
  const [stepError, setStepError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const treatment = allTreatments.find((x) => x.id === treatmentId) ?? null;
  const stylist = stylistOptions.find((x) => x.id === stylistId) ?? null;

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
    if (step === 0 && !treatment) return setStepError(t.errors.treatment);
    if (step === 1 && !stylist) return setStepError(t.errors.stylist);
    if (step === 2 && !slot) return setStepError(t.errors.slot);
    if (step === 3) {
      const next: DetailErrors = {};
      if (!details.name.trim()) next.name = t.errors.required;
      if (!phonePattern.test(details.phone.trim())) next.phone = details.phone.trim() ? t.errors.phone : t.errors.required;
      if (details.email.trim() && !emailPattern.test(details.email.trim())) next.email = t.errors.email;
      setErrors(next);
      if (Object.keys(next).length === 0) setDone(true);
      return;
    }
    goTo(step + 1);
  };

  const reset = () => {
    setTreatmentId(null);
    setStylistId(null);
    setSlot(null);
    setDetails(emptyDetails);
    setErrors({});
    setDone(false);
    goTo(0);
  };

  if (done && treatment && stylist && slot) {
    return (
      <div role="status" className="mx-auto max-w-2xl bg-sora-shell px-8 py-14 text-center sm:px-14">
        <p className="font-sora text-xs tracking-[0.3em] text-sora-clay-deep uppercase">Bokningsbekräftelse</p>
        <h2 ref={headingRef} tabIndex={-1} className="mt-6 font-sora-serif text-5xl italic outline-none sm:text-6xl">
          {t.success.title}
        </h2>
        <p className="mt-6 text-lg">
          {treatment.name}
          <br />
          <span className="first-letter:uppercase">{longDate.format(slot.day)}</span> kl. {slot.time}
          {stylist.id !== "any" && <> hos {stylist.name}</>}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sora-muted">{t.success.body}</p>
        <p className="mx-auto mt-8 max-w-md border-t border-sora-line pt-6 text-sm text-sora-muted">{sora.demoNotice}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full border border-sora-espresso/30 px-6 py-3 font-sora text-sm tracking-[0.12em] uppercase hover:border-sora-espresso"
        >
          {t.success.again}
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-8">
        <ol className="grid grid-cols-4 gap-3" aria-label={t.eyebrow}>
          {t.steps.map((label, i) => (
            <li
              key={label}
              aria-current={i === step ? "step" : undefined}
              className={cn(
                "border-t pt-3 font-sora text-[0.6875rem] tracking-[0.18em] uppercase",
                i <= step ? "border-sora-espresso text-sora-espresso" : "border-sora-line text-sora-muted",
              )}
            >
              <span className="sr-only">
                {t.stepLabel} {i + 1}:{" "}
              </span>
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
          className="mt-12"
        >
          <h2 ref={headingRef} tabIndex={-1} className="font-sora-serif text-4xl italic outline-none sm:text-5xl">
            {t.headings[step]}
          </h2>
          {stepError && (
            <p role="alert" className="mt-4 text-sm text-error">
              {stepError}
            </p>
          )}

          <div className="mt-8">
            {step === 0 && (
              <div className="space-y-10">
                {sora.treatments.categories.map((category) => (
                  <fieldset key={category.id} className="min-w-0">
                    <legend className="font-sora text-xs tracking-[0.28em] text-sora-clay-deep uppercase">{category.title}</legend>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {category.items.map((item) => (
                        <label key={item.id} className={cn(choice, "flex items-baseline justify-between gap-4 px-5 py-4")}>
                          <input
                            type="radio"
                            name="treatment"
                            value={item.id}
                            checked={treatmentId === item.id}
                            onChange={() => {
                              setTreatmentId(item.id);
                              setStepError(null);
                            }}
                            className="sr-only"
                          />
                          <span>
                            <span className="block text-[0.9375rem]">{item.name}</span>
                            <span className="block text-xs opacity-70">
                              {item.minutes} {sora.treatments.minutesLabel}
                            </span>
                          </span>
                          <span className="text-sm whitespace-nowrap">
                            {item.from && <span className="opacity-70">{sora.treatments.fromLabel} </span>}
                            {formatPrice(item.price, "sv")}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
            )}

            {step === 1 && (
              <fieldset className="min-w-0">
                <legend className="sr-only">{t.headings[1]}</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stylistOptions.map((option) => (
                    <label key={option.id} className={cn(choice, "flex items-center gap-4 px-5 py-5")}>
                      <input
                        type="radio"
                        name="stylist"
                        value={option.id}
                        checked={stylistId === option.id}
                        onChange={() => {
                          setStylistId(option.id);
                          setSlot(null);
                          setStepError(null);
                        }}
                        className="sr-only"
                      />
                      <span
                        aria-hidden
                        className="grid size-12 shrink-0 place-items-center rounded-full bg-sora-blush font-sora-serif text-xl text-sora-espresso italic"
                      >
                        {option.id === "any" ? "✦" : option.name[0]}
                      </span>
                      <span>
                        <span className="block font-sora-serif text-2xl">{option.name}</span>
                        <span className="block text-sm opacity-70">{option.focus ?? option.role}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && stylist && (
              <TimeStep stylistId={stylist.id} selected={slot} onSelect={(value) => { setSlot(value); setStepError(null); }} />
            )}

            {step === 3 && (
              <div className="grid gap-6 sm:grid-cols-2">
                <Input id="name" label={t.fields.name} value={details.name} error={errors.name} autoComplete="name" onChange={(v) => setDetails({ ...details, name: v })} />
                <Input id="phone" label={t.fields.phone} value={details.phone} error={errors.phone} type="tel" autoComplete="tel" onChange={(v) => setDetails({ ...details, phone: v })} />
                <Input id="email" label={t.fields.email} value={details.email} error={errors.email} type="email" autoComplete="email" optional onChange={(v) => setDetails({ ...details, email: v })} className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="sora-message" className="flex justify-between text-sm">
                    {t.fields.message}
                    <span className="text-xs text-sora-muted">{t.fields.optional}</span>
                  </label>
                  <textarea
                    id="sora-message"
                    rows={3}
                    value={details.message}
                    onChange={(e) => setDetails({ ...details, message: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-sora-espresso px-8 py-4 font-sora text-sm tracking-[0.12em] text-sora-shell uppercase transition-colors hover:bg-sora-clay-deep"
            >
              {step === 3 ? t.confirm : t.next}
            </button>
            {step > 0 && (
              <button type="button" onClick={() => goTo(step - 1)} className="font-sora text-sm tracking-[0.12em] text-sora-muted uppercase hover:text-sora-espresso">
                ← {t.back}
              </button>
            )}
          </div>
          <p className="mt-8 text-xs text-sora-muted">{sora.demoNotice}</p>
        </form>
      </div>

      <aside aria-label={t.summary} className="lg:col-span-4">
        <div className="bg-sora-shell p-7 lg:sticky lg:top-28">
          <h2 className="font-sora text-xs tracking-[0.28em] text-sora-clay-deep uppercase">{t.summary}</h2>
          <dl className="mt-6 space-y-5">
            <Row label={t.steps[0]}>{treatment?.name ?? "–"}</Row>
            <Row label={t.steps[1]}>{stylist?.name ?? "–"}</Row>
            <Row label={t.steps[2]}>{slot ? `${shortDate.format(slot.day)} kl. ${slot.time}` : "–"}</Row>
          </dl>
          {treatment && (
            <p className="mt-6 border-t border-sora-line pt-6">
              {treatment.from && <span className="text-sm text-sora-muted">{sora.treatments.fromLabel} </span>}
              <span className="font-sora-serif text-4xl">{formatPrice(treatment.price, "sv")}</span>
              <span className="block text-xs text-sora-muted">
                {treatment.minutes} {sora.treatments.minutesLabel}
              </span>
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-xs text-sora-muted">{label}</dt>
      <dd className="mt-1 font-sora-serif text-2xl first-letter:uppercase">{children}</dd>
    </div>
  );
}

function TimeStep({ stylistId, selected, onSelect }: { stylistId: string; selected: Slot | null; onSelect: (slot: Slot) => void }) {
  const days = useMemo(() => upcomingDays(10, [0, 1]), []);
  const [active, setActive] = useState(() => (selected ? Math.max(days.findIndex((d) => dayKey(d) === dayKey(selected.day)), 0) : 0));
  const day = days[active];
  const key = dayKey(day);

  return (
    <div>
      <fieldset className="min-w-0">
        <legend className="font-sora text-xs tracking-[0.28em] text-sora-clay-deep uppercase">{t.day}</legend>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-3 [scrollbar-color:var(--color-sora-line)_transparent] [scrollbar-width:thin]">
          {days.map((d, i) => (
            <label key={dayKey(d)} className={cn(choice, "shrink-0 rounded-full px-5 py-2.5 text-sm capitalize")}>
              <input type="radio" name="day" checked={i === active} onChange={() => setActive(i)} className="sr-only" />
              {shortDate.format(d)}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-8 min-w-0">
        <legend className="font-sora text-xs tracking-[0.28em] text-sora-clay-deep uppercase">{t.time}</legend>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {slotsFor(day).map((time) => {
            const taken = isTaken(key, time, stylistId);
            const checked = !!selected && dayKey(selected.day) === key && selected.time === time;
            return (
              <label key={time} className={cn(choice, "px-3 py-3 text-center", taken && "pointer-events-none opacity-40")}>
                <input type="radio" name="time" disabled={taken} checked={checked} onChange={() => onSelect({ day, time })} className="sr-only" />
                <span className="text-[0.9375rem] tabular-nums">{time}</span>
                {taken && <span className="block text-[0.6875rem]">{t.taken}</span>}
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}

const inputClass =
  "mt-2 w-full border border-sora-line bg-sora-shell px-4 py-3 text-base text-sora-espresso focus:border-sora-clay-deep focus:outline-none aria-invalid:border-error";

type InputProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
  className?: string;
  onChange: (value: string) => void;
};

function Input({ id, label, value, error, type = "text", autoComplete, optional, className, onChange }: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={`sora-${id}`} className="flex justify-between text-sm">
        {label}
        {optional && <span className="text-xs text-sora-muted">{t.fields.optional}</span>}
      </label>
      <input
        id={`sora-${id}`}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `sora-${id}-error` : undefined}
        className={inputClass}
      />
      {error && (
        <p id={`sora-${id}-error`} className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
