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
      <div className="w-20 h-7 border border-neutral-300 dark:border-neutral-800 bg-transparent" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-200 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-colors"
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
