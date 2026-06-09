"use client";

import { useState } from "react";
import type { Faq } from "@/content/pricing";

type FaqAccordionProps = {
  faqs: Faq[];
};

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-navy/10">
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between gap-4 py-4 text-left transition-colors duration-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display text-xl font-semibold text-navy">
          {faq.question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-brick transition-transform duration-micro ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-navy/70">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div>
      {faqs.map((faq) => (
        <FaqItem key={faq.question} faq={faq} />
      ))}
    </div>
  );
}
