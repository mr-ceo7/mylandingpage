/* ============================================
   Gearbox Academy — Dynamic Palette & Effects
   ============================================ */

// ---- Dynamic Dark Color Palettes ----
const PALETTES = [
  {
    name: 'Midnight Indigo',
    bgPrimary: '#0a0a1a',
    bgSecondary: '#12122a',
    bgGradient1: '#0a0a1a',
    bgGradient2: '#1a1a3e',
    bgGradient3: '#0d0d2b',
    accentPrimary: '#6c63ff',
    accentSecondary: '#a78bfa',
    accentGlow: 'rgba(108, 99, 255, 0.4)',
    particleColor: 'rgba(108, 99, 255, 0.3)',
  },
  {
    name: 'Deep Amethyst',
    bgPrimary: '#0f0a1a',
    bgSecondary: '#1a1028',
    bgGradient1: '#0f0a1a',
    bgGradient2: '#2d1b4e',
    bgGradient3: '#1a0f30',
    accentPrimary: '#a855f7',
    accentSecondary: '#c084fc',
    accentGlow: 'rgba(168, 85, 247, 0.4)',
    particleColor: 'rgba(168, 85, 247, 0.3)',
  },
  {
    name: 'Ocean Abyss',
    bgPrimary: '#0a1218',
    bgSecondary: '#0f1a24',
    bgGradient1: '#0a1218',
    bgGradient2: '#0d2137',
    bgGradient3: '#081a2a',
    accentPrimary: '#06b6d4',
    accentSecondary: '#67e8f9',
    accentGlow: 'rgba(6, 182, 212, 0.4)',
    particleColor: 'rgba(6, 182, 212, 0.3)',
  },
  {
    name: 'Ember Night',
    bgPrimary: '#1a0a0a',
    bgSecondary: '#201010',
    bgGradient1: '#1a0a0a',
    bgGradient2: '#2d1515',
    bgGradient3: '#1a0d0d',
    accentPrimary: '#f43f5e',
    accentSecondary: '#fb7185',
    accentGlow: 'rgba(244, 63, 94, 0.4)',
    particleColor: 'rgba(244, 63, 94, 0.3)',
  },
  {
    name: 'Emerald Shadow',
    bgPrimary: '#0a1a10',
    bgSecondary: '#0f2018',
    bgGradient1: '#0a1a10',
    bgGradient2: '#133024',
    bgGradient3: '#0d1a14',
    accentPrimary: '#10b981',
    accentSecondary: '#6ee7b7',
    accentGlow: 'rgba(16, 185, 129, 0.4)',
    particleColor: 'rgba(16, 185, 129, 0.3)',
  },
  {
    name: 'Golden Dusk',
    bgPrimary: '#1a150a',
    bgSecondary: '#201c10',
    bgGradient1: '#1a150a',
    bgGradient2: '#2d2515',
    bgGradient3: '#1a180d',
    accentPrimary: '#f59e0b',
    accentSecondary: '#fbbf24',
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    particleColor: 'rgba(245, 158, 11, 0.3)',
  },
  {
    name: 'Neon Frost',
    bgPrimary: '#0a0f1a',
    bgSecondary: '#101520',
    bgGradient1: '#0a0f1a',
    bgGradient2: '#151e35',
    bgGradient3: '#0d1225',
    accentPrimary: '#3b82f6',
    accentSecondary: '#93c5fd',
    accentGlow: 'rgba(59, 130, 246, 0.4)',
    particleColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    name: 'Rose Quartz',
    bgPrimary: '#1a0a14',
    bgSecondary: '#20101a',
    bgGradient1: '#1a0a14',
    bgGradient2: '#2d152a',
    bgGradient3: '#1a0d18',
    accentPrimary: '#ec4899',
    accentSecondary: '#f9a8d4',
    accentGlow: 'rgba(236, 72, 153, 0.4)',
    particleColor: 'rgba(236, 72, 153, 0.3)',
  },
];

// Apply a random palette
function applyRandomPalette() {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const root = document.documentElement;

  root.style.setProperty('--bg-primary', palette.bgPrimary);
  root.style.setProperty('--bg-secondary', palette.bgSecondary);
  root.style.setProperty('--bg-gradient-1', palette.bgGradient1);
  root.style.setProperty('--bg-gradient-2', palette.bgGradient2);
  root.style.setProperty('--bg-gradient-3', palette.bgGradient3);
  root.style.setProperty('--accent-primary', palette.accentPrimary);
  root.style.setProperty('--accent-secondary', palette.accentSecondary);
  root.style.setProperty('--accent-glow', palette.accentGlow);
  root.style.setProperty('--particle-color', palette.particleColor);
  root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
  root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');

  return palette;
}

// ---- Floating Particles ----
class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.floor((this.canvas.width * this.canvas.height) / 15000);
    this.particles = [];
    for (let i = 0; i < Math.min(count, 80); i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const particleColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent-primary')
      .trim();

    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = particleColor;
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fill();
    });

    // Draw connections
    this.ctx.globalAlpha = 1;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = particleColor;
          this.ctx.globalAlpha = 0.05 * (1 - dist / 120);
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

// ---- Mobile Navigation ----
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

// ---- Active Navigation Link ----
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}

// ---- Initialize Everything ----
document.addEventListener('DOMContentLoaded', () => {
  applyRandomPalette();
  new ParticleSystem('particles-canvas');
  initMobileNav();
  setActiveNavLink();
  initScrollAnimations();
});
