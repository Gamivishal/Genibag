import React from 'react';
import {
  Compass,
  FileStack,
  Search,
  SlidersHorizontal,
  FileText,
  LifeBuoy,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Slide 05 / OUR METHOD:
 * From discovery to a practical action plan.
 * 6 Steps: Discover, Collect, Review, Prioritise, Report, Support.
 */
export default function AuditMethodology() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Context & Profile',
      description:
        'Understand your business context, workforce profile, operating locations, and specific leadership concerns.',
      icon: <Compass className="w-5 h-5" />,
      accent: 'primary',
      bg: 'bg-primary-light',
      text: 'text-primary',
    },
    {
      number: '02',
      title: 'COLLECT',
      subtitle: 'Evidence Gathering',
      description:
        'Securely request relevant records, employee documentation, policies, statutory registers, and process evidence.',
      icon: <FileStack className="w-5 h-5" />,
      accent: 'teal',
      bg: 'bg-teal-light',
      text: 'text-teal',
    },
    {
      number: '03',
      title: 'REVIEW',
      subtitle: 'Sample Testing',
      description:
        'Test representative samples, cross-compare documentation against actual workflows, and identify process gaps.',
      icon: <Search className="w-5 h-5" />,
      accent: 'blue',
      bg: 'bg-blue-light',
      text: 'text-blue',
    },
    {
      number: '04',
      title: 'PRIORITISE',
      subtitle: 'Risk Classification',
      description:
        'Classify all findings by severity, statutory exposure, operational urgency, and practical effort required to resolve.',
      icon: <SlidersHorizontal className="w-5 h-5" />,
      accent: 'magenta',
      bg: 'bg-magenta-light',
      text: 'text-magenta',
    },
    {
      number: '05',
      title: 'REPORT',
      subtitle: 'Evidence-Led Findings',
      description:
        'Present concise, evidence-led observations, executive summaries, risk maps, and specific corrective actions.',
      icon: <FileText className="w-5 h-5" />,
      accent: 'green',
      bg: 'bg-green-light',
      text: 'text-green',
    },
    {
      number: '06',
      title: 'SUPPORT',
      subtitle: 'Closure & Follow-up',
      description:
        'Agree upon internal owners and resolution timelines; provide follow-up implementation guidance where in scope.',
      icon: <LifeBuoy className="w-5 h-5" />,
      accent: 'primary',
      bg: 'bg-primary-light',
      text: 'text-primary',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            04 / Our Method
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            From discovery to a practical action plan.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            A structured engagement designed to minimise workplace disruption
            and maximise operational clarity for leadership.
          </p>
        </div>

        {/* 6 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-warm-grey rounded-brand-lg p-6 sm:p-7 border border-warm-border hover:shadow-soft-md transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-mono font-bold px-3 py-1 rounded-brand-sm ${step.bg} ${step.text}`}
                  >
                    STEP {step.number}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-brand flex items-center justify-center ${step.bg} ${step.text}`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-navy group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-navy-muted mt-0.5">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-navy-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="pt-5 mt-4 border-t border-warm-border/60 flex items-center justify-between text-xs text-navy-muted">
                <span>Phase {index + 1} of 6</span>
                <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Promises Strip (From Slide 05) */}
        <div className="mt-14 p-6 sm:p-7 rounded-brand-xl bg-navy text-white shadow-soft">
          <div className="text-center mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Non-Negotiable Standards
            </span>
            <h4 className="text-lg font-heading font-bold text-white mt-1">
              4 Guiding Commitments in Every Engagement
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.promises.map((promise) => (
              <div
                key={promise}
                className="p-4 rounded-brand bg-white/5 border border-white/10 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                <span className="text-sm font-medium text-white/90">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
