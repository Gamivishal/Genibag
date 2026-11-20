import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * Slide 12 / LET'S TALK:
 * "LET'S MAKE HR clearer. stronger. ready."
 * Interactive consultation booking form with instant validation.
 */
export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    headcount: '11-50',
    service: 'hr-compliance-review',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate consultation inquiry submission
    setSubmitted(true);
  };

  return (
    <section id="consultation-form" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 -ml-24 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-light/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mr-24 -mb-24 w-80 h-80 rounded-full bg-teal-light/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Heading & Value Proposition (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Slide 12 / Let&rsquo;s Make HR Ready</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy leading-tight tracking-tight">
              LET&rsquo;S MAKE HR <br />
              <span className="text-primary">clearer.</span>{' '}
              <span className="text-teal">stronger.</span>{' '}
              <span className="text-navy">ready.</span>
            </h2>

            <p className="text-base text-navy-muted leading-relaxed">
              Start with a candid conversation about your people, processes, and
              priorities. We will help you scope the right review for your stage.
            </p>

            {/* Quick Contact Cards */}
            <div className="pt-2 space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-brand bg-warm-grey border border-warm-border hover:border-primary/40 flex items-center gap-3.5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-brand bg-primary-light text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-navy-muted block">Call our consultation desk</span>
                  <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-4 rounded-brand bg-warm-grey border border-warm-border hover:border-primary/40 flex items-center gap-3.5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-brand bg-teal-light text-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-navy-muted block">Direct email correspondence</span>
                  <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>

              <div className="p-4 rounded-brand bg-warm-grey border border-warm-border flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-brand bg-blue-light text-blue flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-navy-muted block">Consulting hours</span>
                  <span className="text-xs font-semibold text-navy">
                    {siteConfig.contact.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-brand-xl p-7 sm:p-9 border border-warm-border shadow-soft-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-light text-green mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-navy">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-navy-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-navy">{formData.name}</strong>. Our senior HR compliance consultant will review your details and reach out within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-primary hover:text-primary-hover border border-primary/30 rounded-brand"
                  >
                    Submit another inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-navy">
                      Book an Initial Scoping Discussion
                    </h3>
                    <p className="text-xs text-navy-muted mt-1">
                      Fill out this quick form; we will confirm availability and discuss tailored scope.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy placeholder:text-neutral-placeholder focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. ramesh@company.com"
                        className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy placeholder:text-neutral-placeholder focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy placeholder:text-neutral-placeholder focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Company / Establishment Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Acme Tech Solutions"
                        className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy placeholder:text-neutral-placeholder focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Headcount */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Approx. Workforce Headcount
                      </label>
                      <select
                        value={formData.headcount}
                        onChange={(e) =>
                          setFormData({ ...formData, headcount: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        <option value="1-10">1 – 10 Employees</option>
                        <option value="11-50">11 – 50 Employees</option>
                        <option value="51-200">51 – 200 Employees</option>
                        <option value="201-500">201 – 500 Employees</option>
                        <option value="500+">500+ Employees / Multi-location</option>
                      </select>
                    </div>

                    {/* Primary Service of Interest */}
                    <div>
                      <label className="block text-xs font-medium text-navy mb-1">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        {siteConfig.services.map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.number}. {srv.title}
                          </option>
                        ))}
                        <option value="full-audit">Comprehensive 6-Module Audit</option>
                        <option value="advisory">Advisory &amp; Implementation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Concerns */}
                  <div>
                    <label className="block text-xs font-medium text-navy mb-1">
                      Key Concerns / Areas to Review (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Preparing for upcoming statutory inspection, updating our POSH compliance, or streamlining employee records..."
                      className="w-full px-3.5 py-2.5 rounded-brand bg-warm-grey/60 border border-warm-border text-sm text-navy placeholder:text-neutral-placeholder focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-dark rounded-brand shadow-soft hover:shadow-soft-md transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-primary outline-none"
                    >
                      <span>Submit Scoping Request</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <p className="text-[11px] text-navy-muted text-center pt-1">
                    🔒 Confidential handling guaranteed. No spam. Strictly for scheduling your scoping discussion.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
