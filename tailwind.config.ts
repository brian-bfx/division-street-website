import type { Config } from "tailwindcss";
import { colors } from "./lib/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: colors.navy,
        brick: colors.brick,
        blue: colors.blue,
        orange: colors.orange,
        warm: colors.warm,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      fontSize: {
        "type-hero": [
          "clamp(2.5rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "type-section": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "type-subsection": [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
      },
      letterSpacing: {
        eyebrow: "0.1em",
      },
      maxWidth: {
        content: "1140px",
        prose: "70ch",
      },
      borderRadius: {
        button: "8px",
        card: "12px",
        "card-lg": "16px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(11, 22, 42, 0.08)",
        "card-hover": "0 8px 24px rgba(11, 22, 42, 0.12)",
      },
      transitionDuration: {
        micro: "200ms",
        entrance: "550ms",
      },
      transitionTimingFunction: {
        motion: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
