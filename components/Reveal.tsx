"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { distance, duration, easing } from "@/lib/design-system/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — multiples of 80 recommended */
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance.revealY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -48px 0px" }}
      transition={{
        duration: duration.entrance,
        ease: easing.default,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
