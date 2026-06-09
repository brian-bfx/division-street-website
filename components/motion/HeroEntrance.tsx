"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { distance, duration, easing, stagger } from "@/lib/design-system/motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger.hero,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: distance.revealY },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.hero,
      ease: easing.entrance,
    },
  },
};

type HeroEntranceProps = {
  children: ReactNode;
  className?: string;
};

export function HeroEntrance({ children, className = "" }: HeroEntranceProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

type HeroEntranceItemProps = {
  children: ReactNode;
  className?: string;
};

export function HeroEntranceItem({
  children,
  className = "",
}: HeroEntranceItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
