import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * Interactive FAQ Section:
 * Answers the most frequent questions clients ask when considering an HR compliance audit.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Will the HR compliance audit disrupt our day-to-day operations?',
      a: 'Not at all. One of our 4 non-negotiable promises is "No unnecessary disruption". We work predominantly off-site with sampled digital documents and scheduled, focused 20-minute slots with relevant coordinators. Your team continues running regular business without interruption.',
    },
    {
      q: 'How long does a typical HR compliance audit take?',
      a: 'A Focused Health Check typically takes 2 to 3 weeks from kickoff to final report. A full 6-module Comprehensive Audit generally spans 4 to 6 weeks, depending on your organization headcount, number of operating branch establishments, and document availability.',
    },
    {
      q: 'How do you handle sensitive salary details and employee privacy?',
      a: 'We operate under strict Non-Disclosure Agreements (NDA) and secure data-handling protocols. Personnel records, salary structures, and disciplinary documents are reviewed solely for compliance validity, stored in encrypted workspaces, and securely purged after agreed retention.',
    },
    {
      q: 'What is the primary difference between a Health Check and a Comprehensive Audit?',
      a: 'A Focused Health Check is a targeted review of selected high-risk modules (such as employee files or handbook policies), ideal for quick baseline visibility. A Comprehensive Audit covers the full 6-domain HR Operating System (statutory registers, joining-to-exit, attendance, compensation controls, and governance) with an Action Tracker and Leadership Readout.',
    },
    {
      q: 'Is this audit a substitute for legal advice from a statutory advocate?',
      a: 'No. As clearly stated in our engagement terms (Slide 11): our consultancy review supports compliance readiness, process discipline, and risk prioritization. It is not a guarantee of legal immunity or a formal substitute for statutory legal counsel where litigation or formal court representation is required.',
    },
    {
      q: 'Can you help us implement the corrective action recommendations?',
      a: 'Yes! Under our "Implementation Support" engagement model, our senior consultants work hands-on alongside your internal HR, operations, and finance teams to draft missing policies, standardize checklists, and verify closure of identified findings.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-grey border-t border-warm-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            Everything you need to know.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            Have questions about audit scope, data confidentiality, or timelines?
            Here are honest, transparent answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`rounded-brand-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-primary shadow-soft'
                    : 'bg-white/80 hover:bg-white border-warm-border'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-heading font-semibold text-navy leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-primary text-white rotate-180'
                        : 'bg-warm-grey text-navy-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-navy-muted leading-relaxed border-t border-warm-border/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-brand-lg bg-white border border-warm-border text-center space-y-2 shadow-card">
          <p className="text-sm font-heading font-semibold text-navy">
            Have a specific scenario or complex multi-state establishment?
          </p>
          <p className="text-xs text-navy-muted">
            Our principal consultant is available for a direct 15-minute scoping call.
          </p>
          <div className="pt-2">
            <a
              href="#consultation-form"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover"
            >
              <span>Schedule a Scoping Call &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
