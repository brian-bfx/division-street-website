"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ExpertiseEditorialBlock } from "@/components/ExpertiseEditorialBlock";
import type { ExpertiseItem } from "@/lib/expertise";

type ExpertiseAccordionProps = {
  items: ExpertiseItem[];
  /** Single-open accordion — used on the homepage */
  defaultOpenIndex?: number;
  /** All cards expanded; each toggles independently — used on the services page */
  expandAll?: boolean;
};

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-micro ${
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
        d="M7 17 17 7M17 7H9M17 7v8"
      />
    </svg>
  );
}

function ExpertiseCard({
  item,
  isOpen,
  onToggle,
}: {
  item: ExpertiseItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border border-navy/10 bg-white shadow-card">
      <div className="p-8 md:p-10 lg:p-12">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h2
              id={`expertise-heading-${item.slug}`}
              className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl"
            >
              {item.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70 md:text-lg">
              {item.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`expertise-panel-${item.slug}`}
            aria-label={isOpen ? `Collapse ${item.title}` : `Expand ${item.title}`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-brick transition-colors duration-micro hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
          >
            <ArrowIcon open={isOpen} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id={`expertise-panel-${item.slug}`}
              role="region"
              aria-labelledby={`expertise-heading-${item.slug}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-10 border-t border-navy/10 pt-10">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
                  {item.subItems.map((subItem) => (
                    <div key={subItem.label} className="min-w-0">
                      <p className="mb-3 text-sm font-semibold text-navy">
                        {subItem.label}
                      </p>
                      {subItem.imageSrc ? (
                        <div className="relative aspect-[4/3] overflow-hidden rounded-photo bg-warm">
                          <Image
                            src={subItem.imageSrc}
                            alt={subItem.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] items-center justify-center rounded-photo border border-dashed border-navy/15 bg-warm px-3 text-center text-xs text-navy/45">
                          {subItem.label}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex min-h-11 items-center text-base font-semibold text-brick transition-colors duration-micro hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
                  >
                    Learn more →
                  </Link>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  );
}

function initialOpenIndices(
  items: ExpertiseItem[],
  expandAll: boolean,
  defaultOpenIndex: number,
) {
  if (expandAll) {
    return new Set(items.map((_, index) => index));
  }
  return defaultOpenIndex >= 0 ? new Set([defaultOpenIndex]) : new Set<number>();
}

export function ExpertiseAccordion({
  items,
  defaultOpenIndex = 0,
  expandAll = false,
}: ExpertiseAccordionProps) {
  const [openIndices, setOpenIndices] = useState(() =>
    initialOpenIndices(items, expandAll, defaultOpenIndex),
  );

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) =>
        item.layout === "editorial" ? (
          <ExpertiseEditorialBlock key={item.slug} item={item} />
        ) : (
          <ExpertiseCard
            key={item.slug}
            item={item}
            isOpen={openIndices.has(index)}
            onToggle={() =>
              setOpenIndices((current) => {
                if (expandAll) {
                  const next = new Set(current);
                  if (next.has(index)) next.delete(index);
                  else next.add(index);
                  return next;
                }
                return current.has(index) ? new Set<number>() : new Set([index]);
              })
            }
          />
        ),
      )}
    </div>
  );
}
