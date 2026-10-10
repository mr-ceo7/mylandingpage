import { type ReactNode } from "react";
import { SectionCurve } from "./SectionCurve";

type Tone = "cream" | "green" | "blue";

/**
 * Full-width color band. Green and blue bands carry the `dark` class, so the sections inside
 * render their dark styling on PCB green or Electric Blue in both themes. `next` draws a curved edge into the next band.
 */
export function Band({ tone, next, children }: { tone: Tone; next?: Tone; children: ReactNode }) {
  return (
    <div className={`band band-${tone} ${tone === "cream" ? "" : "dark"} relative overflow-x-clip ${next ? "pb-16 sm:pb-24" : ""}`}>
      {children}
      {next && <SectionCurve fill={`var(--band-${next})`} />}
    </div>
  );
}
