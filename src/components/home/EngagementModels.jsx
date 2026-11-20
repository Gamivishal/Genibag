import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Slide 10 / FLEXIBLE ENGAGEMENT:
 * Choose the support that fits your stage.
 * 3 Models: Focused Health Check, Comprehensive Audit, Implementation Support.
 */
export default function EngagementModels() {
  const models = [
    {
      id: 'health-check',
      symbol: '◉',
      name: 'Focused Health Check',
      badge: 'Rapid Baseline',
      tagline: 'A targeted review of selected HR documents or concerns',
      description:
        'Ideal for smaller teams or organizations preparing for a specific event (such as an investor due diligence, statutory check, or onboarding overhaul).',
      features: [
        'Selected HR documents & core files',
        'High-priority risk identification',
        'Concise summary findings memo',
        '2–3 weeks typical turnaround',
        'Introductory leadership alignment call',
      ],
      isPopular: false,
      ctaLabel: 'Request Health Check',
      accentColor: 'text-navy',
      btnClass: 'bg-warm-grey hover:bg-warm-subtle text-navy border border-warm-border',
    },
    {
      id: 'comprehensive-audit',
      symbol: '▦',
      name: 'Comprehensive Audit',
      badge: 'Most Popular',
      tagline: 'A wide review across all agreed HR & compliance areas',
      description:
        'Our flagship engagement covering people files, policies, statutory registers, joining-to-exit workflows, attendance controls, and governance matrix.',
      features: [
        'Complete 6-module scope examination',
        'Executive Summary & Risk Map',
        'Formal Findings Register with evidence',
        'Action Tracker with owners & due dates',
        'Executive Readout with leadership team',
        '4–6 weeks structured engagement',
      ],
      isPopular: true,
      ctaLabel: 'Book Comprehensive Audit',
      accentColor: 'text-primary',
      btnClass: 'bg-primary hover:bg-primary-hover active:bg-primary-dark text-white shadow-soft',
    },
    {
      id: 'implementation-support',
      symbol: '↗',
      name: 'Implementation Support',
      badge: 'Hands-on Guidance',
      tagline: 'Help internal teams close agreed gaps and track actions',
      description:
        'Hands-on advisory to assist your internal HR or operational teams in drafting missing policies, updating employee files, and instituting controlled workflows.',
      features: [
        'Action plan execution assistance',
        'Standardized HR templates & checklists',
        'Bi-weekly progress check-ins',
        'Closure verification & re-sampling',
        'Ongoing advisory support period',
      ],
      isPopular: false,
      ctaLabel: 'Discuss Advisory Support',
      accentColor: 'text-teal',
      btnClass: 'bg-warm-grey hover:bg-warm-subtle text-navy border border-warm-border',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            09 / Flexible Engagement
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            Choose the support that fits your stage.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            From targeted spot-checks to comprehensive compliance audits and ongoing
            advisory, our engagements are sized for your organization's exact needs.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model) => (
            <div
              key={model.id}
              className={`rounded-brand-xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                model.isPopular
                  ? 'bg-warm-grey border-2 border-primary shadow-soft-lg scale-100 lg:-translate-y-2'
                  : 'bg-white border border-warm-border shadow-card hover:shadow-soft-md'
              }`}
            >
              {/* Popular Badge */}
              {model.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[11px] font-semibold tracking-wider uppercase shadow-soft flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{model.badge}</span>
                </div>
              )}

              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{model.symbol}</span>
                  {!model.isPopular && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-warm-grey text-navy-muted border border-warm-border">
                      {model.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-navy">
                    {model.name}
                  </h3>
                  <p className="text-xs font-medium text-primary mt-1">
                    {model.tagline}
                  </p>
                </div>

                <p className="text-sm text-navy-muted leading-relaxed">
                  {model.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-warm-border space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-muted block">
                    What&rsquo;s Included
                  </span>
                  {model.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-navy">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-warm-border">
                <a
                  href="#consultation-form"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-brand transition-all duration-200 group ${model.btnClass}`}
                >
                  <span>{model.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Scoping Note (From Slide 10) */}
        <div className="mt-12 text-center text-xs text-navy-muted bg-warm-grey p-4 rounded-brand border border-warm-border max-w-3xl mx-auto">
          <p>
            <strong className="text-navy">Scoping Notice: </strong>
            Engagement size, timeline, sampling methodology, locations, and advisory fees
            are confirmed after an initial scoping discussion with your management team.
          </p>
        </div>
      </div>
    </section>
  );
}
