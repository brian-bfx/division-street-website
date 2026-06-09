"use client";

import { useState, type FormEvent } from "react";
import { contactPage } from "@/content/forms";
import { trackContactSuccess } from "@/lib/analytics";
import { FormField } from "./FormField";
import { HoneypotField } from "./HoneypotField";
import { SubmitButton } from "./SubmitButton";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  if (state === "success") {
    return (
      <div className="card text-center" role="status" aria-live="polite">
        <h2 className="font-display text-2xl font-bold text-navy">
          {contactPage.successTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy/70">
          {contactPage.successMessage}
        </p>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setFieldErrors({});
    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setFormError(data.error ?? contactPage.errorMessage);
        setState("error");
        return;
      }

      trackContactSuccess({ email: payload.email });

      setState("success");
    } catch {
      setFormError(contactPage.errorMessage);
      setState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card relative space-y-6"
      aria-describedby={formError ? "contact-form-error" : undefined}
    >
      <HoneypotField />

      <FormField id="name" label="Your name" error={fieldErrors.name}>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="form-input"
          aria-invalid={!!fieldErrors.name}
        />
      </FormField>

      <FormField id="email" label="Email" error={fieldErrors.email}>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="form-input"
          aria-invalid={!!fieldErrors.email}
        />
      </FormField>

      <FormField id="message" label="Message" error={fieldErrors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="form-input resize-y"
          aria-invalid={!!fieldErrors.message}
        />
      </FormField>

      {formError && (
        <p id="contact-form-error" className="form-error" role="alert">
          {formError}
        </p>
      )}

      <SubmitButton loading={state === "submitting"}>Send message</SubmitButton>
    </form>
  );
}
