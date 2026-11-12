"use client";

import { useRef, useState } from "react";
import { useFerrum } from "./useFerrum";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
type Field = "name" | "email" | "message";

const inputClass =
  "mt-2 w-full border border-ferrum-line bg-ferrum-ink px-4 py-3 text-base text-ferrum-text focus:border-ferrum-accent focus:outline-none aria-invalid:border-ferrum-accent";

/** Demo-only question form: validates in the browser and never sends anything. */
export function QuestionForm() {
  const ferrum = useFerrum();
  const t = ferrum.contact.form;
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const statusRef = useRef<HTMLParagraphElement>(null);

  if (sent) {
    return (
      <div className="border border-ferrum-line bg-ferrum-surface p-8">
        <p ref={statusRef} role="status" className="text-lg">
          {t.success}
        </p>
        <p className="mt-4 text-sm text-ferrum-muted">{ferrum.demoNotice}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const value = (key: Field) => String(data.get(key) ?? "").trim();
        const next: Partial<Record<Field, string>> = {};
        if (!value("name")) next.name = t.required;
        if (!value("email")) next.email = t.required;
        else if (!emailPattern.test(value("email"))) next.email = t.email_invalid;
        if (!value("message")) next.message = t.required;
        setErrors(next);
        if (Object.keys(next).length === 0) setSent(true);
      }}
      className="grid gap-6 border border-ferrum-line bg-ferrum-surface p-6 sm:p-8"
    >
      <h2 className="font-ferrum text-3xl font-bold uppercase">{t.title}</h2>
      {(["name", "email", "message"] as const).map((key) => {
        const label = t[key];
        const error = errors[key];
        const shared = {
          id: `question-${key}`,
          name: key,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? `question-${key}-error` : undefined,
          className: inputClass,
        };
        return (
          <div key={key}>
            <label htmlFor={shared.id} className="text-sm font-medium">
              {label}
            </label>
            {key === "message" ? (
              <textarea rows={4} {...shared} />
            ) : (
              <input type={key === "email" ? "email" : "text"} autoComplete={key} {...shared} />
            )}
            {error && (
              <p id={`question-${key}-error`} className="mt-2 text-sm text-ferrum-accent">
                {error}
              </p>
            )}
          </div>
        );
      })}
      <div>
        <button
          type="submit"
          className="bg-ferrum-accent px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
        >
          {t.submit}
        </button>
        <p className="mt-4 text-xs text-ferrum-muted">{ferrum.demoNotice}</p>
      </div>
    </form>
  );
}
