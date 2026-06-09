"use client";

import { consentBanner } from "@/content/forms";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("wpm:open-cookie-settings"))
      }
      className="inline-flex min-h-11 items-center text-base text-white/70 transition-colors duration-micro hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
    >
      {consentBanner.cookieSettingsLabel}
    </button>
  );
}
