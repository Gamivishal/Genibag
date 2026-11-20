import React from 'react';
import {
  Handshake,
  UserCheck,
  FolderOpen,
  MapPin,
  Clock,
  ShieldCheck,
  FileCheck2,
  FileSpreadsheet,
  AlertTriangle,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Slide 11 / A GOOD PARTNERSHIP:
 * Clear expectations. Better outcomes.
 * Mutual responsibilities + Statutory advisory disclaimer.
 */
export default function PartnershipCommitment() {
  return (
    <section className="py-16 md:py-24 bg-warm-grey border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            10 / A Good Partnership
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            Clear expectations. Better outcomes.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            A strong compliance audit works best when both sides know the
            boundaries, commitments, and responsibilities upfront.
          </p>
        </div>

        {/* 2 Columns: What we ask from you VS What you can expect from us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: What We Ask From You */}
          <div className="bg-white rounded-brand-xl p-7 sm:p-8 border border-warm-border shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-warm-border">
              <div className="w-10 h-10 rounded-brand bg-primary-light flex items-center justify-center text-primary font-bold text-lg">
                ＋
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-navy">
                  What We Ask from You
                </h3>
                <p className="text-xs text-navy-muted">
                  Client commitments to ensure smooth execution
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-navy" role="list">
              <li className="flex items-start gap-3">
                <UserCheck className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Nominated Point of Contact</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    A dedicated coordinator from HR or Operations to facilitate document requests and sample coordination.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FolderOpen className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Timely Access to Agreed Records</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Provision of sampled personnel files, payroll registers, notices, and handbooks per agreed schedule.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Workforce &amp; Location Context</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Accurate details on headcount breakdown, branch/factory establishments, remote staff, and contractors.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Management Availability for Clarifications</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Brief slots with department heads to resolve discrepancies before finalizing observations.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: What You Can Expect From Us */}
          <div className="bg-white rounded-brand-xl p-7 sm:p-8 border border-warm-border shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-warm-border">
              <div className="w-10 h-10 rounded-brand bg-teal-light flex items-center justify-center text-teal font-bold text-lg">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-navy">
                  What You Can Expect from Us
                </h3>
                <p className="text-xs text-navy-muted">
                  Our professional service standards
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-navy" role="list">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Confidential &amp; Professional Handling</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Strict adherence to privacy, secure data destruction protocols, and non-disclosure obligations.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FileCheck2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Transparent Scope &amp; Methodology</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Clear kickoff terms, agreed sampling sizes, and transparent evaluation criteria with no surprises.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FileSpreadsheet className="w-4 h-4 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Evidence-Based Findings</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Every observation is grounded in verifiable documentation and applicable statutory standards.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Handshake className="w-4 h-4 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="block text-xs font-heading">Practical Recommendations &amp; Clear Caveats</strong>
                  <span className="text-xs text-navy-muted leading-relaxed">
                    Proportionate corrective steps that internal teams can implement without administrative paralysis.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Formal Statutory Disclaimer (From Slide 11) */}
        <div className="mt-10 p-5 rounded-brand bg-white border border-warm-border flex items-start gap-3 shadow-card">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-navy-muted leading-relaxed">
            <strong className="text-navy font-semibold">Statutory Advisory Boundary: </strong>
            {siteConfig.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
