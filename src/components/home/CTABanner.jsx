import React from 'react';
import { ArrowUpRight, Phone, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * CTA Banner Section matching Bixoo's `cta-banner-section`:
 * Vibrant gradient banner driving high-impact consultation booking.
 */
export default function CTABanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-brand-xl p-8 sm:p-12 bg-gradient-to-r from-primary-dark via-primary to-primary-hover text-white shadow-soft-lg relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET’S MAKE HR CLEARER, STRONGER, READY</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
                Ready to review your HR compliance readiness?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Connect with our senior HR consultants today. We will schedule a focused 20-minute scoping discussion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-primary bg-white hover:bg-warm-grey active:bg-warm-subtle rounded-brand shadow-soft transition-all duration-200 group"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 rounded-brand transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
