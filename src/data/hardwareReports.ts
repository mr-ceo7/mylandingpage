export interface LabReport {
  week: string;
  title: string;
  topic: string;
  description: string;
  pdfPath: string;
  tools: string[];
}

export interface HardwarePhoto {
  src: string;
  caption: string;
  alt: string;
}

export const LAB_REPORTS: LabReport[] = [
  {
    week: "Week 01",
    title: "Embedded Systems Fundamentals & Toolchains",
    topic: "Development Environment, Cross-Compilers & Microcontroller Architectures",
    description: "Configured toolchains for ARM Cortex-M microcontrollers. Set up GCC, GDB, OpenOCD, and initialized the bare-metal development pipeline.",
    pdfPath: "/reports/week1_report.pdf",
    tools: ["GCC ARM", "OpenOCD", "CMake", "GDB"]
  },
  {
    week: "Week 02",
    title: "C Memory Models & Structure Geometry",
    topic: "Direct Memory Manipulation, Struct Alignment & Bitfields",
    description: "Analyzed memory layouts, padding, and alignment in embedded C. Implemented geometric algorithms validating pointer arithmetic and register structures.",
    pdfPath: "/reports/week2_report.pdf",
    tools: ["C99", "GDB", "Memory Mapping", "Valgrind"]
  },
  {
    week: "Week 03",
    title: "Digital I/O & Interrupt Service Routines",
    topic: "Hardware Timers, External Interrupts & Switch Debouncing",
    description: "Programmed GPIO registers directly. Built debouncing state machines using timer interrupts without blocking CPU execution cycles.",
    pdfPath: "/reports/week3_report.pdf",
    tools: ["RP2040", "GPIO", "Hardware Timers", "Logic Analyzer"]
  },
  {
    week: "Week 04",
    title: "Pointers, Dynamic Buffers & Serial Interfaces",
    topic: "Circular Ring Buffers & UART Packet Framing",
    description: "Engineered circular buffers for UART serial communications with frame delimiters and checksum verification.",
    pdfPath: "/reports/week4_report.pdf",
    tools: ["UART", "Ring Buffers", "Bitwise Ops", "Serial Console"]
  },
  {
    week: "Week 05",
    title: "Low-Power Modes & Analog-to-Digital Conversion",
    topic: "ADC Calibration, DMA Channels & Voltage Sampling",
    description: "Configured ADC channels for continuous sensor voltage acquisition using Direct Memory Access (DMA) to minimize core utilization.",
    pdfPath: "/reports/week5_report.pdf",
    tools: ["ADC", "DMA", "Voltage Dividers", "Oscilloscope"]
  },
  {
    week: "Week 07–08",
    title: "Inter-Integrated Circuit (I2C) & SPI Peripherals",
    topic: "Bus Arbitration, Slave Addressing & Sensor Acquisition",
    description: "Interfaced MPU6050 and OLED display peripherals over I2C and SPI buses. Solved bus collision and clock-stretching constraints.",
    pdfPath: "/reports/week7_8_report.pdf",
    tools: ["SPI", "I2C", "OLED SSD1306", "Signal Debugging"]
  },
  {
    week: "Week 09–10",
    title: "Wireless Telemetry & HTTP Client Sockets",
    topic: "ESP32 WiFi Networking & REST Webhook Sync",
    description: "Implemented asynchronous socket communication on the ESP32. Engineered a local web server to dispatch sensor telemetry to remote cloud endpoints.",
    pdfPath: "/reports/week9_10_report.pdf",
    tools: ["ESP32", "TCP/IP Sockets", "HTTP REST", "JSON Parser"]
  },
  {
    week: "Week 11",
    title: "RFID Cryptographic Protocols & Security",
    topic: "MIFARE Classic 1K Cards, RC522 Reader & Authentication",
    description: "Implemented SPI driver communication with the RC522 RFID reader. Handled block authentication and encrypted Sector 1 memory storage.",
    pdfPath: "/reports/week11_report.pdf",
    tools: ["MFRC522", "MIFARE 1K", "SPI Bus", "Cryptographic Keys"]
  },
  {
    week: "Week 12",
    title: "Integrated Capstone: Student Attendance Station",
    topic: "Final Production Assembly, Dual-Core Synchronization & Enclosure",
    description: "Completed full system integration: Raspberry Pi Pico W reading student badges, transmitting to ESP32 telemetry gateway, and rendering live confirmation on an animated display.",
    pdfPath: "/reports/week12_report.pdf",
    tools: ["RP2040 Dual-Core", "ESP32", "RC522", "SSD1306 OLED", "C++"]
  }
];

export const HARDWARE_PHOTOS: HardwarePhoto[] = [
  {
    src: "/projects/rfid-attendance/slide_1.jpeg",
    caption: "Full bench hardware layout: RC522 RFID scanner, cascaded MAX7219 8x8 LED matrices, audio buzzer, and microcontroller bus.",
    alt: "Full RFID terminal hardware assembly on bench"
  },
  {
    src: "/projects/rfid-attendance/slide_2.jpeg",
    caption: "Card scan verification sequence with real-time dot-matrix status output.",
    alt: "Card scan verification display"
  },
  {
    src: "/projects/rfid-attendance/slide_3.jpeg",
    caption: "SPI high-speed signal bus routing and multi-module interconnect cabling.",
    alt: "SPI bus cabling and circuit wiring"
  },
  {
    src: "/projects/rfid-attendance/slide_4.jpeg",
    caption: "Benchtop validation of rapid sequential contactless badge authentication.",
    alt: "Benchtop card authentication test"
  },
  {
    src: "/projects/rfid/IMG-20260710-WA0009.jpg",
    caption: "Integrated RFID attendance verification prototype in bench testing enclosure.",
    alt: "Integrated RFID attendance prototype enclosure"
  },
  {
    src: "/projects/rfid/IMG-20260709-WA0050.jpg",
    caption: "Gearbox Academy final project presentation and live hardware demonstration.",
    alt: "Capstone project presentation at Gearbox Academy"
  }
];
