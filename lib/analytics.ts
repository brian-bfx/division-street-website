"use client";

import { hasGrantedConsent } from "@/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventParams = Record<string, string | number | boolean>;

export type EnhancedConversionData = {
  email?: string;
  phone?: string;
};

function gtag(...args: unknown[]) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
}

/** Fire a GA4 custom event. Works with Consent Mode (cookieless pings when denied). */
export function trackEvent(
  name: string,
  params?: AnalyticsEventParams
): void {
  gtag("event", name, params);
}

/**
 * Fire a Google Ads conversion.
 * Paste your full send_to label in env: NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_CONVERSION=AW-XXXXXXX/xxxxxxxx
 */
export function trackConversion(
  sendTo: string,
  options?: {
    params?: AnalyticsEventParams;
    userData?: EnhancedConversionData;
  }
): void {
  if (!sendTo) return;

  // Enhanced conversions — only pass PII when user granted consent
  if (options?.userData && hasGrantedConsent()) {
    gtag("set", "user_data", {
      email: options.userData.email,
      phone_number: options.userData.phone,
    });
  }

  gtag("event", "conversion", {
    send_to: sendTo,
    ...options?.params,
  });
}

/** Primary conversion — sign-up form success */
export function trackSignupSuccess(
  plan: string,
  businessType: string,
  userData?: EnhancedConversionData
): void {
  trackEvent("signup_submit", {
    plan,
    business_type: businessType,
  });

  // Paste your Google Ads conversion label here (env var):
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_CONVERSION;
  if (sendTo) {
    trackConversion(sendTo, {
      params: { plan, business_type: businessType },
      userData,
    });
  }
}

/** Secondary conversion — contact form success */
export function trackContactSuccess(userData?: EnhancedConversionData): void {
  trackEvent("contact_submit");

  // Paste your Google Ads conversion label here (env var):
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION;
  if (sendTo) {
    trackConversion(sendTo, { userData });
  }
}

/** SPA page_view on App Router navigations */
export function trackPageView(path: string): void {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!ga4Id) return;

  gtag("event", "page_view", {
    page_path: path,
    send_to: ga4Id,
  });
}

/** Update Google Consent Mode v2 after user choice */
export function updateConsent(granted: boolean): void {
  gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}
