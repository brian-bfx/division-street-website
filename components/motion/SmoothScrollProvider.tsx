"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisRef>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, anchors: true }}
    >
      {children}
    </ReactLenis>
  );
}
