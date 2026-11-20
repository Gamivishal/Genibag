import React from 'react';
import {
  CheckCircle2,
  Handshake,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  FileCheck,
  Award,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Choose Us Section matching Bixoo's `choose-us-section`:
 * - Left side: 07 / Why Genie Bag, Title, "What You Get" checkmark list, CTA button
 * - Right side: "How We Work" structured card with 4 tinted sub-cards
 */
export default function ChooseUsSection() {
  const whatYouGet = [
    'An independent, unbiased view of HR processes',
    'Clearer documentation and workforce accountability',
    'Visibility into compliance gaps before they grow',
    'Prioritised, realistic actions instead of overwhelm',
    'Strictly confidential, respectful engagement',
  ];

  const howWeWork = [
    {
      title: 'Tailored to Your Context',
      desc: 'Mapped to your actual workforce profile, business sector, and working patterns.',
      accent: 'text-primary',
    },
    {
      title: 'Evidence-Led & Risk-Prioritised',
      desc: 'Observations backed by data and documentation samples, categorised by risk level.',
      accent: 'text-teal',
    },
    {
      title: 'Transparent Scope & Timelines',
      desc: 'Agreed boundaries from kickoff with zero operational disruption to daily business.',
      accent: 'text-blue',
    },
    {
      title: 'Action-Oriented Output',
      desc: 'Practical recommendations with assigned owners, due dates, and tracker matrices.',
      accent: 'text-green',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-warm-grey border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Why Genie Bag + What You Get (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Award className="w-4 h-4" />
              <span>07 / Why Genie Bag</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Make HR Easier to Trust — and Easier to Run.
            </h2>

            <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
              Our approach blends structure with practical understanding of day-to-day HR realities. We help leadership move from <em className="text-navy">“Are we covered?”</em> to <b className="text-primary font-bold">“We know what to do next.”</b>
            </p>

            {/* What You Get Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-base font-heading font-bold text-navy">
                What You Get:
              </h4>
              <ul className="space-y-2.5 text-sm text-navy" role="list">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft hover:shadow-soft-md transition-all duration-200 group"
              >
                <span>Schedule a Discussion</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: How We Work Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-brand-xl p-7 sm:p-9 border border-warm-border shadow-soft-lg space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-warm-border">
                <div className="w-10 h-10 rounded-brand bg-teal-light text-teal flex items-center justify-center font-bold">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy">
                  How We Work:
                </h3>
              </div>

              {/* 4 How We Work Sub-Cards */}
              <div className="space-y-3.5">
                {howWeWork.map((card) => (
                  <div
                    key={card.title}
                    className="p-4 rounded-brand bg-warm-grey border border-warm-border/80 hover:border-primary/40 transition-colors space-y-1"
                  >
                    <h4 className={`text-sm font-heading font-bold text-navy`}>
                      {card.title}
                    </h4>
                    <p className="text-xs text-navy-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
