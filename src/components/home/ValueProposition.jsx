import React from 'react';
import { Shield, Users, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * About Section matching Bixoo's `about-section`:
 * - Left side: Feature photography with overlapping floating corporate card
 * - Right side: Subtitle with icon, split heading, and descriptive copy
 * - Bottom: 3 Feature boxes with 55px icon badges and tinted backgrounds
 */
export default function ValueProposition() {
  const features = [
    {
      id: 'protect',
      title: 'Protect the Business',
      description:
        'Spot process gaps early, clarify operational responsibilities, and support better compliance discipline across statutory and workforce operations.',
      icon: <Shield className="w-6 h-6" />,
      accentBg: 'bg-primary-light',
      accentText: 'text-primary',
      borderHover: 'hover:border-primary/50',
    },
    {
      id: 'support',
      title: 'Support Employees',
      description:
        'Create fair, understandable, and transparent processes for company policies, communication, records retention, and employee concerns.',
      icon: <Users className="w-6 h-6" />,
      accentBg: 'bg-teal-light',
      accentText: 'text-teal',
      borderHover: 'hover:border-teal/50',
    },
    {
      id: 'enable',
      title: 'Enable Better Decisions',
      description:
        'Give leadership an actionable, evidence-led view of compliance risks, operational priorities, and resource allocation—not just a stack of documents.',
      icon: <TrendingUp className="w-6 h-6" />,
      accentBg: 'bg-blue-light',
      accentText: 'text-blue',
      borderHover: 'hover:border-blue/50',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-warm-grey border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Area: Photo + Overlapping Card on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Image with Overlapping Floating Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Feature Image from public folder */}
              <div className="overflow-hidden rounded-brand-xl shadow-soft-lg border border-warm-border">
                <img
                  src="/bixoo/about-feature2-01.jpg"
                  alt="HR Compliance & Governance"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Floating Dark Card (Bixoo Signature Style) */}
              <div className="bg-navy text-white p-5 sm:p-6 rounded-brand-lg shadow-soft-lg -mt-10 sm:-mt-12 mx-4 sm:mx-6 relative z-10 border border-navy-border space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                  GENIEBAG SOLUTIONS
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  {siteConfig.brand.subtitle} • Practical, proportionate and people-aware HR governance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="w-4 h-4" />
              <span>01 / The Big Picture</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Good HR is More Than Paperwork.
            </h2>

            <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
              We help organisations turn people processes into clear, consistent and
              review-ready practices. Our focus blends rigorous structure with
              practical understanding of day-to-day HR realities.
            </p>

            <div className="p-4 rounded-brand bg-white border border-warm-border flex items-start gap-3 shadow-card">
              <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-navy leading-relaxed font-medium">
                We bridge the gap between complex statutory mandates and your actual workplace operations—ensuring peace of mind for founders, HR leaders, and legal heads.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Feature Boxes Grid (Matching Bixoo `about-feature`) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-brand-xl p-7 border border-warm-border ${item.borderHover} shadow-card hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div className="space-y-4">
                {/* 55px Tinted Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-brand flex items-center justify-center ${item.accentBg} ${item.accentText} transition-transform group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-heading font-bold text-navy group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-navy-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-warm-border flex items-center text-xs font-semibold text-primary">
                <span>View Core Standards &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
