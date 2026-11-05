"use client";

import { useRef, useState, type ReactNode } from "react";
import { bergsten } from "@/demos/bergsten/content";
import { cn } from "@/lib/cn";

const t = bergsten.quote;
const f = t.fields;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9 +()-]{7,}$/;

type Field = "type" | "location" | "description" | "name" | "phone" | "email";

const inputClass =
  "mt-2 w-full border border-bergsten-line bg-bergsten-paper px-4 py-3 text-base text-bergsten-ink focus:border-bergsten-green focus:outline-none aria-invalid:border-error";
const chipClass =
  "relative cursor-pointer border border-bergsten-line px-4 py-2.5 text-sm transition-colors hover:border-bergsten-ink has-checked:border-bergsten-green has-checked:bg-bergsten-green has-checked:text-bergsten-paper has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-bergsten-green";

/** Demo-only quote request: validated in the browser, never sent. */
export function QuoteForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (sent) {
    return (
      <div role="status" className="bg-bergsten-paper p-8 sm:p-12">
        <span aria-hidden className="grid size-11 place-items-center bg-bergsten-green text-bergsten-paper">
          ✓
        </span>
        <h2 className="mt-8 font-bergsten text-4xl font-semibold tracking-[-0.02em]">{t.success.title}</h2>
        <p className="mt-4 max-w-md leading-relaxed text-bergsten-muted">{t.success.body}</p>
        <p className="mt-6 border-l-2 border-bergsten-green pl-4 text-sm">{bergsten.demoNotice}</p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setErrors({});
          }}
          className="mt-8 border border-bergsten-ink/30 px-5 py-3 font-bergsten text-sm tracking-[0.08em] uppercase hover:border-bergsten-ink"
        >
          {t.success.again}
        </button>
      </div>
    );
  }

  const error = (field: Field) =>
    errors[field] && (
      <p id={`quote-${field}-error`} className="mt-2 text-sm text-error">
        {errors[field]}
      </p>
    );
  const aria = (field: Field) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `quote-${field}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const value = (key: string) => String(data.get(key) ?? "").trim();
        const next: Partial<Record<Field, string>> = {};
        if (!value("type")) next.type = t.errors.type;
        if (!value("location")) next.location = t.errors.required;
        if (!value("description")) next.description = t.errors.required;
        if (!value("name")) next.name = t.errors.required;
        if (!phonePattern.test(value("phone"))) next.phone = value("phone") ? t.errors.phone : t.errors.required;
        if (value("email") && !emailPattern.test(value("email"))) next.email = t.errors.email;
        setErrors(next);
        const first = (["type", "location", "description", "name", "phone", "email"] as const).find((key) => next[key]);
        if (!first) setSent(true);
        // Focus after React has rendered the error state.
        else setTimeout(() => formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus());
      }}
      className="grid gap-8 bg-bergsten-paper p-6 sm:grid-cols-2 sm:p-10"
    >
      <fieldset className="min-w-0 sm:col-span-2" data-invalid={errors.type ? "" : undefined} aria-describedby={errors.type ? "quote-type-error" : undefined}>
        <legend className="text-sm font-medium">{f.type}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {f.types.map((type) => (
            <label key={type} className={chipClass}>
              <input type="radio" name="type" value={type} className="sr-only" />
              {type}
            </label>
          ))}
        </div>
        {error("type")}
      </fieldset>

      <Labelled id="quote-location" label={f.location}>
        <input id="quote-location" name="location" autoComplete="address-level2" className={inputClass} {...aria("location")} />
        {error("location")}
      </Labelled>
      <Labelled id="quote-start" label={f.start}>
        <select id="quote-start" name="start" defaultValue={f.starts[0]} className={inputClass}>
          {f.starts.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Labelled>
      <Labelled id="quote-budget" label={f.budget} optional className="sm:col-span-2">
        <select id="quote-budget" name="budget" defaultValue="" className={inputClass}>
          <option value="">–</option>
          {f.budgets.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Labelled>
      <Labelled id="quote-description" label={f.description} className="sm:col-span-2">
        <textarea
          id="quote-description"
          name="description"
          rows={5}
          className={inputClass}
          {...aria("description")}
          aria-describedby={cn("quote-description-hint", errors.description && "quote-description-error")}
        />
        <p id="quote-description-hint" className="mt-2 text-xs text-bergsten-muted">
          {f.descriptionHint}
        </p>
        {error("description")}
      </Labelled>
      <Labelled id="quote-name" label={f.name}>
        <input id="quote-name" name="name" autoComplete="name" className={inputClass} {...aria("name")} />
        {error("name")}
      </Labelled>
      <Labelled id="quote-phone" label={f.phone}>
        <input id="quote-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} {...aria("phone")} />
        {error("phone")}
      </Labelled>
      <Labelled id="quote-email" label={f.email} optional className="sm:col-span-2">
        <input id="quote-email" name="email" type="email" autoComplete="email" className={inputClass} {...aria("email")} />
        {error("email")}
      </Labelled>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-bergsten-green px-7 py-4 font-bergsten text-sm font-medium tracking-[0.08em] text-bergsten-paper uppercase transition-colors hover:bg-bergsten-ink"
        >
          {f.submit} →
        </button>
        <p className="mt-4 text-xs text-bergsten-muted">{bergsten.demoNotice}</p>
      </div>
    </form>
  );
}

function Labelled({
  id,
  label,
  optional,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex justify-between text-sm font-medium">
        {label}
        {optional && <span className="text-xs font-normal text-bergsten-muted">{f.optional}</span>}
      </label>
      {children}
    </div>
  );
}
