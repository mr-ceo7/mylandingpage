export interface CarouselSlide {
  src: string;
  caption: string;
  alt: string;
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "ai" | "web" | "hardware";
  categoryLabel: string;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
  /** Position among the software flagships (1 = first) */
  flagshipRank?: number;
  /** Matching desktop + mobile captures of key pages, for the device showcase */
  shots?: { label: string; desktop: string; mobile: string }[];
  deploymentPlatform: string;
  year: string;
  screenshot: string;
  carouselSlides?: CarouselSlide[];
}

export const PROJECTS: Project[] = [
  {
    id: "tambuatips",
    title: "TambuaTips — Sports Predictions Platform",
    subtitle: "Football Tips, Live Fixtures & Subscription Billing",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A football predictions platform with live fixtures, league standings, a sports news feed and tiered VIP tip subscriptions billed in Kenyan shillings, managed from an admin dashboard.",
    architectureDetails: [
      "Three tiers (Basic, Standard, Premium VIP) with 2- and 4-week plans priced in KES",
      "M-Pesa and Paystack payment integration",
      "Fixtures, standings and news from a sports data API",
      "Google sign-in; admin dashboard for tips and subscribers"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "SQLAlchemy", "MySQL (TiDB)", "M-Pesa", "Paystack"],
    liveUrl: "https://tambuatips.com",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    flagshipRank: 4,
    shots: [
      {
        "label": "Home",
        "desktop": "/flagships/tambuatips/home-desktop.jpg",
        "mobile": "/flagships/tambuatips/home-mobile.jpg"
      },
      {
        "label": "News",
        "desktop": "/flagships/tambuatips/news-desktop.jpg",
        "mobile": "/flagships/tambuatips/news-mobile.jpg"
      },
      {
        "label": "Tips & plans",
        "desktop": "/flagships/tambuatips/tips-desktop.jpg",
        "mobile": "/flagships/tambuatips/tips-mobile.jpg"
      },
      {
        "label": "Admin",
        "desktop": "/flagships/tambuatips/admin-desktop.jpg",
        "mobile": "/flagships/tambuatips/admin-mobile.jpg"
      }
    ],
    deploymentPlatform: "Custom Domain",
    year: "2026",
    screenshot: "/flagships/tambuatips/home-desktop.jpg",
    carouselSlides: [
      {
        "src": "/flagships/tambuatips/home-desktop.jpg",
        "caption": "Home (desktop)",
        "alt": "TambuaTips — Sports Predictions Platform: Home on desktop",
        "tag": "HOME"
      },
      {
        "src": "/flagships/tambuatips/home-mobile.jpg",
        "caption": "Home (mobile)",
        "alt": "TambuaTips — Sports Predictions Platform: Home on mobile",
        "tag": "HOME"
      },
      {
        "src": "/flagships/tambuatips/news-desktop.jpg",
        "caption": "News (desktop)",
        "alt": "TambuaTips — Sports Predictions Platform: News on desktop",
        "tag": "NEWS"
      },
      {
        "src": "/flagships/tambuatips/news-mobile.jpg",
        "caption": "News (mobile)",
        "alt": "TambuaTips — Sports Predictions Platform: News on mobile",
        "tag": "NEWS"
      },
      {
        "src": "/flagships/tambuatips/tips-desktop.jpg",
        "caption": "Tips & plans (desktop)",
        "alt": "TambuaTips — Sports Predictions Platform: Tips & plans on desktop",
        "tag": "TIPS & PLANS"
      },
      {
        "src": "/flagships/tambuatips/tips-mobile.jpg",
        "caption": "Tips & plans (mobile)",
        "alt": "TambuaTips — Sports Predictions Platform: Tips & plans on mobile",
        "tag": "TIPS & PLANS"
      },
      {
        "src": "/flagships/tambuatips/admin-desktop.jpg",
        "caption": "Admin dashboard (desktop)",
        "alt": "TambuaTips — Sports Predictions Platform: Admin dashboard on desktop",
        "tag": "ADMIN"
      },
      {
        "src": "/flagships/tambuatips/admin-mobile.jpg",
        "caption": "Admin dashboard (mobile)",
        "alt": "TambuaTips — Sports Predictions Platform: Admin dashboard on mobile",
        "tag": "ADMIN"
      }
    ]
  },
  {
    id: "winvirahisi",
    title: "WinviRahisi — Over 2.5 & 3.5 Goals Tips",
    subtitle: "Daily Goals-Market Predictions & VIP Plans",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A focused football tips site for the Over 2.5 and Over 3.5 goals markets: daily free picks, VIP plans in KES (1, 2 and 4 weeks), and an archive of past tips.",
    architectureDetails: [
      "Free tips feed with locked VIP picks that open on subscription",
      "1/2/4-week VIP plans in KES, with M-Pesa and Paystack payments",
      "Tip archive for an open results history",
      "Google sign-in; FastAPI backend on SQLite"
    ],
    techStack: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS", "FastAPI", "SQLite", "M-Pesa", "Paystack"],
    liveUrl: "https://www.winvirahisi.com",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    flagshipRank: 5,
    shots: [
      {
        "label": "Free & VIP tips",
        "desktop": "/flagships/winvirahisi/home-desktop.jpg",
        "mobile": "/flagships/winvirahisi/home-mobile.jpg"
      }
    ],
    deploymentPlatform: "Custom Domain",
    year: "2026",
    screenshot: "/flagships/winvirahisi/home-desktop.jpg",
    carouselSlides: [
      {
        "src": "/flagships/winvirahisi/home-desktop.jpg",
        "caption": "Free & VIP tips (desktop)",
        "alt": "WinviRahisi — Over 2.5 & 3.5 Goals Tips: Free & VIP tips on desktop",
        "tag": "FREE & VIP TIPS"
      },
      {
        "src": "/flagships/winvirahisi/home-mobile.jpg",
        "caption": "Free & VIP tips (mobile)",
        "alt": "WinviRahisi — Over 2.5 & 3.5 Goals Tips: Free & VIP tips on mobile",
        "tag": "FREE & VIP TIPS"
      }
    ]
  },
  {
    id: "galvaniy-labs",
    title: "Galvaniy Labs — Virtual Physics Laboratory",
    subtitle: "Virtual Physics Laboratory, Simulator Workbench & Automated Reports",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "An intelligent scientific experimentation workspace. Features an interactive Virtual Physics Laboratory simulator, automated report analysis with AI assistants, structured laboratory manuals, and dynamic PDF credential generation.",
    architectureDetails: [
      "Virtual physics laboratory simulator with interactive circuit and instrument panels",
      "AI laboratory assistant (Dr. Vance) providing real-time experimental guidance",
      "Dynamic client-side PDF credential and invoice generator using jsPDF & QRCode",
      "Multi-tenant student and administrator role isolation with IndexedDB manual storage"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "OpenAPI", "IndexedDB", "Tailwind CSS", "Vercel"],
    liveUrl: "https://galvaniy-labs.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2026",
    screenshot: "/projects/galvaniy-labs-virtual/slide_1.png",
    carouselSlides: [
      {
        src: "/projects/galvaniy-labs-virtual/slide_1.png",
        caption: "Authenticated lab report generator indexing University of Nairobi Physics experiments (A-2, B-6, C-9).",
        alt: "Galvaniy Labs Report Generator",
        tag: "REPORT GENERATOR"
      },
      {
        src: "/projects/galvaniy-labs-virtual/slide_3.png",
        caption: "Virtual Labs hub featuring 20 interactive physics apparatus simulations across Measurement and Mechanics.",
        alt: "Virtual Labs Physics Engine",
        tag: "VIRTUAL PHYSICS ENGINE"
      },
      {
        src: "/projects/galvaniy-labs-virtual/slide_4.png",
        caption: "Interactive apparatus workbench with live variable controls and simulation readouts.",
        alt: "Simulation apparatus workbench",
        tag: "EXPERIMENT SIMULATOR"
      },
      {
        src: "/projects/galvaniy-labs-virtual/slide_2.png",
        caption: "Student authentication portal with institutional Google SSO and offline PWA installation.",
        alt: "Student authentication portal",
        tag: "STUDENT GATEWAY"
      }
    ]
  },
  {
    id: "sharpboyz-v3",
    title: "Sharpbrains calcOS Platform & Emulator",
    subtitle: "Campus AI Calculator Web Experience, Store & In-Browser Emulator",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "The official production web platform and hardware store for calcOS—the modified Casio scientific calculator with integrated campus AI. Features an interactive in-browser emulator, tactile hardware showcase, and streamlined order checkout.",
    architectureDetails: [
      "In-browser Casio fx-991ES Plus emulator running client-side simulated calcOS firmware",
      "Responsive product showcase highlighting stealth anodized aluminum chassis and tactile keys",
      "High-performance React 19 architecture with sub-second LCP and zero hydration overhead",
      "Integrated campus ordering pipeline and FAQ documentation system"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Canvas Emulator", "Vercel"],
    liveUrl: "https://sharpbrains.xn--jhb4c.com/",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    flagshipRank: 2,
    shots: [
      {
        "label": "Landing",
        "desktop": "/flagships/calcos/landing-desktop.jpg",
        "mobile": "/flagships/calcos/landing-mobile.jpg"
      },
      {
        "label": "In-browser demo",
        "desktop": "/flagships/calcos/demo-desktop.jpg",
        "mobile": "/flagships/calcos/demo-mobile.jpg"
      },
      {
        "label": "Account & credits",
        "desktop": "/flagships/calcos/account-desktop.jpg",
        "mobile": "/flagships/calcos/account-mobile.jpg"
      }
    ],
    deploymentPlatform: "Vercel CLI",
    year: "2026",
    screenshot: "/flagships/calcos/landing-desktop.jpg",
    carouselSlides: [
      {
        "src": "/flagships/calcos/landing-desktop.jpg",
        "caption": "Landing (desktop)",
        "alt": "Sharpbrains calcOS Platform & Emulator: Landing on desktop",
        "tag": "LANDING"
      },
      {
        "src": "/flagships/calcos/landing-mobile.jpg",
        "caption": "Landing (mobile)",
        "alt": "Sharpbrains calcOS Platform & Emulator: Landing on mobile",
        "tag": "LANDING"
      },
      {
        "src": "/flagships/calcos/demo-desktop.jpg",
        "caption": "In-browser demo (desktop)",
        "alt": "Sharpbrains calcOS Platform & Emulator: In-browser demo on desktop",
        "tag": "IN-BROWSER DEMO"
      },
      {
        "src": "/flagships/calcos/demo-mobile.jpg",
        "caption": "In-browser demo (mobile)",
        "alt": "Sharpbrains calcOS Platform & Emulator: In-browser demo on mobile",
        "tag": "IN-BROWSER DEMO"
      },
      {
        "src": "/flagships/calcos/account-desktop.jpg",
        "caption": "Account & credits (desktop)",
        "alt": "Sharpbrains calcOS Platform & Emulator: Account & credits on desktop",
        "tag": "ACCOUNT & CREDITS"
      },
      {
        "src": "/flagships/calcos/account-mobile.jpg",
        "caption": "Account & credits (mobile)",
        "alt": "Sharpbrains calcOS Platform & Emulator: Account & credits on mobile",
        "tag": "ACCOUNT & CREDITS"
      }
    ]
  },
  {
    id: "rfid-attendance-system",
    title: "RFID Student Attendance System",
    subtitle: "Dual-Core RP2040 Microcontroller & ESP32 Telemetry Station",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "An integrated edge verification terminal designed for institutional attendance records. Features hardware interrupt-driven RC522 card scanning on a Raspberry Pi Pico W, synchronized over SPI and UART to an ESP32 telemetry server with an interactive web dashboard.",
    architectureDetails: [
      "Dual-core firmware architecture on RP2040 separating RFID polling from wireless telemetry",
      "Hardware debouncing and SPI bus timing tuned for rapid sub-50ms badge reads",
      "Local display rendering on OLED/LED matrix with animated status transitions",
      "Direct HTTP/REST sync to institutional server with offline memory caching"
    ],
    techStack: ["Raspberry Pi Pico W", "C/C++", "Arduino Core", "ESP32", "FreeRTOS", "SPI/I2C"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: true,
    deploymentPlatform: "Bare Metal Firmware + Edge Webhook",
    year: "2026",
    screenshot: "/projects/rfid/IMG-20260710-WA0009.jpg",
    carouselSlides: [
      {
        src: "/projects/rfid/IMG-20260710-WA0009.jpg",
        caption: "Integrated RFID attendance verification prototype in bench testing enclosure.",
        alt: "RFID attendance hardware assembly",
        tag: "HARDWARE PROTOTYPE"
      },
      {
        src: "/projects/rfid/IMG-20260705-WA0012.jpg",
        caption: "LED matrix display and core microcontroller bus communication validation.",
        alt: "Display and electronics testing",
        tag: "CIRCUIT BENCH TEST"
      },
      {
        src: "/projects/rfid/IMG-20260709-WA0024.jpg",
        caption: "RC522 SPI wiring, logic level translation, and breadboard circuit debugging.",
        alt: "RC522 reader and controller wiring",
        tag: "SPI WIRING"
      },
      {
        src: "/projects/rfid/IMG-20260709-WA0050.jpg",
        caption: "Capstone project presentation and live hardware demonstration at Gearbox Academy.",
        alt: "Project presentation at Gearbox Academy",
        tag: "FIELD PRESENTATION"
      }
    ]
  },

  {
    id: "royal-mint",
    title: "Smart Timetable — Exam Timetables for 9 Kenyan Universities",
    subtitle: "Exam Schedules, Personal Timetables & AI Quick Revision",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "An exam timetable portal for nine Kenyan universities, including UoN, JKUAT, KU and DeKUT. Students add their unit codes to get a personal exam schedule, then open Quick Revision for AI-generated flashcards, quizzes and notes on each unit.",
    architectureDetails: [
      "Quick Revision per unit: AI-generated flashcards with Cards, Quiz, Notes and Chat tabs",
      "Client-side schedule search filtering across faculty, course codes, and lecture venues",
      "Offline-first PWA caching for access in areas with weak campus connectivity",
      "Custom domain configuration with automatic SSL termination"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://www.examtimetables.xn--jhb4c.com/",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    flagshipRank: 6,
    shots: [
      {
        "label": "University picker",
        "desktop": "/flagships/examtimetables/home-desktop.jpg",
        "mobile": "/flagships/examtimetables/home-mobile.jpg"
      },
      {
        "label": "UoN timetable",
        "desktop": "/flagships/examtimetables/uon-desktop.jpg",
        "mobile": "/flagships/examtimetables/uon-mobile.jpg"
      },
      {
        "label": "Quick Revision",
        "desktop": "/flagships/examtimetables/revision-desktop.jpg",
        "mobile": "/flagships/examtimetables/revision-mobile.jpg"
      }
    ],
    deploymentPlatform: "Vercel CLI + Custom Domain",
    year: "2025",
    screenshot: "/flagships/examtimetables/home-desktop.jpg",
    carouselSlides: [
      {
        "src": "/flagships/examtimetables/home-desktop.jpg",
        "caption": "University picker (desktop)",
        "alt": "Royal Mint (Exam Timetable Portal): University picker on desktop",
        "tag": "UNIVERSITY PICKER"
      },
      {
        "src": "/flagships/examtimetables/home-mobile.jpg",
        "caption": "University picker (mobile)",
        "alt": "Royal Mint (Exam Timetable Portal): University picker on mobile",
        "tag": "UNIVERSITY PICKER"
      },
      {
        "src": "/flagships/examtimetables/uon-desktop.jpg",
        "caption": "UoN timetable (desktop)",
        "alt": "Royal Mint (Exam Timetable Portal): UoN timetable on desktop",
        "tag": "UON TIMETABLE"
      },
      {
        "src": "/flagships/examtimetables/uon-mobile.jpg",
        "caption": "UoN timetable (mobile)",
        "alt": "Royal Mint (Exam Timetable Portal): UoN timetable on mobile",
        "tag": "UON TIMETABLE"
      },
      {
        "src": "/flagships/examtimetables/revision-desktop.jpg",
        "caption": "Quick Revision (desktop)",
        "alt": "Royal Mint (Exam Timetable Portal): Quick Revision on desktop",
        "tag": "QUICK REVISION"
      },
      {
        "src": "/flagships/examtimetables/revision-mobile.jpg",
        "caption": "Quick Revision (mobile)",
        "alt": "Royal Mint (Exam Timetable Portal): Quick Revision on mobile",
        "tag": "QUICK REVISION"
      }
    ]
  },
  {
    id: "smartify-notes",
    title: "Smartify Notes",
    subtitle: "Markdown Knowledge Graph & Contextual Study Tool",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "A distraction-free technical note-taking environment featuring instant markdown preview, tag-based knowledge indexing, and local-storage revision history.",
    architectureDetails: [
      "Real-time markdown AST parsing with code syntax highlighting",
      "Encrypted browser storage persistence with export/import capabilities",
      "Clean editorial typography optimized for long reading sessions"
    ],
    techStack: ["React", "TypeScript", "Markdown AST", "Tailwind CSS", "Vercel"],
    liveUrl: "https://smartify-notes.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025",
    screenshot: "/screenshots/smartify-notes.png",
    carouselSlides: [
      {
        src: "/screenshots/smartify-notes.png",
        caption: "Knowledge graph dashboard and interactive study notes list.",
        alt: "Smartify Notes list",
        tag: "NOTES DASHBOARD"
      },
      {
        src: "/screenshots/smartify-editor.png",
        caption: "Distraction-free markdown editor with dual live AST compiler view.",
        alt: "Markdown editor",
        tag: "MARKDOWN EDITOR"
      }
    ]
  },
  {
    id: "student-affairs",
    title: "University Academic Claims & Grievance Clearinghouse",
    subtitle: "Missing Marks, Grade Verification & Administrative Resolution Portal",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "An institutional grievance clearinghouse engineered for the University of Nairobi. Streamlines academic claim submissions, missing marks resolution, and student clearance processes with role-based lecturer and registrar workflows.",
    architectureDetails: [
      "Integrated Google SSO authentication supporting official institutional domain accounts",
      "End-to-end claim ticket lifecycle tracking from submission through department verification",
      "Role-based views for students, course lecturers, and department registrars",
      "High-performance edge-cached interface optimized for sub-second mobile response times"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Google OAuth SSO", "Vercel"],
    liveUrl: "https://studentaffairs-six.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025",
    screenshot: "/projects/uon-student-affairs/slide_1.png",
    carouselSlides: [
      {
        src: "/projects/uon-student-affairs/slide_1.png",
        caption: "Clearinghouse portal landing interface with instant institutional Google SSO.",
        alt: "Student Affairs portal landing with SSO",
        tag: "INSTITUTIONAL SSO"
      },
      {
        src: "/projects/uon-student-affairs/slide_2.png",
        caption: "Student dashboard with ONUSS grade claims status and active ticket verification.",
        alt: "Student claims verification dashboard",
        tag: "STUDENT PORTAL"
      },
      {
        src: "/projects/uon-student-affairs/slide_3.png",
        caption: "Academic grievance claim ticket submission form and progress lifecycle tracker.",
        alt: "Academic claim ticket submission tracker",
        tag: "TICKET TRACKING"
      },
      {
        src: "/projects/uon-student-affairs/slide_4.png",
        caption: "Departmental registrar administrative queue for missing marks verification.",
        alt: "Registrar missing marks review queue",
        tag: "ADMIN CLEARINGHOUSE"
      }
    ]
  },
  {
    id: "edu-metric-ai",
    title: "Edu Metric AI",
    subtitle: "Academic Telemetry, OMR Scanning & Gemini-Powered Diagnostics",
    category: "ai",
    categoryLabel: "AI & Developer Platforms",
    description:
      "An end-to-end educational analytics platform that turns exam data into actionable learning interventions. Features automated OMR assessment scoring, statistical grade distributions, and deep cognitive gap detection driven by Gemini 3.",
    architectureDetails: [
      "AI diagnostic engine powered by Gemini 3 detecting hidden cognitive learning bottlenecks",
      "Optical Mark Recognition (OMR) scanner pipeline converting mobile camera sheets into scorecards",
      "Multi-tier school registration portal integrated with Google Workspace",
      "Mobile-first PWA interface for teachers and administrators in field environments"
    ],
    techStack: ["React", "TypeScript", "Gemini 3 API", "OMR Engine", "Tailwind CSS", "Vercel"],
    liveUrl: "https://edu-metric-ai.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025",
    screenshot: "/projects/edu-metric-ai/slide_1.png",
    carouselSlides: [
      {
        src: "/projects/edu-metric-ai/slide_1.png",
        caption: "Edu-Metric AI platform landing: assessment blueprinting and diagnostic analytics.",
        alt: "Edu-Metric AI landing dashboard",
        tag: "DESKTOP SUITE"
      },
      {
        src: "/projects/edu-metric-ai/slide_2.png",
        caption: "Institutional school registration workflow with Google Workspace integration.",
        alt: "School registration onboarding",
        tag: "SCHOOL ONBOARDING"
      },
      {
        src: "/projects/edu-metric-ai/slide_3.jpeg",
        caption: "Mobile AI Diagnostic Engine analyzing class exam results with Gemini 3.",
        alt: "Mobile Gemini 3 AI diagnostic engine",
        tag: "GEMINI 3 DIAGNOSTICS"
      },
      {
        src: "/projects/edu-metric-ai/slide_4.jpeg",
        caption: "Mobile teacher terminal showing OMR test scoring and competency grade sheets.",
        alt: "Mobile teacher grade terminal",
        tag: "MOBILE OMR GRADES"
      }
    ]
  },
  {
    id: "nubianfit",
    title: "NubianFit Coaching Suite",
    subtitle: "Athlete Performance Telemetry & Progressive Overload Engine",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A comprehensive coaching and athletic management portal designed for trainers. Tracks athlete rosters, compliance metrics, progressive overload programming, and video-based check-in evaluations.",
    architectureDetails: [
      "Coach overview dashboard monitoring active athlete roster compliance and training schedules",
      "Interactive workout program builder with progressive overload volume calculators",
      "Client 1-on-1 messaging suite and video check-in feedback review queue",
      "Responsive dual desktop/mobile coaching interface with offline caching"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Vercel CLI"],
    liveUrl: "https://nubianfit.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025",
    screenshot: "/projects/nubianfit/slide_1.png",
    carouselSlides: [
      {
        src: "/projects/nubianfit/slide_1.png",
        caption: "Coach overview dashboard with athlete performance compliance metrics and schedule.",
        alt: "NubianFit coach dashboard overview",
        tag: "COACH DASHBOARD"
      },
      {
        src: "/projects/nubianfit/slide_2.png",
        caption: "Mobile coach interface displaying active roster, daily workouts, and check-in alerts.",
        alt: "NubianFit mobile coach interface",
        tag: "MOBILE COACH ROSTER"
      },
      {
        src: "/projects/nubianfit/slide_3.png",
        caption: "Athlete workout prescription matrix with progressive overload volume tracking.",
        alt: "Athlete workout prescription view",
        tag: "TRAINING PROTOCOL"
      },
      {
        src: "/projects/nubianfit/slide_4.png",
        caption: "Comprehensive exercise movement library and athlete 1-on-1 messenger.",
        alt: "Exercise library and client chat",
        tag: "CLIENT COMMUNICATIONS"
      }
    ]
  },
  {
    id: "global-orators",
    title: "Global Orators Coach & Debate Suite",
    subtitle: "Speaker Management, Fluency Telemetry & Public Speaking Platform",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "The operational command suite and international presence for the Global Orators initiative. Powers speaker onboarding, rehearsal scheduling, fluency tracking, and speech curriculum distribution across competitive tracks.",
    architectureDetails: [
      "Speaker & Debater Command dashboard tracking rehearsal volume, reviews, and average fluency",
      "Multi-track speaker roster filtering between Academy and Foundation debaters",
      "Curriculum builder and speech drill library for competitive tournament preparation",
      "Touch-optimized mobile roster for on-the-ground debate coaching"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI + Custom DNS"],
    liveUrl: "https://globaloratorsproject.com",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    flagshipRank: 3,
    shots: [
      {
        "label": "Public site",
        "desktop": "/flagships/globalorators/home-desktop.jpg",
        "mobile": "/flagships/globalorators/home-mobile.jpg"
      },
      {
        "label": "Orator app",
        "desktop": "/flagships/globalorators/orator-app-desktop.jpg",
        "mobile": "/flagships/globalorators/orator-app-mobile.jpg"
      },
      {
        "label": "Coach app",
        "desktop": "/flagships/globalorators/coach-dashboard-desktop.jpg",
        "mobile": "/flagships/globalorators/coach-dashboard-mobile.jpg"
      },
      {
        "label": "Speaker roster",
        "desktop": "/flagships/globalorators/coach-roster-desktop.jpg",
        "mobile": "/flagships/globalorators/coach-roster-mobile.jpg"
      }
    ],
    deploymentPlatform: "Vercel CLI + Custom Domain",
    year: "2026",
    screenshot: "/flagships/globalorators/home-desktop.jpg",
    carouselSlides: [
      {
        "src": "/flagships/globalorators/home-desktop.jpg",
        "caption": "Public site (desktop)",
        "alt": "Global Orators Coach & Debate Suite: Public site on desktop",
        "tag": "PUBLIC SITE"
      },
      {
        "src": "/flagships/globalorators/home-mobile.jpg",
        "caption": "Public site (mobile)",
        "alt": "Global Orators Coach & Debate Suite: Public site on mobile",
        "tag": "PUBLIC SITE"
      },
      {
        "src": "/flagships/globalorators/orator-app-desktop.jpg",
        "caption": "Orator app (desktop)",
        "alt": "Global Orators Coach & Debate Suite: Orator app on desktop",
        "tag": "ORATOR APP"
      },
      {
        "src": "/flagships/globalorators/orator-app-mobile.jpg",
        "caption": "Orator app (mobile)",
        "alt": "Global Orators Coach & Debate Suite: Orator app on mobile",
        "tag": "ORATOR APP"
      },
      {
        "src": "/flagships/globalorators/coach-dashboard-desktop.jpg",
        "caption": "Coach app (desktop)",
        "alt": "Global Orators Coach & Debate Suite: Coach app on desktop",
        "tag": "COACH APP"
      },
      {
        "src": "/flagships/globalorators/coach-dashboard-mobile.jpg",
        "caption": "Coach app (mobile)",
        "alt": "Global Orators Coach & Debate Suite: Coach app on mobile",
        "tag": "COACH APP"
      },
      {
        "src": "/flagships/globalorators/coach-roster-desktop.jpg",
        "caption": "Speaker roster (desktop)",
        "alt": "Global Orators Coach & Debate Suite: Speaker roster on desktop",
        "tag": "SPEAKER ROSTER"
      },
      {
        "src": "/flagships/globalorators/coach-roster-mobile.jpg",
        "caption": "Speaker roster (mobile)",
        "alt": "Global Orators Coach & Debate Suite: Speaker roster on mobile",
        "tag": "SPEAKER ROSTER"
      }
    ]
  },
  {
    id: "jeffytab",
    title: "JeffyTab Debate Adjudication Suite",
    subtitle: "AI-Assisted Tournament Tabulation, Pairing Engine & Live Matrix",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A high-precision British Parliamentary debate tournament management system. Delivers sub-second power-pairings, zero institutional clash verification, live WebSocket tab room synchronization, and digital ballot adjudication.",
    architectureDetails: [
      "Sub-second draw generation algorithm enforcing strict institutional clash prevention",
      "Live WebSocket sync for real-time tab room motion releases and ballot submissions",
      "Multi-tier tournament hub handling British Parliamentary team draws and adjudicator pools",
      "Responsive tab director command console with light/dark tournament modes"
    ],
    techStack: ["React", "TypeScript", "WebSockets", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://jeffytabs.xn--jhb4c.com/login",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    flagshipRank: 1,
    shots: [
      {
        "label": "Tab room",
        "desktop": "/flagships/jeffytab/tabroom-desktop.jpg",
        "mobile": "/flagships/jeffytab/tabroom-mobile.jpg"
      },
      {
        "label": "Tabby AI",
        "desktop": "/flagships/jeffytab/tabby-ai-desktop.jpg",
        "mobile": "/flagships/jeffytab/tabby-ai-mobile.jpg"
      },
      {
        "label": "Sign in",
        "desktop": "/flagships/jeffytab/login-desktop.jpg",
        "mobile": "/flagships/jeffytab/login-mobile.jpg"
      }
    ],
    deploymentPlatform: "Vercel CLI",
    year: "2026",
    screenshot: "/flagships/jeffytab/tabroom-desktop.jpg",
    carouselSlides: [
      {
        "src": "/flagships/jeffytab/tabroom-desktop.jpg",
        "caption": "Tab room (desktop)",
        "alt": "JeffyTab Debate Adjudication Suite: Tab room on desktop",
        "tag": "TAB ROOM"
      },
      {
        "src": "/flagships/jeffytab/tabroom-mobile.jpg",
        "caption": "Tab room (mobile)",
        "alt": "JeffyTab Debate Adjudication Suite: Tab room on mobile",
        "tag": "TAB ROOM"
      },
      {
        "src": "/flagships/jeffytab/tabby-ai-desktop.jpg",
        "caption": "Tabby AI (desktop)",
        "alt": "JeffyTab Debate Adjudication Suite: Tabby AI on desktop",
        "tag": "TABBY AI"
      },
      {
        "src": "/flagships/jeffytab/tabby-ai-mobile.jpg",
        "caption": "Tabby AI (mobile)",
        "alt": "JeffyTab Debate Adjudication Suite: Tabby AI on mobile",
        "tag": "TABBY AI"
      },
      {
        "src": "/flagships/jeffytab/login-desktop.jpg",
        "caption": "Sign in (desktop)",
        "alt": "JeffyTab Debate Adjudication Suite: Sign in on desktop",
        "tag": "SIGN IN"
      },
      {
        "src": "/flagships/jeffytab/login-mobile.jpg",
        "caption": "Sign in (mobile)",
        "alt": "JeffyTab Debate Adjudication Suite: Sign in on mobile",
        "tag": "SIGN IN"
      }
    ]
  },
  {
    id: "ksef-display-board",
    title: "KSEF Display Board Generator",
    subtitle: "Science Congress Project Documentation & Visual Board Builder",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "A specialized layout utility built for Kenya Science and Engineering Fair participants to compose, scale, and print regulation project display boards.",
    architectureDetails: [
      "Precise aspect-ratio enforcement conforming to competition guidelines",
      "Multi-panel section orchestrator for abstract, hypothesis, and methodology",
      "High-DPI vector export engine for large-format physical plotters"
    ],
    techStack: ["React", "TypeScript", "Canvas / Vector Print", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ksef-display-board-generator.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025",
    screenshot: "/screenshots/ksef-display-board.png"
  },
  {
    id: "report-labs",
    title: "Report Labs Documentation Portal",
    subtitle: "Technical Laboratory Writeups & Engineering Spec Publisher",
    category: "web",
    categoryLabel: "Production Web Platforms",
    description:
      "An automated technical publishing suite organizing hardware experiments, schematics, and C/C++ firmware documentation into structured chapters.",
    architectureDetails: [
      "Hierarchical chapter navigation with active scroll spy",
      "Embedded PDF viewer and source code block inspectors",
      "Responsive multi-device reading interface"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel CLI"],
    liveUrl: "https://report-labs.vercel.app",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: false,
    deploymentPlatform: "Vercel CLI",
    year: "2025",
    screenshot: "/screenshots/report-labs.png"
  },
  {
    id: "lui-the-lab-bot",
    title: "Lui The Lab Bot",
    subtitle: "Autonomous Fire-Fighting & Chemical Titration Mobile Platform",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A dual-function autonomous mobile robot engineered for precision chemical titration dispensing and rapid fire-suppression response in laboratory environments. Features integrated optical flame arrays, H-bridge DC motor drivers, micro-servo liquid dispensers, and an onboard sensor telemetry bus.",
    architectureDetails: [
      "Precision servo-actuated titration dispenser for controlled reagent metering",
      "Multi-channel optical flame sensor array for rapid 360-degree fire localization",
      "H-bridge motor drive circuitry with differential steering algorithms",
      "Microcontroller interrupt routines coordinating liquid handling and obstacle avoidance"
    ],
    techStack: ["C/C++", "Arduino Core", "L298N H-Bridge", "Flame Array", "Servos", "DC Gearmotors"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Embedded Microcontroller + Motor Hardware",
    year: "2026",
    screenshot: "/projects/lui-the-lab-bot/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/lui-the-lab-bot/slide_1.jpeg",
        caption: "Lui The Lab Bot fully assembled mobile chassis with sensor mast and liquid dispenser.",
        alt: "Lui The Lab Bot mobile chassis",
        tag: "MOBILE CHASSIS"
      },
      {
        src: "/projects/lui-the-lab-bot/slide_2.jpeg",
        caption: "Motor drive bridge and power distribution bus wiring during bench calibration.",
        alt: "Motor drive bridge and wiring",
        tag: "POWER BUS & DRIVER"
      },
      {
        src: "/projects/lui-the-lab-bot/slide_3.jpeg",
        caption: "Microcontroller control board and sensor interface pinouts.",
        alt: "Microcontroller control board",
        tag: "CONTROLLER BOARD"
      },
      {
        src: "/projects/lui-the-lab-bot/slide_4.jpeg",
        caption: "Chemical titration servo arm and nozzle assembly for precision dispensing.",
        alt: "Chemical titration arm",
        tag: "TITRATION MECHANISM"
      }
    ]
  },
  {
    id: "mini-lui-fire-bot",
    title: "Mini Lui Fire-Fighting Bot",
    subtitle: "Compact Autonomous Rapid-Response Fire Suppression Unit",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A compact mobile robotic platform dedicated to autonomous flame detection and extinguisher delivery. Built with high-torque gearmotors, infrared flame detection arrays, a submersible DC water pump, and autonomous search-and-extinguish navigation logic.",
    architectureDetails: [
      "Multi-quadrant infrared flame sensor array for rapid triangulation of heat sources",
      "High-pressure DC submersible pump and directional extinguisher nozzle",
      "Compact chassis tuned for navigating narrow corridors and confined test spaces",
      "Autonomous state machine: Patrol, Triangulate, Approach, Extinguish, and Confirm"
    ],
    techStack: ["Embedded C", "Microcontroller", "IR Sensor Array", "Submersible Pump", "Differential Drive"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Bare Metal Firmware + Actuators",
    year: "2026",
    screenshot: "/projects/mini-lui/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/mini-lui/slide_1.jpeg",
        caption: "Mini Lui autonomous fire-suppression rover with multi-channel flame sensor array and directional pump.",
        alt: "Mini Lui robot chassis",
        tag: "FIRE BOT CHASSIS"
      },
      {
        src: "/projects/mini-lui/slide_2.jpeg",
        caption: "Active flame test: optical detection and closed-loop motor orientation toward an open lighter flame.",
        alt: "Bench test flame detection with lighter",
        tag: "FLAME ACQUISITION"
      },
      {
        src: "/projects/mini-lui/slide_3.jpeg",
        caption: "Autonomous roving deployment with dual 8x8 LED matrix status telemetry eyes active.",
        alt: "Autonomous floor navigation",
        tag: "AUTONOMOUS ROVING"
      },
      {
        src: "/projects/mini-lui/slide_4.jpeg",
        caption: "Electronics deck showing microcontroller, motor shield, and sensor routing.",
        alt: "Electronics deck and wiring",
        tag: "ELECTRONICS DECK"
      }
    ]
  },
  {
    id: "iron-dome-radar",
    title: "Autonomous Threat Tracking & Radar Turret",
    subtitle: "RP2040 Pan-Tilt Ultrasonic & Optical Target Tracking System",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "An autonomous dual-axis tracking radar turret engineered on the Raspberry Pi Pico (RP2040). Combines ultrasonic distance ranging with multi-spectral optical detectors to acquire, track, and lock onto moving targets in real-time.",
    architectureDetails: [
      "Dual-axis pan-tilt servo mechanism with sub-degree angular positioning",
      "HC-SR04 ultrasonic transducer for real-time proximity and vector calculation",
      "Optical sensor array providing multi-quadrant line-of-sight tracking",
      "Visual and acoustic alert telemetry with real-time target lock confirmation"
    ],
    techStack: ["RP2040", "C/C++", "HC-SR04 Ultrasonic", "Servo Pan-Tilt", "Optical Sensors", "PWM Control"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "RP2040 Firmware + Pan-Tilt Gimbal",
    year: "2026",
    screenshot: "/projects/iron-dome-radar/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/iron-dome-radar/slide_1.jpeg",
        caption: "RP2040 breadboard controller bus and pan-tilt HC-SR04 ultrasonic sensor turret.",
        alt: "RP2040 controller and sensor turret",
        tag: "SENSOR TURRET"
      },
      {
        src: "/projects/iron-dome-radar/slide_2.jpeg",
        caption: "Dynamic object tracking: turret actively acquiring and following an approaching target.",
        alt: "Turret tracking moving target",
        tag: "TARGET TRACKING"
      },
      {
        src: "/projects/iron-dome-radar/slide_3.jpeg",
        caption: "Target acquisition state: telemetry LEDs indicating distance lock and azimuth alignment.",
        alt: "Target lock confirmation",
        tag: "TARGET LOCK"
      },
      {
        src: "/projects/iron-dome-radar/slide_4.jpeg",
        caption: "Servo pan-tilt gimbal mechanism executing sweep scan across the 180-degree sector.",
        alt: "Pan-tilt gimbal mechanism",
        tag: "SECTOR SWEEP"
      }
    ]
  },
  {
    id: "chroma-scan",
    title: "Galvaniy Chroma-Scan",
    subtitle: "Digital Spectrophotometer & Optical Analytical Colorimeter",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "An embedded analytical instrument built for rapid biochemical sample analysis and colorimetric testing. Features a light-isolated optical cuvette chamber, calibrated photodetector array, SSD1306 OLED interface, and an ESP8266 WiFi module for direct cloud lab telemetry.",
    architectureDetails: [
      "Light-isolated optical transmission chamber for standard laboratory cuvettes",
      "Calibrated optical photodetector with multi-wavelength absorbance calculation",
      "SSD1306 graphical OLED user interface with multi-level calibration menus",
      "ESP8266 wireless telemetry bridge streaming absorbance data to laboratory cloud databases"
    ],
    techStack: ["Embedded C++", "Arduino Nano", "ESP8266 WiFi", "SSD1306 OLED", "Optical Sensor", "I2C/SPI"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Galvaniy Technologies Analytical Firmware",
    year: "2026",
    screenshot: "/projects/chroma-scan/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/chroma-scan/slide_1.jpeg",
        caption: "Chroma-Scan boot sequence on high-contrast OLED display by Galvaniy Technologies.",
        alt: "Chroma-Scan OLED boot screen",
        tag: "OLED INTERFACE"
      },
      {
        src: "/projects/chroma-scan/slide_2.jpeg",
        caption: "Measurement standby state with optical light chamber and calibrated sample cuvette.",
        alt: "Optical test chamber and cuvette",
        tag: "TEST CHAMBER"
      },
      {
        src: "/projects/chroma-scan/slide_3.jpeg",
        caption: "Analytical menu interface: preset wavelength values versus manual curve calibration.",
        alt: "Calibration menu on OLED",
        tag: "CALIBRATION MENU"
      },
      {
        src: "/projects/chroma-scan/slide_4.jpeg",
        caption: "Sensor processing breadboard: ESP8266 wireless telemetry bridge and analog conditioning circuit.",
        alt: "ESP8266 and processing breadboard",
        tag: "TELEMETRY BRIDGE"
      }
    ]
  },
  {
    id: "ai-solar-tracker",
    title: "Dual-Axis Closed-Loop Solar Tracker",
    subtitle: "Autonomous Azimuth & Elevation Light-Optimizing PV Controller",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A closed-loop dual-axis solar tracking platform engineered to maximize photovoltaic energy capture. Employs four directional light-dependent resistor (LDR) quadrants separated by shadow collimators to calculate differential flux and drive twin servo gimbals.",
    architectureDetails: [
      "Closed-loop differential light vector tracking eliminating static astrological lookups",
      "Dual servo mechanical gimbal providing 180-degree azimuth and 90-degree elevation tracking",
      "Real-time 16x2 LCD telemetry streaming differential lux, panel angle, and tracking status",
      "Integrated sleep and dawn re-orientation state machines for energy conservation"
    ],
    techStack: ["Arduino Core", "C++", "Dual SG90 Servos", "LDR Quadrant Array", "16x2 I2C LCD", "Photovoltaic Panel"],
    liveUrl: "/reports.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "Arduino Firmware + Dual-Servo Gimbal",
    year: "2026",
    screenshot: "/projects/ai-solar-tracker/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/ai-solar-tracker/slide_1.jpeg",
        caption: "Dual-axis solar tracking assembly with quadrant collimators and PV panel.",
        alt: "Solar tracker assembly and PV panel",
        tag: "PV GIMBAL"
      },
      {
        src: "/projects/ai-solar-tracker/slide_2.jpeg",
        caption: "Tracking sweep: twin servo gimbals reorienting panel toward highest lux vector.",
        alt: "Servo gimbal reorientation sweep",
        tag: "ACTIVE TRACKING"
      },
      {
        src: "/projects/ai-solar-tracker/slide_3.jpeg",
        caption: "Telemetry station: 16x2 LCD display streaming instantaneous differential lux and angle data.",
        alt: "LCD telemetry display",
        tag: "LCD TELEMETRY"
      },
      {
        src: "/projects/ai-solar-tracker/slide_4.jpeg",
        caption: "Elevation actuator holding panel at optimal incident angle under changing lighting conditions.",
        alt: "Elevation actuator holding angle",
        tag: "OPTIMAL INCIDENCE"
      }
    ]
  },
  {
    id: "rfid-smart-attendance-station",
    title: "RFID Smart Student Attendance Terminal",
    subtitle: "MIFARE 1K Authentication & Dual-Core Wireless Gateway",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A contactless student attendance terminal designed for university lecture halls. Integrates an MFRC522 RFID reader over high-speed SPI, an 8x8 LED matrix visual confirmation display, an audio annunciator, and an ESP-based cloud synchronization gateway.",
    architectureDetails: [
      "Contactless MIFARE Classic 1K card interrogation over 13.56 MHz SPI interface",
      "MAX7219 cascaded 8x8 LED dot-matrix visual confirmation displays",
      "Dual-core task separation: core 0 handles card interrupts, core 1 handles network queues",
      "Autonomous offline caching with automatic cloud sync when network reconnects"
    ],
    techStack: ["RP2040", "ESP32", "MFRC522 RFID", "MAX7219 Matrix", "SPI/UART", "C++"],
    liveUrl: "/final-project-rfid-attendance.html",
    githubUrl: "https://github.com/mr-ceo7/mylandingpage",
    isFlagship: false,
    deploymentPlatform: "RP2040 + ESP32 Hybrid Hardware",
    year: "2026",
    screenshot: "/projects/rfid-attendance/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/rfid-attendance/slide_1.jpeg",
        caption: "Full hardware layout: RC522 RFID scanner, MAX7219 8x8 LED matrices, buzzer, and controller.",
        alt: "Full RFID terminal hardware assembly",
        tag: "HARDWARE LAYOUT"
      },
      {
        src: "/projects/rfid-attendance/slide_2.jpeg",
        caption: "Card scan verification sequence and visual status display layout.",
        alt: "Card scan verification display",
        tag: "SCAN VERIFICATION"
      },
      {
        src: "/projects/rfid-attendance/slide_3.jpeg",
        caption: "SPI bus routing and multi-module interconnect cabling on test chassis.",
        alt: "SPI bus cabling and circuit wiring",
        tag: "CIRCUIT ROUTING"
      },
      {
        src: "/projects/rfid-attendance/slide_4.jpeg",
        caption: "Benchtop validation of rapid sequential card authentication.",
        alt: "Benchtop card authentication test",
        tag: "BENCH VALIDATION"
      }
    ]
  },
  {
    id: "calcos-hardware",
    title: "calcOS: Casio fx-991ES Plus AI Co-Processor Mod",
    subtitle: "Hardware-Hacked Scientific Calculator with AI Prompting & Discrete Micro-OLED",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
    description:
      "A deep hardware modification of the Casio fx-991ES PLUS scientific calculator. Integrates a custom Wi-Fi co-processor concealed behind the solar cell bezel, retrofits a secondary discrete micro-OLED screen, and runs custom calcOS firmware featuring CalcoChat (AI math & physics assistant) and CalcoPlay media playback.",
    architectureDetails: [
      "Custom calcOS v1.43 embedded firmware running on low-power Wi-Fi co-processor",
      "Discrete high-contrast micro-OLED retrofitted into the solar panel window cavity",
      "CalcoChat AI prompting engine for calculus, physics, and complex problem derivation",
      "CalcoPlay media playback engine rendering text and graphical files directly on-device",
      "Precision key matrix tapping enabling native calculator keypad interaction"
    ],
    techStack: ["Casio fx-991ES Plus", "ESP8266/ESP32", "Micro-OLED", "C/C++", "Hardware Reverse-Engineering"],
    liveUrl: "https://sharpbrains.xn--jhb4c.com/",
    githubUrl: "https://github.com/mr-ceo7",
    isFlagship: true,
    deploymentPlatform: "Custom Embedded Hardware Mod",
    year: "2026",
    screenshot: "/projects/calcos-hardware/slide_1.jpeg",
    carouselSlides: [
      {
        src: "/projects/calcos-hardware/slide_1.jpeg",
        caption: "Casio fx-991ES Plus modified with discrete micro-OLED running calcOS v1.43 firmware.",
        alt: "Casio fx-991ES Plus calcOS mod front view",
        tag: "FIRMWARE BOOT"
      },
      {
        src: "/projects/calcos-hardware/slide_2.jpeg",
        caption: "CalcoPlay graphical media player and application browser running on the discrete display.",
        alt: "CalcoPlay interface on calculator display",
        tag: "CALCOPLAY ENGINE"
      },
      {
        src: "/projects/calcos-hardware/slide_3.jpeg",
        caption: "CalcoChat AI prompting engine running interactive math and science queries on-device.",
        alt: "CalcoChat AI prompting interface",
        tag: "CALCOCHAT AI"
      },
      {
        src: "/projects/calcos-hardware/slide_4.jpeg",
        caption: "Stealth casing design and precision bezel integration preserving original calculator aesthetics.",
        alt: "Stealth hardware casing and display integration",
        tag: "STEALTH CASING"
      },
      {
        src: "/projects/calcos-hardware/slide_5.jpeg",
        caption: "Internal co-processor wiring and solar cavity retrofitting bench examination.",
        alt: "Internal co-processor hardware modification",
        tag: "HARDWARE INTERNALS"
      }
    ]
  }
];
