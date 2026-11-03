"use server";

import { hasLocale } from "@/i18n/config";
import { sendEnquiry } from "@/lib/email/send-enquiry";
import { honeypotField } from "./form-fields";

export type ContactField = "name" | "email" | "message" | "consent";
export type ContactError = "required" | "email" | "consent" | "tooLong";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: Partial<Record<ContactField, ContactError>>; values: Record<string, string> }
  | { status: "failed"; values: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLength = { short: 200, message: 5000 };

/** Validates a contact enquiry and delivers it to the studio inbox. */
export async function submitEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (key: string, limit = maxLength.short) => String(formData.get(key) ?? "").trim().slice(0, limit + 1);
  const values = {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    phone: get("phone"),
    projectType: get("projectType"),
    budget: get("budget"),
    message: get("message", maxLength.message),
  };

  // Pretend success for bots so they get no signal to retry.
  if (get(honeypotField)) return { status: "success" };

  const errors: Partial<Record<ContactField, ContactError>> = {};
  if (!values.name) errors.name = "required";
  else if (values.name.length > maxLength.short) errors.name = "tooLong";
  if (!values.email) errors.email = "required";
  else if (values.email.length > maxLength.short || !emailPattern.test(values.email)) errors.email = "email";
  if (!values.message) errors.message = "required";
  else if (values.message.length > maxLength.message) errors.message = "tooLong";
  if (formData.get("consent") !== "on") errors.consent = "consent";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  const locale = String(formData.get("locale") ?? "");
  const result = await sendEnquiry({
    ...values,
    company: values.company.slice(0, maxLength.short),
    phone: values.phone.slice(0, maxLength.short),
    locale: hasLocale(locale) ? locale : "sv",
  });

  return result.ok ? { status: "success" } : { status: "failed", values };
}
