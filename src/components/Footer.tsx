import { ArrowUp } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="w-full bg-[#faf9f5] dark:bg-[#0d0f11] border-t border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-200 dark:border-neutral-800">
          {/* Colophon Left */}
          <div className="md:col-span-6 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block">
              COLOPHON & PROVENANCE
            </span>
            <div className="font-serif text-2xl text-neutral-950 dark:text-neutral-50 font-normal">
              Kassim Musa Abass
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-md leading-relaxed">
              Full-Stack Software & Systems/IoT Engineer. Dedicated to fault-tolerant financial rails, 
              bare-metal microcontroller firmware, and clean, high-performance web systems.
            </p>
          </div>

          {/* Colophon Specs Middle */}
          <div className="md:col-span-3 space-y-2 text-[11px] font-mono">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
              BUILD ARCHITECTURE
            </span>
            <div className="text-neutral-700 dark:text-neutral-300">
              FRAMEWORK: <span className="font-medium text-neutral-950 dark:text-neutral-100">NEXT.JS 16 (APP ROUTER)</span>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              STYLING: <span className="font-medium text-neutral-950 dark:text-neutral-100">TAILWIND CSS V4</span>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              DEPLOYMENT: <span className="font-medium text-neutral-950 dark:text-neutral-100">VERCEL EDGE NETWORK</span>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              STANDARDS: <span className="font-medium text-neutral-950 dark:text-neutral-100">ZERO AI SLOP COMPLIANT</span>
            </div>
          </div>

          {/* Colophon Nav Right */}
          <div className="md:col-span-3 space-y-2 text-[11px] font-mono">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
              NAVIGATION & INDEX
            </span>
            <div>
              <a href="#flagship" className="hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors py-1 inline-block">
                → FLAGSHIP ARCHITECTURES
              </a>
            </div>
            <div>
              <a href="#archive" className="hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors py-1 inline-block">
                → VERCEL DEPLOYMENT ARCHIVE
              </a>
            </div>
            <div>
              <a href="#hardware" className="hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors py-1 inline-block">
                → HARDWARE & FIELD REPORTS
              </a>
            </div>
            <div>
              <a href="#mentorship" className="hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors py-1 inline-block">
                → STEM MENTORSHIP & YSK
              </a>
            </div>
            <div>
              <a href="#philosophy" className="hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors py-1 inline-block">
                → SYSTEMS PHILOSOPHY
              </a>
            </div>
            <div>
              <a href="#contact" className="hover:text-[#b94a28] dark:hover:text-[#e06d44] transition-colors py-1 inline-block">
                → DIRECT CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} KASSIM MUSA ABASS (@MR-CEO7). ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mr-ceo7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>

            <a
              href="#"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1.5"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
