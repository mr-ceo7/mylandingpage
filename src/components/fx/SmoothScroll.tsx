"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Momentum scrolling for mouse wheels and trackpads; touch keeps native scrolling. Off for reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof ResizeObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Anchor links (#flagship, #contact…) glide through Lenis instead of jumping
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -72 } });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return null;
}
