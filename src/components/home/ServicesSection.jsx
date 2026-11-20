import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileCheck2,
  GitBranch,
  BookText,
  FolderArchive,
  CircleDollarSign,
  CheckSquare,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Slide 03 & 04 / WHAT WE DO & COMPLIANCE LENS:
 * 6 Modular Services with comprehensive breakdown.
 */
export default function ServicesSection() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'hr-compliance-review':
        return <FileCheck2 className="w-5 h-5" />;
      case 'hr-process-audit':
        return <GitBranch className="w-5 h-5" />;
      case 'policy-documentation':
        return <BookText className="w-5 h-5" />;
      case 'employee-records-audit':
        return <FolderArchive className="w-5 h-5" />;
      case 'compensation-benefits-review':
        return <CircleDollarSign className="w-5 h-5" />;
      case 'action-plan-advisory':
      default:
        return <CheckSquare className="w-5 h-5" />;
    }
  };

  const getAccentColorStyle = (accent) => {
    switch (accent) {
      case 'teal':
        return {
          bg: 'bg-teal-light',
          text: 'text-teal',
          hoverBorder: 'hover:border-teal/50',
          badge: 'bg-teal text-white',
        };
      case 'magenta':
        return {
          bg: 'bg-magenta-light',
          text: 'text-magenta',
          hoverBorder: 'hover:border-magenta/50',
          badge: 'bg-magenta text-white',
        };
      case 'blue':
        return {
          bg: 'bg-blue-light',
          text: 'text-blue',
          hoverBorder: 'hover:border-blue/50',
          badge: 'bg-blue text-white',
        };
      case 'green':
        return {
          bg: 'bg-green-light',
          text: 'text-green',
          hoverBorder: 'hover:border-green/50',
          badge: 'bg-green text-white',
        };
      case 'primary':
      default:
        return {
          bg: 'bg-primary-light',
          text: 'text-primary',
          hoverBorder: 'hover:border-primary/50',
          badge: 'bg-primary text-white',
        };
    }
  };

  return (
    <section id="services-section" className="py-16 md:py-24 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            02 / What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            One partner. A clearer HR picture.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            A modular service offering tailored to your organisation’s size,
            sector, and operating realities. Take individual modules or combine them for complete assurance.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => {
            const style = getAccentColorStyle(service.accent);
            return (
              <div
                key={service.id}
                className={`bg-white rounded-brand-lg p-6 sm:p-7 border border-warm-border ${style.hoverBorder} shadow-card hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Number badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-brand-sm ${style.bg} ${style.text}`}
                    >
                      MODULE {service.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-brand flex items-center justify-center ${style.bg} ${style.text} transition-transform group-hover:scale-110`}
                    >
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Title & Short Tagline */}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-navy group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-navy-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 mt-4 border-t border-warm-border flex items-center justify-between">
                  <Link
                    to={service.href}
                    className="text-xs font-semibold text-navy group-hover:text-primary flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Module Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[11px] text-navy-muted font-mono">
                    Slide 03
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Lens Callout Card (Slide 04) */}
        <div className="mt-12 p-6 sm:p-8 rounded-brand-xl bg-white border border-warm-border shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal">
                <ShieldAlert className="w-4 h-4" />
                <span>03 / Compliance Lens</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy">
                Compliance that fits your actual workplace.
              </h3>
              <p className="text-sm text-navy-muted leading-relaxed">
                We map requirements to your actual workforce, operating locations,
                and ways of working—then help you see what needs attention.
                Scope is confirmed at kickoff based on establishment type, headcount, location, and applicable statutes.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-warm-grey border border-warm-border text-navy">
                Employment records
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-warm-grey border border-warm-border text-navy">
                Wages &amp; benefits
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-warm-grey border border-warm-border text-navy">
                Leave &amp; attendance
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-warm-grey border border-warm-border text-navy">
                Statutory registers
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-warm-grey border border-warm-border text-navy">
                Policies &amp; notices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
