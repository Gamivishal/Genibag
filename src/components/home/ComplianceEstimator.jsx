import React, { useState } from 'react';
import {
  Gauge,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  RotateCcw,
  ShieldAlert,
} from 'lucide-react';

/**
 * Interactive Compliance Health Self-Assessment Widget
 * Enables prospective clients to quickly calculate their estimated compliance readiness score.
 */
export default function ComplianceEstimator() {
  const [answers, setAnswers] = useState({
    headcount: '',
    auditDate: '',
    records: '',
    posh: '',
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  const questions = [
    {
      id: 'headcount',
      label: '1. What is your current workforce size?',
      options: [
        { label: '1 – 20 Employees', score: 10 },
        { label: '21 – 50 Employees', score: 15 },
        { label: '51 – 200 Employees', score: 20 },
        { label: '200+ Employees / Multi-location', score: 25 },
      ],
    },
    {
      id: 'auditDate',
      label: '2. When did you last conduct a formal HR compliance audit?',
      options: [
        { label: 'Within the last 12 months', score: 25 },
        { label: '1 to 2 years ago', score: 15 },
        { label: 'More than 2 years ago', score: 5 },
        { label: 'Never conducted a formal audit', score: 0 },
      ],
    },
    {
      id: 'records',
      label: '3. How complete and accessible are your employee personnel files?',
      options: [
        { label: '100% digital, standardized KYC & appointment trails', score: 25 },
        { label: 'Mostly complete, but some missing documents or manual gaps', score: 15 },
        { label: 'Paper-based / dispersed across departments', score: 5 },
        { label: 'Unsure / documents missing for multiple employees', score: 0 },
      ],
    },
    {
      id: 'posh',
      label: '4. Is your POSH Internal Committee (IC) constituted with active training?',
      options: [
        { label: 'Yes, constituted with external member & annual report filed', score: 25 },
        { label: 'Constituted internally, but no formal training or filings', score: 15 },
        { label: 'Policy exists in handbook, but no formal committee', score: 5 },
        { label: 'Not constituted / Not sure', score: 0 },
      ],
    },
  ];

  const handleSelect = (questionId, score) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const isComplete =
    answers.headcount !== '' &&
    answers.auditDate !== '' &&
    answers.records !== '' &&
    answers.posh !== '';

  const totalScore =
    (answers.headcount || 0) +
    (answers.auditDate || 0) +
    (answers.records || 0) +
    (answers.posh || 0);

  const getScoreAssessment = () => {
    if (totalScore >= 80) {
      return {
        label: 'Strong Compliance Readiness',
        color: 'text-green',
        bg: 'bg-green-light',
        badge: 'Low Immediate Risk',
        description:
          'Your core processes and statutory records are relatively robust. A targeted Focused Health Check is recommended to verify sample consistency.',
      };
    }
    if (totalScore >= 50) {
      return {
        label: 'Moderate Process Gaps Detected',
        color: 'text-primary',
        bg: 'bg-primary-light',
        badge: 'Medium Risk Exposure',
        description:
          'Potential statutory vulnerabilities exist in employee record maintenance or policy versions. A Comprehensive Audit will isolate high-risk exposures.',
      };
    }
    return {
      label: 'Critical Compliance Exposure',
      color: 'text-magenta',
      bg: 'bg-magenta-light',
      badge: 'High Action Urgency',
      description:
        'Your organization has significant statutory exposure in documentation, register maintenance, or POSH compliance. Immediate scoping is strongly advised.',
    };
  };

  const assessment = getScoreAssessment();

  const handleReset = () => {
    setAnswers({
      headcount: '',
      auditDate: '',
      records: '',
      posh: '',
    });
    setHasCalculated(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-warm-grey border-t border-warm-border relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 right-0 -mr-32 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-light/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Self-Assessment Tool</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-navy tracking-tight">
            Check your HR compliance readiness in 60 seconds.
          </h2>
          <p className="text-base text-navy-muted leading-relaxed">
            Answer 4 quick questions to get an instant baseline indicator of your
            statutory exposure and recommended review scope.
          </p>
        </div>

        {/* Main Assessment Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-brand-xl p-6 sm:p-10 border border-warm-border shadow-soft-lg">
          {!hasCalculated ? (
            <div className="space-y-8">
              {/* Question List */}
              <div className="space-y-6">
                {questions.map((q) => (
                  <div key={q.id} className="space-y-3">
                    <h3 className="text-sm sm:text-base font-heading font-semibold text-navy">
                      {q.label}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt) => {
                        const isSelected = answers[q.id] === opt.score;
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleSelect(q.id, opt.score)}
                            className={`p-3 rounded-brand text-left text-xs font-medium transition-all duration-200 border flex items-center justify-between outline-none ${
                              isSelected
                                ? 'bg-primary-light/50 border-primary text-primary font-semibold shadow-card'
                                : 'bg-warm-grey/60 hover:bg-warm-grey border-warm-border text-navy-muted hover:text-navy'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                                isSelected
                                  ? 'border-primary bg-primary text-white'
                                  : 'border-warm-border bg-white'
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-warm-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-navy-muted">
                  {Object.values(answers).filter((v) => v !== '').length} of 4 questions answered
                </span>

                <button
                  type="button"
                  disabled={!isComplete}
                  onClick={() => setHasCalculated(true)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-brand transition-all duration-200 ${
                    isComplete
                      ? 'bg-primary hover:bg-primary-hover active:bg-primary-dark text-white shadow-soft cursor-pointer'
                      : 'bg-warm-grey text-neutral-placeholder border border-warm-border cursor-not-allowed'
                  }`}
                >
                  <Gauge className="w-4 h-4" />
                  <span>Calculate Readiness Score</span>
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 text-center py-4">
              <div
                className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${assessment.bg} ${assessment.color} font-bold text-2xl shadow-soft`}
              >
                {totalScore}%
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-current">
                  <span className={assessment.color}>{assessment.badge}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy">
                  {assessment.label}
                </h3>
                <p className="text-sm text-navy-muted leading-relaxed">
                  {assessment.description}
                </p>
              </div>

              {/* Action Box */}
              <div className="p-6 rounded-brand-lg bg-warm-grey border border-warm-border max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Next Step Recommended
                  </h4>
                  <p className="text-sm font-heading font-semibold text-navy">
                    Schedule a 20-minute Scoping Discussion
                  </p>
                  <p className="text-xs text-navy-muted">
                    We will review this self-assessment and outline concrete gap-closure steps.
                  </p>
                </div>

                <a
                  href="#consultation-form"
                  className="shrink-0 px-5 py-2.5 rounded-brand bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-soft flex items-center gap-1.5"
                >
                  <span>Book Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-muted hover:text-navy underline outline-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
