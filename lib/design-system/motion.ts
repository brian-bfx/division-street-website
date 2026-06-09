/** Webflow-inspired motion tokens — single source of truth for JS + CSS */

export const easing = {
  default: [0.22, 1, 0.36, 1] as const,
  entrance: [0.16, 1, 0.3, 1] as const,
};

export const duration = {
  micro: 0.2,
  entrance: 0.55,
  hero: 0.7,
};

export const distance = {
  revealY: 24,
};

export const stagger = {
  default: 0.08,
  hero: 0.1,
};
