"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

type StickyMobileCtaProps = {
  label: string;
  href: string;
};

export function StickyMobileCta({ label, href }: StickyMobileCtaProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-4 backdrop-blur-sm md:hidden [padding-bottom:max(1rem,env(safe-area-inset-bottom))]"
      role="complementary"
      aria-label="Quick action"
    >
      <div className="mx-auto flex max-w-content items-center gap-3">
        <Button href={href} variant="primary" className="min-h-11 flex-1">
          {label}
        </Button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-button text-navy/60 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick"
          aria-label="Dismiss"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
