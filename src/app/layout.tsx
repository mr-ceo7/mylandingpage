import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kassim Musa Abass (@mr-ceo7) — Full-Stack Software & Systems/IoT Engineer",
  description:
    "Engineering portfolio and systems monograph of Kassim Musa Abass (@mr-ceo7). Featuring RP2040/ESP32 embedded firmware, institutional platforms, and production web applications deployed via Vercel.",
  keywords: [
    "Kassim Musa Abass",
    "mr-ceo7",
    "Systems Engineer",
    "Full-Stack Developer",
    "Galvaniy Labs",
    "calcOS",
    "Embedded Systems",
    "RP2040",
    "ESP32",
    "Vercel",
    "Next.js",
    "React 19",
    "Nairobi Kenya"
  ],
  authors: [{ name: "Kassim Musa Abass", url: "https://github.com/mr-ceo7" }],
  creator: "Kassim Musa Abass",
  openGraph: {
    title: "Kassim Musa Abass (@mr-ceo7) — Systems & Full-Stack Engineer",
    description:
      "Institutional platforms, bare-metal microcontroller firmware, and production cloud applications.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
                try {
                  // Intro curtain plays once per session and never for reduced motion.
                  // The flag is written here, before React loads, so it never depends on hydration timing.
                  if (sessionStorage.getItem('kma-intro-seen') === '1' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    document.documentElement.classList.add('intro-seen');
                  } else {
                    sessionStorage.setItem('kma-intro-seen', '1');
                  }
                } catch (e) {
                  document.documentElement.classList.add('intro-seen');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface text-neutral-900 dark:text-neutral-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
