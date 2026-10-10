"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useScrollScene } from "./useScrollScene";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in ms-style units (e.g. 120): starts the motion a little later in the scroll */
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "tilt";
}

/** Scroll-linked entrance; plays in reverse when scrolling back up. Motion lives in globals.css (.reveal). */
export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useScrollScene<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal={variant}
      className={`reveal ${className}`}
      style={{ "--d": Math.min(delay / 1000, 0.6) } as CSSProperties}
    >
      {children}
    </div>
  );
}
