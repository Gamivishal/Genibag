import React from 'react';
import { Shield, HeartHandshake, TrendingUp, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Slide 02 / THE BIG PICTURE:
 * Good HR is more than paperwork.
 * 3 Pillars: Protect the business, Support employees, Enable better decisions.
 */
export default function ValueProposition() {
  const pillars = [
    {
      id: 'protect',
      symbol: '◈',
      title: 'Protect the Business',
      tagline: 'Spot gaps early & ensure discipline',
      description:
        'Spot process gaps early, clarify responsibilities, and support better compliance discipline before risks turn into statutory disputes or financial liabilities.',
      accentColor: 'primary',
      accentBg: 'bg-primary-light',
      accentText: 'text-primary',
      borderColor: 'border-primary/20',
      points: [
        'Statutory inspection readiness',
        'Transparent register maintenance',
        'Vendor & contractor compliance',
      ],
    },
    {
      id: 'support',
      symbol: '♡',
      title: 'Support Employees',
      tagline: 'Fair, understandable workplaces',
      description:
        'Create fair, understandable processes for policies, communication, employee records, and grievances that build genuine workplace trust.',
      accentColor: 'teal',
      accentBg: 'bg-teal-light',
      accentText: 'text-teal',
      borderColor: 'border-teal/20',
      points: [
        'Clear handbook & code of conduct',
        'Confidential grievance handling',
        'POSH awareness & ICC compliance',
      ],
    },
    {
      id: 'enable',
      symbol: '↗',
      title: 'Enable Better Decisions',
      tagline: 'Practical view of risks & priorities',
      description:
        'Give leadership a clear, practical view of operational risks, priorities, and ownership—not just an overwhelming stack of unorganised documents.',
      accentColor: 'blue',
      accentBg: 'bg-blue-light',
      accentText: 'text-blue',
      borderColor: 'border-blue/20',
      points: [
        'Executive summaries for board/CEO',
        'Risk-prioritised corrective actions',
        'Assigned timelines and dependencies',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            01 / The Big Picture
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            Good HR is more than paperwork.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            We help organisations turn everyday people processes into clear,
            consistent, and review-ready practices that withstand scrutiny.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-warm-grey rounded-brand-lg p-7 border border-warm-border hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header Icon / Symbol */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-brand flex items-center justify-center font-bold text-lg ${pillar.accentBg} ${pillar.accentText}`}
                  >
                    {pillar.symbol}
                  </div>
                  <span className="text-xs font-semibold text-navy-muted uppercase tracking-wider">
                    Pillar
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-navy group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-navy-muted mt-0.5">
                    {pillar.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-navy-muted leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <div className="pt-2 space-y-2 border-t border-warm-border/60">
                  {pillar.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-navy">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.accentText} shrink-0`} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Focus Statement Banner (From Slide 02) */}
        <div className="mt-12 p-6 rounded-brand-lg bg-navy text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="text-left space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Core Philosophy
            </span>
            <p className="text-base sm:text-lg font-heading font-medium text-white/95">
              &ldquo;{siteConfig.brand.mission}&rdquo;
            </p>
          </div>
          <a
            href="#services-section"
            className="shrink-0 px-5 py-2.5 rounded-brand bg-white/10 hover:bg-primary text-white text-xs font-semibold transition-colors duration-200"
          >
            See Our 6 Services &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
