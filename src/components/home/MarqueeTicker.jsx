import React from 'react';

/**
 * Marquee Ticker Section matching Bixoo's signature `marquee-section-2`:
 * Continuous infinite scrolling banner showcasing core HR service capabilities.
 */
export default function MarqueeTicker() {
  const items = [
    'HR Compliance Review',
    'HR Process Audit',
    'Policy & Documentation',
    'Employee Records Audit',
    'Compensation & Benefits',
    'Statutory Readiness',
    'POSH Governance & ICC',
    'Action Plan & Advisory',
  ];

  return (
    <section className="bg-navy border-t border-b border-white/10 py-5 overflow-hidden relative z-20">
      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {/* First track */}
        <div className="flex items-center space-x-5 shrink-0">
          {items.map((item, idx) => (
            <div
              key={`track1-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all duration-200 group cursor-default"
            >
              <span className="text-xs sm:text-sm font-heading font-semibold text-white tracking-wide">
                {item}
              </span>
              <img
                src="/bixoo/hero-marquee-icon.png"
                alt=""
                className="w-4 h-4 object-contain group-hover:rotate-45 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Duplicate second track for continuous infinite seamless loop */}
        <div className="flex items-center space-x-5 shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div
              key={`track2-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all duration-200 group cursor-default"
            >
              <span className="text-xs sm:text-sm font-heading font-semibold text-white tracking-wide">
                {item}
              </span>
              <img
                src="/bixoo/hero-marquee-icon.png"
                alt=""
                className="w-4 h-4 object-contain group-hover:rotate-45 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
