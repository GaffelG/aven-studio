"use server";

export type ContactField = "name" | "email" | "message" | "consent";
export type ContactError = "required" | "email" | "consent";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: Partial<Record<ContactField, ContactError>>; values: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates a contact enquiry.
 * TODO: deliver the enquiry (email service or CRM) once one has been chosen.
 * Until then nothing is sent or stored.
 */
export async function submitEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();
  const values = {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    phone: get("phone"),
    projectType: get("projectType"),
    budget: get("budget"),
    message: get("message"),
  };

  const errors: Partial<Record<ContactField, ContactError>> = {};
  if (!values.name) errors.name = "required";
  if (!values.email) errors.email = "required";
  else if (!emailPattern.test(values.email)) errors.email = "email";
  if (!values.message) errors.message = "required";
  if (formData.get("consent") !== "on") errors.consent = "consent";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  return { status: "success" };
}
