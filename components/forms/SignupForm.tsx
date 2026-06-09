"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  businessTypes,
  planOptions,
  planSlugToName,
  signupPage,
} from "@/content/forms";
import { trackSignupSuccess } from "@/lib/analytics";
import { FormField } from "./FormField";
import { HoneypotField } from "./HoneypotField";
import { SubmitButton } from "./SubmitButton";

type FormState = "idle" | "submitting" | "success" | "error";

function getInitialPlan(searchParams: URLSearchParams): string {
  const slug = searchParams.get("plan");
  if (slug && planSlugToName[slug]) return planSlugToName[slug];
  return "Not sure";
}

export function SignupForm() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [plan, setPlan] = useState(() => getInitialPlan(searchParams));

  if (state === "success") {
    return (
      <div
        className="card text-center motion-safe:animate-none"
        role="status"
        aria-live="polite"
      >
        <h2 className="font-display text-2xl font-bold text-navy">
          {signupPage.successTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy/70">
          {signupPage.successMessage}
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
      businessName: String(formData.get("businessName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
      plan: String(formData.get("plan") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/signup", {
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
        setFormError(data.error ?? signupPage.errorMessage);
        setState("error");
        return;
      }

      // Fire conversions only after confirmed API success
      trackSignupSuccess(payload.plan, payload.businessType, {
        email: payload.email,
        phone: payload.phone,
      });

      setState("success");
    } catch {
      setFormError(signupPage.errorMessage);
      setState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card relative space-y-6"
      aria-describedby={formError ? "signup-form-error" : undefined}
    >
      <HoneypotField />

      <FormField
        id="businessName"
        label="Business name"
        error={fieldErrors.businessName}
      >
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          autoComplete="organization"
          className="form-input"
          aria-invalid={!!fieldErrors.businessName}
          aria-describedby={
            fieldErrors.businessName ? "businessName-error" : undefined
          }
        />
      </FormField>

      <FormField
        id="contactName"
        label="Your name"
        error={fieldErrors.contactName}
      >
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          autoComplete="name"
          className="form-input"
          aria-invalid={!!fieldErrors.contactName}
        />
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
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

        <FormField id="phone" label="Phone" error={fieldErrors.phone}>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="form-input"
            aria-invalid={!!fieldErrors.phone}
          />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="businessType"
          label="Business type"
          error={fieldErrors.businessType}
        >
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            className="form-input"
            aria-invalid={!!fieldErrors.businessType}
          >
            <option value="" disabled>
              Select a type
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="plan"
          label="Plan interested in"
          error={fieldErrors.plan}
        >
          <select
            id="plan"
            name="plan"
            required
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="form-input"
            aria-invalid={!!fieldErrors.plan}
          >
            {planOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField
        id="message"
        label="Anything else? (optional)"
        error={fieldErrors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          className="form-input resize-y"
          aria-invalid={!!fieldErrors.message}
        />
      </FormField>

      {formError && (
        <p id="signup-form-error" className="form-error" role="alert">
          {formError}
        </p>
      )}

      <SubmitButton loading={state === "submitting"}>Get started</SubmitButton>
    </form>
  );
}
