import React, { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

/**
 * Before vs After Transformation Showcase:
 * Highlights the clear shift from chaotic/unreviewed HR processes to audit-ready governance.
 */
export default function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState('after');

  const comparisons = [
    {
      area: 'Employee Records & Personnel Files',
      before:
        'Scattered across paper folders, physical files, and personal inboxes; missing KYC, probation letters, or signed job descriptions.',
      after:
        '100% indexed, role-based document checklist with verified appointment letters, qualification proofs, and clear ownership.',
    },
    {
      area: 'Policies, Handbook & POSH Framework',
      before:
        'Outdated template downloaded years ago; contradictory versions circulated; unconstituted POSH committee without awareness logs.',
      after:
        'Single controlled version reflecting current labour codes; formally constituted IC committee, awareness records, and clear escalation protocols.',
    },
    {
      area: 'Time, Attendance & Payroll Inputs',
      before:
        'Informal leave requests via chats; manual attendance overrides; undocumented manager sign-offs on salary changes and overtime.',
      after:
        'Formal approval limits matrix; timestamped attendance audit trails; reconciliation controls between punch logs and payroll payout.',
    },
    {
      area: 'Executive Decision-Making & Exposure',
      before:
        'Leadership relies on gut-feel; constant anxiety during surprise labour department inspections or external investor due diligence.',
      after:
        'Evidence-backed Findings Register and Corrective Action Tracker; leadership knows exactly what gaps exist and who is resolving them.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            The Transformation
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            From &ldquo;Are we covered?&rdquo; to complete confidence.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            See how Geniebag Solutions transforms everyday administrative friction
            into transparent, review-ready HR governance.
          </p>
        </div>

        {/* 2-Column Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Without Geniebag (Traditional State) */}
          <div className="bg-warm-grey rounded-brand-xl p-7 sm:p-8 border border-warm-border space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-warm-border">
              <div className="w-10 h-10 rounded-brand bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Current Vulnerabilities
                </span>
                <h3 className="text-lg font-heading font-bold text-navy">
                  Without a Structured Audit
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((c, idx) => (
                <div
                  key={c.area}
                  className="p-4 rounded-brand bg-white border border-warm-border/80 space-y-1.5"
                >
                  <span className="text-xs font-bold text-navy flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {c.area}
                  </span>
                  <p className="text-xs text-navy-muted leading-relaxed pl-3 border-l-2 border-red-200">
                    {c.before}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: With Geniebag Solutions (Audit-Ready State) */}
          <div className="bg-white rounded-brand-xl p-7 sm:p-8 border-2 border-primary shadow-soft-lg space-y-6 relative">
            <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-primary text-white text-[11px] font-semibold tracking-wider uppercase shadow-soft">
              Audit-Ready Standard
            </div>

            <div className="flex items-center gap-3 pb-4 border-b border-warm-border">
              <div className="w-10 h-10 rounded-brand bg-teal-light text-teal flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Geniebag Assurance
                </span>
                <h3 className="text-lg font-heading font-bold text-navy">
                  With Geniebag Governance
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((c, idx) => (
                <div
                  key={c.area}
                  className="p-4 rounded-brand bg-warm-grey border border-warm-border space-y-1.5 hover:border-teal/50 transition-colors"
                >
                  <span className="text-xs font-bold text-navy flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    {c.area}
                  </span>
                  <p className="text-xs text-navy leading-relaxed pl-5 font-medium">
                    {c.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <a
            href="#consultation-form"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
          >
            <span>Ready to transform your HR operating system? Schedule your scoping call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
