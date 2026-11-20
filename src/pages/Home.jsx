import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

/**
 * Placeholder Home page for the first milestone:
 * Displays a clean greeting highlighting the brand and active Header/Footer components.
 * Per requirements: builds ONLY placeholder content, no other full page sections yet.
 */
export default function Home() {
  return (
    <div className="flex-1 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Milestone Status Banner */}
        <div className="mb-10 p-4 bg-primary-light border border-primary/20 rounded-brand flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <p className="text-xs sm:text-sm font-medium text-navy">
              <strong className="text-primary font-semibold">Step 1 Milestone:</strong>{' '}
              Header &amp; Footer components and theme configuration are ready for review.
            </p>
          </div>
          <span className="text-xs bg-white text-navy font-semibold px-2.5 py-1 rounded-full shadow-card border border-warm-border">
            React + Vite + Tailwind CSS
          </span>
        </div>

        {/* Hero Placeholder Card */}
        <div className="bg-white rounded-brand-lg p-8 sm:p-12 shadow-soft border border-warm-border text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-grey border border-warm-border text-xs font-semibold text-navy">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>{siteConfig.brand.businessLine}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-navy tracking-tight leading-tight max-w-3xl mx-auto">
            {siteConfig.brand.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-navy-muted max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-navy">{siteConfig.brand.name}</strong>{' '}
            <span className="text-primary">{siteConfig.brand.subtitle}</span>. {siteConfig.brand.mission}
          </p>

          {/* CTA Preview */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft transition-all duration-200"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-navy bg-warm-grey hover:bg-warm-subtle border border-warm-border rounded-brand transition-colors"
            >
              Explore 6 Services
            </Link>
          </div>

          {/* Palette Token Verification Strip */}
          <div className="pt-8 border-t border-warm-border">
            <p className="text-xs font-semibold text-navy-muted uppercase tracking-wider mb-4">
              Design System Palette Tokens Applied
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy">
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span>Primary Orange (#F26A3D)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy">
                <span className="w-3.5 h-3.5 rounded-full bg-navy" />
                <span>Navy (#1E2433)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy">
                <span className="w-3.5 h-3.5 rounded-full bg-teal" />
                <span>Teal (#14A8A0)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy">
                <span className="w-3.5 h-3.5 rounded-full bg-magenta" />
                <span>Magenta (#D6336C)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy">
                <span className="w-3.5 h-3.5 rounded-full bg-blue" />
                <span>Blue (#2B7DE9)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-brand bg-white border border-warm-border text-xs font-medium text-navy">
                <span className="w-3.5 h-3.5 rounded-full bg-green" />
                <span>Green (#2FA84F)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Modular Services Preview Cards (Simple Placeholder representation) */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              What We Do (From Slide 03)
            </span>
            <h2 className="text-2xl font-heading font-bold text-navy mt-1">
              One Partner. A Clearer HR Picture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-brand p-5 shadow-card border border-warm-border hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-warm-grey text-navy border border-warm-border">
                    {service.number}
                  </span>
                  <Link
                    to={service.href}
                    className="text-xs text-primary hover:text-primary-hover font-medium flex items-center gap-1"
                  >
                    Details &rarr;
                  </Link>
                </div>
                <h3 className="text-base font-heading font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-navy-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
