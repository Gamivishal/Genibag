import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Floating Action Hub:
 * Provides sticky Back-to-Top and quick Consultation Booking triggers on scroll.
 */
export default function FloatingActionHub() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      {/* Quick Consultation Trigger */}
      <a
        href="#consultation-form"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white text-xs font-semibold shadow-soft-lg hover:bg-primary transition-colors border border-navy-border group"
        aria-label="Jump to Consultation Booking"
      >
        <Calendar className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
        <span>Book Scoping Call</span>
      </a>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-white text-navy hover:text-primary hover:bg-warm-grey border border-warm-border shadow-soft-lg flex items-center justify-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </aside>
  );
}
