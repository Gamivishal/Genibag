import React from 'react';
import {
  FileText,
  CheckSquare,
  AlertTriangle,
  Kanban,
  FileSpreadsheet,
  Users2,
  CheckCircle2,
} from 'lucide-react';

/**
 * Slide 07 / WHAT CLIENTS RECEIVE:
 * Useful outputs—not just observations.
 * 6 Concrete Deliverables agreed before work begins.
 */
export default function DeliverablesSection() {
  const deliverables = [
    {
      number: '01',
      title: 'Executive Summary',
      subtitle: 'Board & Leadership View',
      description:
        'A concise, high-level synthesis of your overall HR compliance health, top risk exposure themes, and immediate leadership priorities.',
      icon: <FileText className="w-5 h-5" />,
      accent: 'primary',
      bg: 'bg-primary-light',
      text: 'text-primary',
    },
    {
      number: '02',
      title: 'Compliance & Document Checklist',
      subtitle: 'Inventory & Gaps',
      description:
        'A comprehensive record of what documents and registers were reviewed, what is currently available, and what remains outstanding.',
      icon: <CheckSquare className="w-5 h-5" />,
      accent: 'teal',
      bg: 'bg-teal-light',
      text: 'text-teal',
    },
    {
      number: '03',
      title: 'Findings Register',
      subtitle: 'Evidence-Backed Observations',
      description:
        'Detailed item-by-item logs containing the specific observation, verifiable evidence, statutory or business impact, and recommended action.',
      icon: <AlertTriangle className="w-5 h-5" />,
      accent: 'magenta',
      bg: 'bg-magenta-light',
      text: 'text-magenta',
    },
    {
      number: '04',
      title: 'Corrective Action Tracker',
      subtitle: 'Ownership & Timelines',
      description:
        'An actionable spreadsheet matrix specifying the nominated internal owner, target completion date, external dependencies, and closure status.',
      icon: <Kanban className="w-5 h-5" />,
      accent: 'blue',
      bg: 'bg-blue-light',
      text: 'text-blue',
    },
    {
      number: '05',
      title: 'Process Improvement Notes',
      subtitle: 'Workflow Modernization',
      description:
        'Practical, realistic recommendations to strengthen ongoing HR workflows, improve internal accountability, and prevent recurring gaps.',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      accent: 'green',
      bg: 'bg-green-light',
      text: 'text-green',
    },
    {
      number: '06',
      title: 'Leadership Readout',
      subtitle: 'Closing Alignment Session',
      description:
        'A dedicated closing presentation with company founders and key decision-makers to align on strategic next steps and support required.',
      icon: <Users2 className="w-5 h-5" />,
      accent: 'primary',
      bg: 'bg-primary-light',
      text: 'text-primary',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            06 / What Clients Receive
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            Useful outputs—not just observations.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            Deliverables are agreed before work begins and reflect the verified
            scope of the engagement. No vague checklists; only practical tools for action.
          </p>
        </div>

        {/* 6 Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {deliverables.map((item) => (
            <div
              key={item.number}
              className="bg-warm-grey rounded-brand-lg p-6 sm:p-7 border border-warm-border hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-brand-sm ${item.bg} ${item.text}`}
                  >
                    DELIVERABLE {item.number}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-brand flex items-center justify-center ${item.bg} ${item.text}`}
                  >
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-navy group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-navy-muted mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm text-navy-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-warm-border/60 flex items-center gap-2 text-xs font-medium text-navy">
                <CheckCircle2 className={`w-4 h-4 ${item.text} shrink-0`} />
                <span>Ready for Executive &amp; Audit Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
