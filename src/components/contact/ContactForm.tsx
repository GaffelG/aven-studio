"use client";

import { cloneElement, useActionState, useEffect, useRef, useState, type ReactElement } from "react";
import { submitEnquiry, type ContactField, type ContactState } from "@/app/[lang]/contact/actions";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";

type Labels = Dictionary["contact"]["form"];

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base text-ink transition-colors duration-300 placeholder:text-silver-deep focus:border-ink focus:ring-0 focus:outline-none aria-invalid:border-error";

export function ContactForm({ labels }: { labels: Labels }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  // Remounts the form after "send another", clearing the previous values.
  const [formKey, setFormKey] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);

  const showSuccess = state.status === "success" && !dismissed;
  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};

  useEffect(() => {
    if (showSuccess) successRef.current?.focus();
    else if (state.status === "error") summaryRef.current?.focus();
  }, [state, showSuccess]);

  if (showSuccess) {
    return (
      <div role="status" className="rounded-md bg-ink p-8 text-paper sm:p-12">
        <span aria-hidden className="grid size-10 place-items-center rounded-full bg-sage text-ink">
          ✓
        </span>
        <h2 ref={successRef} tabIndex={-1} className="mt-8 text-display-md outline-none">
          {labels.success.title}
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-paper/70">{labels.success.body}</p>
        <Button
          variant="inverse"
          size="sm"
          className="mt-10"
          onClick={() => {
            setDismissed(true);
            setFormKey((k) => k + 1);
          }}
        >
          {labels.success.again}
        </Button>
      </div>
    );
  }

  const errorText = (field: ContactField) => {
    const code = errors[field];
    return code ? labels.errors[code] : undefined;
  };

  return (
    <form
      key={formKey}
      action={(data) => {
        setDismissed(false);
        return formAction(data);
      }}
      noValidate
      className="grid gap-8 sm:grid-cols-2 sm:gap-x-8"
    >
      {state.status === "error" && (
        <p
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-error pl-4 text-sm text-error outline-none sm:col-span-2"
        >
          {labels.errors.summary}
        </p>
      )}

      <Field id="name" label={labels.name} error={errorText("name")}>
        <input name="name" autoComplete="name" defaultValue={values.name} required />
      </Field>
      <Field id="email" label={labels.email} error={errorText("email")}>
        <input name="email" type="email" autoComplete="email" defaultValue={values.email} required />
      </Field>
      <Field id="company" label={labels.company} optional={labels.optional}>
        <input name="company" autoComplete="organization" defaultValue={values.company} />
      </Field>
      <Field id="phone" label={labels.phone} optional={labels.optional}>
        <input name="phone" type="tel" autoComplete="tel" defaultValue={values.phone} />
      </Field>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium">{labels.projectType}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(labels.projectTypes).map(([value, label]) => (
            <label
              key={value}
              className="cursor-pointer rounded-[3px] px-4 py-2.5 text-sm ring-1 ring-ink/15 transition-colors duration-300 hover:ring-ink/40 has-checked:bg-ink has-checked:text-paper has-checked:ring-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-sage-deep"
            >
              <input
                type="radio"
                name="projectType"
                value={value}
                defaultChecked={values.projectType === value}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="budget" label={labels.budget} optional={labels.optional} className="sm:col-span-2">
        <select name="budget" defaultValue={values.budget ?? ""} className="cursor-pointer">
          <option value="" disabled>
            {labels.budgetPlaceholder}
          </option>
          {Object.entries(labels.budgets).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label={labels.message} hint={labels.messageHint} error={errorText("message")} className="sm:col-span-2">
        <textarea name="message" rows={5} defaultValue={values.message} required className="resize-y" />
      </Field>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer gap-3 text-sm leading-relaxed text-ink/75">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 size-4 shrink-0 cursor-pointer accent-ink"
          />
          {labels.consent}
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 pl-7 text-sm text-error">
            {labels.errors.consent}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" arrow disabled={pending} aria-disabled={pending}>
          {pending ? labels.sending : labels.submit}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  optional?: string;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactElement<{ className?: string }>;
};

/** Label, control, hint and error wired together for assistive technology. */
function Field({ id, label, optional, hint, error, className, children }: FieldProps) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between gap-4 text-sm font-medium">
        {label}
        {optional && <span className="text-xs font-normal text-silver-deep">{optional}</span>}
      </label>
      {cloneElement(children, {
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
        className: cn(inputClass, children.props.className),
      } as Record<string, unknown>)}
      {hint && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-silver-deep">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
