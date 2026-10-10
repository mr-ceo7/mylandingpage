"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

// The <html> class is the source of truth (set before paint by the script in layout.tsx),
// so the toggle subscribes to it instead of keeping its own copy in state.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getTheme = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");
// Unknown during server rendering: show the neutral placeholder until hydrated
const getServerTheme = (): Theme | null => null;

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (theme === null) {
    return (
      <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 sm:py-1 min-h-[44px] sm:min-h-[32px] text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 opacity-70">
        <Moon className="w-3.5 h-3.5" />
        <span>THEME</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group inline-flex items-center justify-center gap-2 px-3 py-2 sm:py-1 min-h-[44px] sm:min-h-[32px] text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-200 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-colors"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-100" />
          <span>LIGHT</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-neutral-700 group-hover:text-neutral-950" />
          <span>DARK</span>
        </>
      )}
    </button>
  );
}
