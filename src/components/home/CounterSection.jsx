import React from 'react';

/**
 * Counter Section matching Bixoo's `counter-section`:
 * Highlights 4 key corporate consulting proof metrics.
 */
export default function CounterSection() {
  const stats = [
    {
      value: '100%',
      label: 'Statutory & Practical Scope',
      desc: 'Mapped to establishment type, location & labor codes',
    },
    {
      value: '6-Stage',
      label: 'Evidence-Led Method',
      desc: 'Discovery to closure verification roadmap',
    },
    {
      value: '3',
      label: 'Flexible Engagement Tiers',
      desc: 'Health Check, Full Audit, or Advisory support',
    },
    {
      value: '0',
      label: 'Unnecessary Disruption',
      desc: 'Seamless off-site review with zero business downtime',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-warm-border text-center">
          {stats.map((stat, idx) => (
            <div key={stat.label} className={`pt-6 lg:pt-0 ${idx !== 0 ? 'lg:pl-8' : ''}`}>
              <div className="text-3xl sm:text-5xl font-heading font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm font-heading font-bold text-navy mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-navy-muted max-w-xs mx-auto leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
