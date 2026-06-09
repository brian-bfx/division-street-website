export const CONSENT_COOKIE = "dsd_consent";
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export type ConsentValue = "accepted" | "declined";

export function parseConsentCookie(
  cookieHeader: string | null
): ConsentValue | null {
  if (!cookieHeader) return null;
  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  const value = match.split("=")[1];
  if (value === "accepted" || value === "declined") return value;
  return null;
}

/** Client-side: read consent from document.cookie */
export function getConsentFromDocument(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  return parseConsentCookie(document.cookie);
}

/** Client-side: persist consent choice in a first-party cookie */
export function setConsentCookie(value: ConsentValue): void {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax`;
}

export function hasGrantedConsent(): boolean {
  return getConsentFromDocument() === "accepted";
}
