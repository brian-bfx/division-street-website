"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { consentBanner } from "@/content/forms";
import { updateConsent } from "@/lib/analytics";
import {
  getConsentFromDocument,
  setConsentCookie,
  type ConsentValue,
} from "@/lib/consent";

type ConsentBannerProps = {
  forceOpen?: boolean;
  onClose?: () => void;
};

export function ConsentBanner({
  forceOpen = false,
  onClose,
}: ConsentBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setVisible(true);
      return;
    }
    const existing = getConsentFromDocument();
    if (!existing) setVisible(true);
  }, [forceOpen]);

  function handleChoice(value: ConsentValue) {
    setConsentCookie(value);
    updateConsent(value === "accepted");
    setVisible(false);
    onClose?.();
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-content rounded-card-lg border border-navy/10 bg-white p-6 shadow-card-hover md:p-8">
        <p className="text-base leading-relaxed text-navy/80">
          {consentBanner.message}{" "}
          <Link
            href={consentBanner.privacyHref}
            className="text-brick underline-offset-2 hover:underline"
          >
            {consentBanner.privacyLabel}
          </Link>
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="inline-flex min-h-11 items-center justify-center rounded-button bg-brick px-7 py-3.5 text-base font-semibold text-white transition-all duration-micro hover:-translate-y-0.5 hover:bg-brick/90 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
          >
            {consentBanner.acceptLabel}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="inline-flex min-h-11 items-center justify-center rounded-button border-2 border-navy bg-transparent px-7 py-3.5 text-base font-semibold text-navy transition-all duration-micro hover:-translate-y-0.5 hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            {consentBanner.declineLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
