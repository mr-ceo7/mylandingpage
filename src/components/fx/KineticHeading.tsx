"use client";

import { type CSSProperties } from "react";
import { useScrollScene } from "./useScrollScene";

interface KineticHeadingProps {
  as?: "h1" | "h2" | "h3";
  text: string;
  /** Word or phrase in `text` that gets a hand-drawn copper stroke once the heading lands */
  highlight?: string;
  className?: string;
}

/** Words rise one by one out of a mask as the heading scrolls in, then a copper stroke draws under the highlight. */
export function KineticHeading({ as: Tag = "h2", text, highlight, className = "" }: KineticHeadingProps) {
  const ref = useScrollScene<HTMLHeadingElement>();
  const has = !!highlight && text.includes(highlight);
  const [before, after] = has ? text.split(highlight!) : [text, ""];
  let i = 0;
  const words = (chunk: string) =>
    chunk
      .split(" ")
      .filter(Boolean)
      .flatMap((w, k) => {
        const idx = i++;
        const el = (
          <span key={`${w}-${idx}`} className="kinetic-word" style={{ "--i": idx } as CSSProperties}>
            <span>{w}</span>
          </span>
        );
        return k > 0 ? [" ", el] : [el];
      });

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words(before)}
        {has && (
          <>
            {before.endsWith(" ") && " "}
            <span className="relative inline-block">
              <svg className="kinetic-mark absolute pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M3 13 C 22 9, 45 15, 68 11 S 92 10, 97 12" pathLength={1} />
              </svg>
              {words(highlight!)}
            </span>
            {after.startsWith(" ") && " "}
          </>
        )}
        {words(after)}
      </span>
    </Tag>
  );
}
