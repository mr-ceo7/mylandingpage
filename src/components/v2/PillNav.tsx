"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../Icons";
import { ThemeToggle } from "../ThemeToggle";

type Act = "intro" | "software" | "hardware" | "both";

// Which act each section belongs to (top to bottom)
const SECTIONS: { id: string; act: Act }[] = [
  { id: "software", act: "software" },
  { id: "flagship", act: "software" },
  { id: "archive", act: "software" },
  { id: "hardware-act", act: "hardware" },
  { id: "flagship-hardware", act: "hardware" },
  { id: "archive-hardware", act: "hardware" },
  { id: "hardware", act: "hardware" },
  { id: "mentorship", act: "hardware" },
  { id: "philosophy", act: "both" },
  { id: "contact", act: "both" },
];

const LINKS = [
  { label: "Software", href: "#software", sub: "Platforms, apps & AI tools" },
  { label: "Hardware", href: "#hardware-act", sub: "Firmware, robots & boards" },
  { label: "Lab notebook", href: "#hardware", sub: "Gearbox Academy reports" },
  { label: "Mentorship", href: "#mentorship", sub: "Young Scientists Kenya & KSEF" },
  { label: "Principles", href: "#philosophy", sub: "Rules & toolkit" },
  { label: "Contact", href: "#contact", sub: "kassimmusa322@gmail.com" },
];

const STYLE: Record<Act, { pill: string; label: string; bar: string }> = {
  intro: { pill: "bg-[#FBF8F1]/90 text-[#0B2219] border-[#CFC3A8] dark:bg-[#0B2219]/90 dark:text-[#F8F3E8] dark:border-[#2A5443]", label: "Portfolio", bar: "bg-[#C46A2B]" },
  software: { pill: "bg-[#0147BA]/95 text-[#F3E6CE] border-[#2F64C9]", label: "Software", bar: "bg-[#E34F33]" },
  hardware: { pill: "bg-[#0F3D2E]/95 text-[#F8F3E8] border-[#2A5443]", label: "Hardware", bar: "bg-[#E3B23C]" },
  both: { pill: "bg-[#FBF8F1]/90 text-[#0B2219] border-[#CFC3A8] dark:bg-[#0B2219]/90 dark:text-[#F8F3E8] dark:border-[#2A5443]", label: "Both sides", bar: "bg-[#C46A2B]" },
};

/** A floating pill that takes the colors of the act you're in, with a reading-progress line and a full-screen menu. */
export function PillNav() {
  const [act, setAct] = useState<Act>("intro");
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // The section whose top has passed the pill (just under the top of the screen) sets the act
      let current: Act = "intro";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 90) current = s.act;
      }
      setAct(current);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const style = STYLE[act];

  return (
    <>
      <header className="fixed top-3 inset-x-3 sm:inset-x-0 z-50 flex justify-center pointer-events-none">
        <nav
          aria-label="Main"
          className={`pointer-events-auto relative w-full sm:w-auto sm:min-w-[440px] flex items-center justify-between gap-4 rounded-full border pl-2 pr-2 py-1.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)] overflow-hidden transition-colors duration-500 ${style.pill}`}
        >
          <a href="#" className="flex items-center gap-2.5 min-h-[40px]" onClick={() => setOpen(false)}>
            <span className="w-9 h-9 rounded-full bg-current/10 flex items-center justify-center font-serif text-sm tracking-tight">KMA</span>
            <span className="font-mono text-[10px] tracking-widest uppercase">
              <span key={act} className="nav-act inline-block">{style.label}</span>
            </span>
          </a>
          <div className="flex items-center gap-1.5">
            <a href="https://github.com/mr-ceo7" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full hover:bg-current/10">
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-current/10 hover:bg-current/20 cursor-pointer"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {/* Reading progress */}
          <span aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-[2px] overflow-hidden">
            <span ref={barRef} className={`block h-full origin-left ${style.bar}`} style={{ transform: "scaleX(0)" }} />
          </span>
        </nav>
      </header>

      {/* Full-screen menu */}
      {open && (
        <div className="menu-sheet fixed inset-0 z-40 bg-[#0B2219] text-[#F8F3E8] pt-24 pb-10 px-6 overflow-y-auto" data-lenis-prevent>
          <ul className="max-w-xl mx-auto space-y-1">
            {LINKS.map((l, i) => (
              <li key={l.href} className="menu-item" style={{ animationDelay: `${60 + i * 45}ms` }}>
                <a href={l.href} onClick={() => setOpen(false)} className="group flex items-baseline justify-between gap-4 py-3 border-b border-[#2A5443]">
                  <span>
                    <span className="block font-serif text-3xl sm:text-4xl group-hover:text-[#E3B23C] transition-colors">{l.label}</span>
                    <span className="block mt-1 font-mono text-[10px] tracking-widest uppercase text-[#A9B39E]">{l.sub}</span>
                  </span>
                  <span className="font-mono text-xs text-[#E3B23C]">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="max-w-xl mx-auto mt-8 flex flex-wrap items-center gap-3">
            <ThemeToggle />
            <a href="https://github.com/mr-ceo7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 min-h-[44px] border border-[#2A5443] font-mono text-[11px] tracking-widest uppercase">
              <GithubIcon className="w-4 h-4" /> github.com/mr-ceo7 <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
