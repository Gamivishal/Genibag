import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// Dedicated brand SVG icons for the vertical follow strip
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.31a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * Hero Section matching the Bixoo corporate consulting pattern:
 * - High-impact full-bleed slider with background imagery and dark overlay
 * - Bixoo float-bob-x floating shape decoration
 * - Vertical social follow strip on left
 * - Arrow navigation controls (prev/next) & slide indicator dots
 * - Bold split-color typography with primary accent
 * - Dual action buttons (Primary CTA with up-right arrow + Glassmorphism button)
 */
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bg: '/bixoo/hero-bg.jpg',
      badge: 'GENIE BAG HR CONSULTANCY • THE MANAGEMENT BASKET',
      titlePart1: 'Clarity for ',
      titleHighlight: 'Your People.',
      titlePart2: 'Confidence for ',
      titleBold: 'Your Business.',
      description:
        'We help organisations turn people processes into clear, consistent and review-ready HR practices through structured compliance audits and actionable advisory.',
      checks: [
        'People Records',
        'Policies & Process',
        'Risk & Action Plan',
      ],
      primaryBtn: 'Schedule an HR Audit',
      secondaryBtn: 'Explore Audit Scope',
      primaryHref: '#consultation-form',
      secondaryHref: '#services-section',
    },
    {
      id: 2,
      bg: '/bixoo/hero-bg2.jpg',
      badge: 'HR COMPLIANCE & PROCESS AUDIT • PROPORTIONATE GOVERNANCE',
      titlePart1: 'Practical, Proportionate ',
      titleHighlight: 'HR Governance',
      titlePart2: 'Tailored to ',
      titleBold: 'Your Workplace.',
      description:
        'From discovery to a practical action plan. We give leadership a clear, evidence-based view of risks, priorities, and corrective actions—not just a stack of documents.',
      checks: [
        'Independent Review',
        'Risk Prioritisation',
        'Actionable Roadmaps',
      ],
      primaryBtn: 'Book a Consultation',
      secondaryBtn: 'See Our Approach',
      primaryHref: '#consultation-form',
      secondaryHref: '#methodology-section',
    },
  ];

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-navy">
      {/* Background Slides with smooth fade transition */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={s.bg}
            alt="Corporate HR Consulting"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
          />
          {/* Dark scrim overlay matching Bixoo */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/80" />
        </div>
      ))}

      {/* Floating Shape Decoration (Bixoo float-bob-x effect) */}
      <div className="hidden lg:block absolute right-16 top-1/3 z-10 animate-float-x pointer-events-none opacity-80">
        <img
          src="/bixoo/icon/hero-shape-1.png"
          alt=""
          className="w-20 sm:w-28 h-auto object-contain filter drop-shadow-lg"
        />
      </div>

      {/* Vertical Social Strip on Left (Bixoo Signature Pattern) */}
      <div className="hidden xl:flex fixed-or-absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 text-white/60">
        <span className="w-px h-16 bg-white/20" />
        <a
          href={siteConfig.socialLinks[0].href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition-colors hover:scale-110 p-1"
        >
          <LinkedInIcon />
        </a>
        <a
          href={siteConfig.socialLinks[1].href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-primary transition-colors hover:scale-110 p-1"
        >
          <FacebookIcon />
        </a>
        <a
          href={siteConfig.socialLinks[2].href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-primary transition-colors hover:scale-110 p-1"
        >
          <InstagramIcon />
        </a>
        <a
          href={siteConfig.socialLinks[3].href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-primary transition-colors hover:scale-110 p-1"
        >
          <XIcon />
        </a>
        <span className="text-[10px] font-bold tracking-widest uppercase rotate-90 my-4 text-white/40">
          FOLLOW
        </span>
      </div>

      {/* Main Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full text-left">
        <div className="max-w-3xl space-y-6">
          {/* Sub-title badge */}
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm">
              {slide.badge}
            </span>
          </div>

          {/* Large Bold Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
            {slide.titlePart1}
            <span className="text-primary">{slide.titleHighlight}</span>
            <br />
            {slide.titlePart2}
            <b className="text-white font-bold">{slide.titleBold}</b>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
            {slide.description}
          </p>

          {/* 3 Checkmark Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-white/90 text-sm font-semibold">
            {slide.checks.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* Dual Action Buttons (Bixoo Signature Style) */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Orange Button */}
            <a
              href={slide.primaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft hover:shadow-soft-md transition-all duration-200 group"
            >
              <span>{slide.primaryBtn}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Ghost Glassmorphic Button */}
            <a
              href={slide.secondaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/30 backdrop-blur-md rounded-brand transition-all duration-200 group"
            >
              <span>{slide.secondaryBtn}</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Prev / Next Array Buttons (Right Edge or Bottom) */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-3">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators on Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
