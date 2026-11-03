import sv from "@/i18n/dictionaries/sv";

export type Enquiry = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  locale: string;
};

export type DeliveryResult = { ok: true } | { ok: false; reason: "not-configured" | "failed" };

const labels = sv.contact.form;

/** Plain-text email body for the studio, always in Swedish. */
function formatEnquiry(e: Enquiry): string {
  const projectType = labels.projectTypes[e.projectType as keyof typeof labels.projectTypes] ?? "–";
  const budget = labels.budgets[e.budget as keyof typeof labels.budgets] ?? "–";

  return [
    `${labels.name}: ${e.name}`,
    `${labels.email}: ${e.email}`,
    `${labels.company}: ${e.company || "–"}`,
    `${labels.phone}: ${e.phone || "–"}`,
    `${labels.projectType} ${projectType}`,
    `${labels.budget}: ${budget}`,
    `Språk på sajten: ${e.locale}`,
    "",
    e.message,
  ].join("\n");
}

/**
 * Delivers an enquiry to the studio inbox via Resend's HTTP API (no SDK needed).
 * To switch provider, replace the request below; the rest of the app only sees DeliveryResult.
 */
export async function sendEnquiry(enquiry: Enquiry): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured – enquiry logged instead:\n" + formatEnquiry(enquiry));
      return { ok: true };
    }
    console.error("[contact] RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing.");
    return { ok: false, reason: "not-configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: enquiry.email,
        subject: `Ny förfrågan från ${enquiry.name}${enquiry.company ? ` (${enquiry.company})` : ""}`,
        text: formatEnquiry(enquiry),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`[contact] Resend responded ${response.status}: ${await response.text()}`);
      return { ok: false, reason: "failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("[contact] Could not reach Resend:", error);
    return { ok: false, reason: "failed" };
  }
}
