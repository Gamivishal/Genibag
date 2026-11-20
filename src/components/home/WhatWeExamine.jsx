import React, { useState } from 'react';
import {
  Users,
  UserCheck,
  Clock,
  BookOpen,
  Building,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

/**
 * Slide 06 / WHAT WE EXAMINE:
 * A closer look at your HR operating system.
 * 6 Examination Areas with specific checklist items.
 */
export default function WhatWeExamine() {
  const [activeTab, setActiveTab] = useState(0);

  const domains = [
    {
      id: 'people-files',
      title: 'People Files',
      subtitle: 'Employee Records & Documentation',
      icon: <Users className="w-5 h-5" />,
      accentText: 'text-primary',
      accentBg: 'bg-primary-light',
      items: [
        {
          name: 'Offer & Appointment Letters',
          desc: 'Verified role scope, terms of service, probation clauses, and compensation alignment.',
        },
        {
          name: 'KYC & Qualification Verification',
          desc: 'ID proof, address records, educational credentials, and employment background checks.',
        },
        {
          name: 'Job Descriptions & Role Changes',
          desc: 'Documented promotions, designation updates, and reporting line changes across tenure.',
        },
      ],
    },
    {
      id: 'joining-to-exit',
      title: 'Joining to Exit',
      subtitle: 'Full Lifecycle Journey',
      icon: <UserCheck className="w-5 h-5" />,
      accentText: 'text-teal',
      accentBg: 'bg-teal-light',
      items: [
        {
          name: 'Recruitment & Onboarding Process',
          desc: 'Consistency in sourcing, candidate communication, onboarding pack, and induction logs.',
        },
        {
          name: 'Confirmation & Internal Transfers',
          desc: 'Formal evaluation cycles, probation confirmations, and inter-departmental transfers.',
        },
        {
          name: 'Resignation, Clearance & Full & Final (F&F)',
          desc: 'Notice adherence, handover checklists, asset recovery, and timely settlement evidence.',
        },
      ],
    },
    {
      id: 'time-and-pay',
      title: 'Time & Pay Inputs',
      subtitle: 'Attendance, Leave & Payroll Controls',
      icon: <Clock className="w-5 h-5" />,
      accentText: 'text-blue',
      accentBg: 'bg-blue-light',
      items: [
        {
          name: 'Attendance & Leave Controls',
          desc: 'Leave applications, approvals, leave balances, and biometric/system punch records.',
        },
        {
          name: 'Overtime & Shift Logs',
          desc: 'Compliance with statutory daily/weekly working hour limits and shift allowance rules.',
        },
        {
          name: 'Payroll Input Approvals & Reconciliations',
          desc: 'Authorization matrix for salary variables, incentives, deductions, and payout integrity.',
        },
      ],
    },
    {
      id: 'policies-culture',
      title: 'Policies & Culture',
      subtitle: 'Handbook & Workplace Governance',
      icon: <BookOpen className="w-5 h-5" />,
      accentText: 'text-magenta',
      accentBg: 'bg-magenta-light',
      items: [
        {
          name: 'Employee Handbook & Code of Conduct',
          desc: 'Current versions, employee sign-offs, and clear communication on behavioural expectations.',
        },
        {
          name: 'Grievance & Disciplinary Mechanisms',
          desc: 'Structured escalation channels, investigation norms, and fair hearing protocols.',
        },
        {
          name: 'POSH-related Process & Awareness',
          desc: 'Internal Committee (IC) constitution, employee sensitization, and annual compliance filings.',
        },
      ],
    },
    {
      id: 'statutory-readiness',
      title: 'Statutory Readiness',
      subtitle: 'Labour Laws, Registers & Notices',
      icon: <Building className="w-5 h-5" />,
      accentText: 'text-green',
      accentBg: 'bg-green-light',
      items: [
        {
          name: 'Applicable Registers & Mandatory Notices',
          desc: 'Muster rolls, wage registers, inspection books, and mandatory establishment abstracts.',
        },
        {
          name: 'Filing & Statutory Payment Evidence',
          desc: 'Timely remittance documentation for PF, ESI, Professional Tax, and statutory returns.',
        },
        {
          name: 'Contractor & Vendor Documentation',
          desc: 'Service agreements, third-party labor licences, and subcontractor compliance audits.',
        },
      ],
    },
    {
      id: 'governance-controls',
      title: 'Governance & Controls',
      subtitle: 'Approvals, Retention & Escalation',
      icon: <ShieldCheck className="w-5 h-5" />,
      accentText: 'text-primary',
      accentBg: 'bg-primary-light',
      items: [
        {
          name: 'Approval Matrix & Role Ownership',
          desc: 'Clear delegation of financial and HR authorities across management levels.',
        },
        {
          name: 'Record Retention & Data Access',
          desc: 'Safe storage of confidential personnel records and GDPR/privacy aligned access controls.',
        },
        {
          name: 'Exception Handling & Escalation Matrix',
          desc: 'Formal audit trails for policy deviations, salary overrides, and emergency departures.',
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            05 / What We Examine
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            A closer look at your HR operating system.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            The final checklist is tailored to the agreed scope, establishment type,
            and records available. Here are the 6 core pillars we examine:
          </p>
        </div>

        {/* 6 Tabs for Desktop & Tablets */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {domains.map((domain, index) => (
            <button
              key={domain.id}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`p-3.5 rounded-brand text-left transition-all duration-200 border flex flex-col justify-between outline-none ${
                activeTab === index
                  ? 'bg-white border-primary shadow-soft text-primary font-semibold'
                  : 'bg-white/60 hover:bg-white border-warm-border text-navy-muted hover:text-navy'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-brand-sm flex items-center justify-center mb-2 ${domain.accentBg} ${domain.accentText}`}
              >
                {domain.icon}
              </div>
              <span className="text-xs font-heading font-medium leading-tight">
                {domain.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Domain Detail Card */}
        <div className="bg-white rounded-brand-xl p-6 sm:p-10 border border-warm-border shadow-soft">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-warm-border gap-4">
            <div className="flex items-center gap-3.5">
              <div
                className={`w-12 h-12 rounded-brand flex items-center justify-center ${domains[activeTab].accentBg} ${domains[activeTab].accentText}`}
              >
                {domains[activeTab].icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Operating Domain 0{activeTab + 1}
                </span>
                <h3 className="text-xl font-heading font-bold text-navy">
                  {domains[activeTab].title}
                </h3>
                <p className="text-xs text-navy-muted">
                  {domains[activeTab].subtitle}
                </p>
              </div>
            </div>

            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-warm-grey border border-warm-border text-navy">
              Tailored Checklist Items
            </span>
          </div>

          {/* 3 Detail Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains[activeTab].items.map((item, idx) => (
              <div
                key={item.name}
                className="p-5 rounded-brand bg-warm-grey/60 border border-warm-border/80 hover:bg-warm-grey transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${domains[activeTab].accentText} shrink-0`} />
                  <h4 className="text-sm font-heading font-semibold text-navy">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-navy-muted leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
