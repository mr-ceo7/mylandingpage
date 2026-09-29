import { Mail, Terminal, ArrowUpRight, MapPin, Globe } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ContactSection() {
  return (
    <section id="contact" className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-[#faf9f5] dark:bg-[#0d0f11] py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 dark:border-neutral-800 pb-6 mb-12 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#b94a28] dark:text-[#e06d44] font-semibold block mb-1">
              SECTION 06 // DISPATCH TERMINAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight font-normal">
              Engineering Inquiries & Direct Line
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-md">
            Available for mission-critical systems architecture, distributed backend pipelines, custom embedded firmware, and full-stack web builds.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Terminal Card */}
          <div className="lg:col-span-7 border border-neutral-300 dark:border-neutral-800 bg-neutral-900 text-neutral-100 p-6 sm:p-8 font-mono space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#e06d44]" />
                <span>TERMINAL DISPATCH // AGY-NAIROBI</span>
              </span>
              <span className="text-[10px] uppercase">EAT / UTC+3</span>
            </div>

            <div className="text-xs sm:text-sm space-y-2 text-neutral-300 leading-relaxed">
              <p className="text-neutral-400">$ whoami</p>
              <p className="text-white font-semibold">Kassim Musa Abass (@mr-ceo7)</p>
              <p className="text-neutral-400 pt-2">$ location</p>
              <p>Nairobi, Kenya [Available for local & global engagements]</p>
              <p className="text-neutral-400 pt-2">$ core_competencies</p>
              <p className="text-neutral-200">
                M-Pesa / Mobile Money Failover Daemons · RP2040 & ESP32 Microcontrollers · Next.js & React 19 Web Deployments
              </p>
              <p className="text-neutral-400 pt-2">$ status</p>
              <p className="text-neutral-100">
                ACTIVE & ACCEPTING CONTRACTS / SENIOR ROLES
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://github.com/mr-ceo7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs uppercase tracking-widest bg-white text-black hover:bg-neutral-200 transition-colors w-full sm:w-auto"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB / MR-CEO7</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="mailto:kassimmusa322@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs uppercase tracking-widest border border-neutral-700 hover:border-white text-white transition-colors w-full sm:w-auto"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT EMAIL INQUIRY</span>
              </a>
            </div>
          </div>

          {/* Right: Quick References */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-neutral-300 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/40 space-y-4">
              <h3 className="font-serif text-xl text-neutral-950 dark:text-neutral-50 font-normal">
                Direct Coordinates
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-start gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <MapPin className="w-4 h-4 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-neutral-400 uppercase text-[9px]">PHYSICAL BASE</div>
                    <div className="text-neutral-900 dark:text-neutral-100 font-medium">Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <GithubIcon className="w-4 h-4 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-neutral-400 uppercase text-[9px]">CODE REPOSITORIES</div>
                    <a
                      href="https://github.com/mr-ceo7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 hover:text-[#b94a28] font-medium underline underline-offset-2 inline-flex items-center min-h-[36px] py-1"
                    >
                      github.com/mr-ceo7 ↗
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#b94a28] dark:text-[#e06d44] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-neutral-400 uppercase text-[9px]">EDGE DEPLOYMENTS</div>
                    <div className="text-neutral-900 dark:text-neutral-100 font-medium">
                      20+ live applications deployed via Vercel CLI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 dark:border-neutral-800 p-4 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-900/30">
              <span className="text-[#b94a28] dark:text-[#e06d44] font-semibold uppercase block mb-1">
                DISPATCH PROTOCOL NOTE
              </span>
              All client systems undergo rigorous unit and contract testing before edge deployment. 
              Zero tolerance for untested regressions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
