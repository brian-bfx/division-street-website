import { Resend } from "resend";
import { site } from "@/content/site";
import type { ContactInput, SignupInput } from "@/lib/validation";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function getLeadEmail(): string | null {
  return process.env.LEAD_NOTIFICATION_EMAIL ?? null;
}

function getFromEmail(): string {
  return (
    process.env.RESEND_FROM_EMAIL ??
    `${site.name} <onboarding@resend.dev>`
  );
}

function getSiteHostname(): string {
  try {
    return new URL(site.url).hostname;
  } catch {
    return site.url;
  }
}

export async function sendSignupEmail(
  data: SignupInput
): Promise<{ ok: true } | { ok: false }> {
  const resend = getResend();
  const to = getLeadEmail();

  if (!resend || !to) {
    console.error("Missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL");
    return { ok: false };
  }

  const messageBlock = data.message
    ? `\n\nMessage:\n${data.message}`
    : "";

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: [to],
    replyTo: data.email,
    subject: `New sign-up: ${data.businessName}`,
    text: [
      `New sign-up lead from ${getSiteHostname()}`,
      "",
      `Business: ${data.businessName}`,
      `Contact: ${data.contactName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Business type: ${data.businessType}`,
      `Plan interested in: ${data.plan}`,
      messageBlock,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend signup error:", error.message);
    return { ok: false };
  }

  return { ok: true };
}

export async function sendContactEmail(
  data: ContactInput
): Promise<{ ok: true } | { ok: false }> {
  const resend = getResend();
  const to = getLeadEmail();

  if (!resend || !to) {
    console.error("Missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL");
    return { ok: false };
  }

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: [to],
    replyTo: data.email,
    subject: `Contact form: ${data.name}`,
    text: [
      `New contact form message from ${getSiteHostname()}`,
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend contact error:", error.message);
    return { ok: false };
  }

  return { ok: true };
}
