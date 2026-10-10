"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `value` once it scrolls into view. Shows the final number for reduced-motion users. */
export function CountUp({ value, duration = 1200 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  const [reduce] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {reduce ? value : shown}
    </span>
  );
}
