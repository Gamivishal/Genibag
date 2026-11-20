import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Construction } from 'lucide-react';

/**
 * Placeholder component for routes that will be built in subsequent steps.
 * Ensures that no link in the header, footer or dropdown breaks when clicked.
 */
export default function PlaceholderPage({ title, description, badge }) {
  const location = useLocation();

  return (
    <div className="flex-1 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-brand-lg p-8 sm:p-12 shadow-soft border border-warm-border text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-primary-light text-primary mx-auto flex items-center justify-center">
            <Construction className="w-7 h-7" />
          </div>

          <div>
            {badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-warm-grey text-primary border border-warm-border mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-navy">
              {title || 'Page Under Development'}
            </h1>
            <p className="text-xs font-mono text-navy-muted mt-1">
              Route: {location.pathname}
            </p>
          </div>

          <p className="text-navy-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            {description ||
              'This page route is active as a placeholder so you can test navigation from the Header and Footer. Full page content will be built in the next step.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-navy bg-warm-grey hover:bg-warm-subtle border border-warm-border rounded-brand transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-brand shadow-soft transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
