"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "FLAGSHIP SYSTEMS", href: "#flagship" },
    { label: "VERCEL ARCHIVE", href: "#archive" },
    { label: "HARDWARE LAB", href: "#hardware" },
    { label: "MENTORSHIP", href: "#mentorship" },
    { label: "ENGINEERING PHILOSOPHY", href: "#philosophy" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf9f5]/90 dark:bg-[#0d0f11]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-none border border-neutral-400 dark:border-neutral-700 overflow-hidden bg-neutral-200 dark:bg-neutral-800 flex-shrink-0">
            <Image
              src="/images/profile.jpeg"
              alt="Kassim Musa Abass"
              fill
              sizes="32px"
              className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-semibold tracking-tight text-sm text-neutral-900 dark:text-neutral-100 uppercase">
              Kassim Musa Abass
            </span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
              @MR-CEO7 // SYSTEMS & WEB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-mono tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mr-ceo7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-neutral-300 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-200 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Unified Mobile Drawer (No double stacked navigation bars) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-300 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono tracking-widest text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 py-3 min-h-[44px] flex items-center border-b border-neutral-200/60 dark:border-neutral-800/60 active:bg-neutral-100 dark:active:bg-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/mr-ceo7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-900 dark:text-neutral-100 py-3 min-h-[44px]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB / MR-CEO7</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      )}
    </header>
  );
}
