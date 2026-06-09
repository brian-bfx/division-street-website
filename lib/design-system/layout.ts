/**
 * Layout conventions for the Division Street Digital design system.
 *
 * Section backgrounds:
 * - white: default body sections
 * - warm: alternate sections (silver #E8EBED) — most common
 * - pinstripe: card grids only (pricing plans, service cards, how-it-works)
 * - navy: closing CTAs, footer-adjacent blocks
 *
 * Mobile rhythm: section header → optional image → body/cards (single column)
 */

export const layout = {
  container: "mx-auto max-w-content px-6 sm:px-8 lg:px-10",
  containerSafe:
    "mx-auto max-w-content px-6 sm:px-8 lg:px-10 [padding-left:max(1.5rem,env(safe-area-inset-left))] [padding-right:max(1.5rem,env(safe-area-inset-right))] sm:[padding-left:max(2rem,env(safe-area-inset-left))] sm:[padding-right:max(2rem,env(safe-area-inset-right))]",
  sectionDefault: "py-20 md:py-28 lg:py-32",
  sectionHero: "py-24 md:py-32 lg:py-36",
  sectionCompact: "py-16 md:py-24",
  /** Space between a section header and the content below it */
  sectionContent: "mt-14 md:mt-16",
  sectionContentLg: "mt-16 md:mt-20",
  stack: "flex flex-col gap-8",
  stackMd: "flex flex-col gap-10",
  gridCards: "grid gap-8 md:grid-cols-2 md:gap-10",
  gridCardsLg: "grid gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12",
  touchTarget: "min-h-11 min-w-11",
} as const;

export type SectionBackground = "white" | "warm" | "navy" | "pinstripe";
export type SectionSpacing = "default" | "compact" | "hero";
