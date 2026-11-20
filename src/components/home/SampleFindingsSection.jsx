import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Filter,
} from 'lucide-react';

/**
 * Slide 08 & 09 / WHY GENIE BAG & HOW FINDINGS LOOK:
 * Realistic sample findings matrix with interactive filter (All, High, Medium).
 */
export default function SampleFindingsSection() {
  const [filter, setFilter] = useState('ALL');

  const findings = [
    {
      id: 1,
      observation: 'Incomplete employee files',
      whyItMatters:
        'May weaken traceability and delay responses to employee or statutory queries during inspections or disputes.',
      action:
        'Implement a standardized role-based checklist; close missing KYC/appointment gaps and assign clear file ownership.',
      priority: 'HIGH',
      badgeClass: 'bg-primary-light text-primary border-primary/30',
      evidence: '15 of 40 sampled files lacked confirmation letters or signed handbook acknowledgements.',
      owner: 'HR Operations Lead',
      targetTimeline: '30 Days',
    },
    {
      id: 2,
      observation: 'Policy versions differ between intranet and handbook',
      whyItMatters:
        'Employees and managers may follow conflicting rules regarding probation, leave approvals, and travel claims.',
      action:
        'Approve one single controlled version, withdraw outdated copies, and communicate updates across teams.',
      priority: 'MEDIUM',
      badgeClass: 'bg-blue-light text-blue border-blue/30',
      evidence: 'Leave policy version 2.1 on portal contradicted version 3.0 distributed via email.',
      owner: 'Policy & People Lead',
      targetTimeline: '45 Days',
    },
    {
      id: 3,
      observation: 'Unclear approval trail for salary adjustments & overtime',
      whyItMatters:
        'Payroll changes may be difficult to verify or reproduce, increasing exposure to financial discrepancies.',
      action:
        'Define a formal approval limits matrix and retain timestamped approvals in a central repository.',
      priority: 'MEDIUM',
      badgeClass: 'bg-teal-light text-teal border-teal/30',
      evidence: '3 manual salary adjustments processed via chat messages without documented manager sign-off.',
      owner: 'Finance & HR Partner',
      targetTimeline: '15 Days',
    },
  ];

  const filteredFindings =
    filter === 'ALL'
      ? findings
      : findings.filter((f) => f.priority === filter);

  return (
    <section className="py-16 md:py-24 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            08 / Real-World Clarity
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            How our audit findings look.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            Simple, prioritised, and actionable. Here is an illustrative sample
            of how we translate observations into clear, evidence-backed next steps.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-navy flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-primary" />
              Filter by Priority:
            </span>
            <div className="inline-flex rounded-brand bg-white p-1 border border-warm-border shadow-card">
              {['ALL', 'HIGH', 'MEDIUM'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFilter(level)}
                  className={`px-3 py-1 text-xs rounded-brand-sm font-medium transition-colors outline-none ${
                    filter === level
                      ? 'bg-primary text-white font-semibold shadow-soft'
                      : 'text-navy-muted hover:text-navy'
                  }`}
                >
                  {level === 'ALL' ? 'All Findings' : `${level} Priority`}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs text-navy-muted italic">
            *Illustrative examples from Slide 09
          </span>
        </div>

        {/* Findings Cards / Table Grid */}
        <div className="space-y-4">
          {filteredFindings.map((finding) => (
            <div
              key={finding.id}
              className="bg-white rounded-brand-xl p-6 sm:p-7 border border-warm-border shadow-soft transition-all duration-200 hover:shadow-soft-md space-y-4"
            >
              {/* Finding Card Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-warm-border gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold font-mono px-3 py-1 rounded-full border ${finding.badgeClass}`}
                  >
                    {finding.priority} PRIORITY
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-navy">
                    {finding.observation}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs text-navy-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Target: {finding.targetTimeline}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>Owner: <strong className="text-navy">{finding.owner}</strong></span>
                </div>
              </div>

              {/* Finding Grid Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1">
                {/* Why it Matters (5 cols) */}
                <div className="md:col-span-5 space-y-1.5 p-3.5 rounded-brand bg-warm-grey/60 border border-warm-border/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-muted flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-primary" />
                    Why It Matters
                  </span>
                  <p className="text-xs text-navy leading-relaxed">
                    {finding.whyItMatters}
                  </p>
                  <p className="text-[11px] text-navy-muted italic pt-1 border-t border-warm-border/40">
                    Evidence: {finding.evidence}
                  </p>
                </div>

                {/* Recommended Action (7 cols) */}
                <div className="md:col-span-7 space-y-1.5 p-3.5 rounded-brand bg-green-light/40 border border-green/20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-green-dark flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                    Recommended Action
                  </span>
                  <p className="text-xs text-navy leading-relaxed font-medium">
                    {finding.action}
                  </p>
                  <p className="text-[11px] text-green-dark/80 pt-1 border-t border-green/10">
                    ✓ Tracked through Corrective Action Tracker to documented closure
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Note (From Slide 08) */}
        <div className="mt-12 p-6 rounded-brand-xl bg-white border border-warm-border text-center max-w-2xl mx-auto shadow-card space-y-2">
          <p className="text-sm font-heading font-semibold text-navy">
            Moving from &ldquo;Are we covered?&rdquo; to &ldquo;We know what to do next.&rdquo;
          </p>
          <p className="text-xs text-navy-muted leading-relaxed">
            Every observation maps directly to verifiable evidence, an internal owner,
            a target date, and a closure status—eliminating executive overwhelm.
          </p>
        </div>
      </div>
    </section>
  );
}
