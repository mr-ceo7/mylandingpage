"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (!mounted) {
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
