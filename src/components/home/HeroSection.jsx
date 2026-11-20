import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  Sparkles,
  Award,
  Lock,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-warm-grey via-white to-warm-grey">
      {/* Decorative ambient lighting meshes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[420px] h-[420px] rounded-full bg-primary-light/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[420px] h-[420px] rounded-full bg-teal-light/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-xs font-semibold text-primary shadow-card">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{siteConfig.brand.businessLine}</span>
              <span className="text-primary/40">•</span>
              <span className="text-navy">{siteConfig.brand.subtitle}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-heading font-bold text-navy tracking-tight leading-[1.15]">
              Clarity for your people.{' '}
              <span className="text-primary block sm:inline">
                Confidence for your business.
              </span>
            </h1>

            {/* Subheading / Value Statement */}
            <p className="text-base sm:text-lg text-navy-muted leading-relaxed max-w-2xl">
              We help growing organisations turn people processes into clear,
              consistent, and review-ready practices. Protect your business,
              support your employees, and give leadership actionable clarity.
            </p>

            {/* Slide 01 Badges: Compliance Snapshot */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy shadow-card hover:border-green/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-green" />
                <span>People Records</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy shadow-card hover:border-teal/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Policies &amp; Process</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy shadow-card hover:border-primary/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Risk &amp; Action Plan</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft hover:shadow-soft-md transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services-section"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-navy bg-white hover:bg-warm-grey border border-warm-border rounded-brand shadow-card hover:border-navy-muted/40 transition-colors duration-200"
              >
                Explore 6 Services
              </a>
            </div>

            {/* Trust reassurance pills */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-navy-muted">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                <span>Zero Disruption Guarantee</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-primary shrink-0" />
                <span>100% Confidential Handling</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue shrink-0" />
                <span>Evidence-Led Methodology</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Compliance Snapshot Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="bg-white rounded-brand-xl shadow-soft-lg border border-warm-border p-6 sm:p-7 relative z-10 space-y-6">
                {/* Header of Snapshot Card */}
                <div className="flex items-center justify-between pb-4 border-b border-warm-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-brand bg-primary-light flex items-center justify-center text-primary font-bold">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-navy">
                        Compliance Snapshot
                      </h3>
                      <p className="text-xs text-navy-muted">
                        Evidence-Led Audit Framework
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-green-light text-green border border-green/20">
                    Active Readiness
                  </span>
                </div>

                {/* 3 Interactive Feature Highlights */}
                <div className="space-y-3">
                  <div className="p-3 rounded-brand bg-warm-grey/70 border border-warm-border hover:border-primary/40 transition-colors flex items-start gap-3">
                    <div className="w-7 h-7 rounded-brand-sm bg-primary-light text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-navy">
                        Labour Law &amp; Statutory Registers
                      </h4>
                      <p className="text-[11px] text-navy-muted leading-tight mt-0.5">
                        Verification of mandatory notices, returns, and statutory records.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-brand bg-warm-grey/70 border border-warm-border hover:border-teal/40 transition-colors flex items-start gap-3">
                    <div className="w-7 h-7 rounded-brand-sm bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-navy">
                        People Files &amp; Joining-to-Exit
                      </h4>
                      <p className="text-[11px] text-navy-muted leading-tight mt-0.5">
                        Complete review of appointment letters, KYC, and clearance trails.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-brand bg-warm-grey/70 border border-warm-border hover:border-blue/40 transition-colors flex items-start gap-3">
                    <div className="w-7 h-7 rounded-brand-sm bg-blue-light text-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-navy">
                        Time, Pay &amp; POSH Governance
                      </h4>
                      <p className="text-[11px] text-navy-muted leading-tight mt-0.5">
                        Attendance reconciliations, salary structures, and ICC policy checks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deliverable Callout Card */}
                <div className="p-3.5 rounded-brand bg-navy text-white flex items-center justify-between gap-3 shadow-soft">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                      Immediate Output
                    </span>
                    <p className="text-xs font-medium text-white/90">
                      Risk-Prioritised Action Tracker
                    </p>
                  </div>
                  <Link
                    to="/approach"
                    className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 shrink-0"
                  >
                    <span>View Method</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-warm-border text-center">
                  <div className="p-2">
                    <div className="text-lg font-heading font-bold text-navy">6</div>
                    <div className="text-[10px] text-navy-muted">Core Modules</div>
                  </div>
                  <div className="p-2 border-x border-warm-border">
                    <div className="text-lg font-heading font-bold text-teal">100%</div>
                    <div className="text-[10px] text-navy-muted">Evidence-Led</div>
                  </div>
                  <div className="p-2">
                    <div className="text-lg font-heading font-bold text-primary">0%</div>
                    <div className="text-[10px] text-navy-muted">Disruption</div>
                  </div>
                </div>
              </div>

              {/* Decorative background drop card */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-brand-xl bg-primary/10 -z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
