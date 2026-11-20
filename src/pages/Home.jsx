import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ValueProposition from '../components/home/ValueProposition';
import ServicesSection from '../components/home/ServicesSection';
import ComplianceEstimator from '../components/home/ComplianceEstimator';
import AuditMethodology from '../components/home/AuditMethodology';
import WhatWeExamine from '../components/home/WhatWeExamine';
import DeliverablesSection from '../components/home/DeliverablesSection';
import BeforeAfterComparison from '../components/home/BeforeAfterComparison';
import SampleFindingsSection from '../components/home/SampleFindingsSection';
import EngagementModels from '../components/home/EngagementModels';
import PartnershipCommitment from '../components/home/PartnershipCommitment';
import FAQSection from '../components/home/FAQSection';
import ConsultationCTA from '../components/home/ConsultationCTA';
import FloatingActionHub from '../components/home/FloatingActionHub';

/**
 * Premium Home Page for Geniebag Solutions
 * Complete corporate consultancy implementation:
 * - 01. Hero & Compliance Snapshot (Slide 01)
 * - 02. The Big Picture / 3 Pillars (Slide 02)
 * - 03. 6 Modular Services & Compliance Lens (Slide 03 & 04)
 * - 04. Interactive 60-Second Compliance Health Estimator (Interactive Feature)
 * - 05. 6-Step Audit Methodology & 4 Promises (Slide 05)
 * - 06. What We Examine / 6 Operating Domains (Slide 06)
 * - 07. What Clients Receive / 6 Concrete Deliverables (Slide 07)
 * - 08. Before vs After Transformation Showcase (Premium Comparison)
 * - 09. Sample Findings & Risk Priority Matrix (Slide 08 & 09)
 * - 10. Flexible Engagement Options (Slide 10)
 * - 11. A Good Partnership & Statutory Boundaries (Slide 11)
 * - 12. Frequently Asked Questions Accordion (Client Confidence)
 * - 13. Consultation Booking & Scoping Call Action (Slide 12)
 * - 14. Floating Action Hub (Back to Top & Quick Consultation FAB)
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col relative">
      {/* 01. Hero & Compliance Snapshot */}
      <HeroSection />

      {/* 02. The Big Picture / 3 Value Pillars */}
      <ValueProposition />

      {/* 03. Modular Services & Compliance Lens */}
      <ServicesSection />

      {/* 04. Interactive 60-Second Compliance Health Estimator */}
      <ComplianceEstimator />

      {/* 05. 6-Step Audit Methodology & 4 Promises */}
      <AuditMethodology />

      {/* 06. What We Examine / Scope Matrix */}
      <WhatWeExamine />

      {/* 07. Deliverables / 6 Outputs */}
      <DeliverablesSection />

      {/* 08. Before vs After Transformation Showcase */}
      <BeforeAfterComparison />

      {/* 09. Sample Findings & Risk Priority Matrix */}
      <SampleFindingsSection />

      {/* 10. Flexible Engagement Options */}
      <EngagementModels />

      {/* 11. A Good Partnership & Mutual Commitments */}
      <PartnershipCommitment />

      {/* 12. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 13. Consultation Booking & Scoping Form */}
      <ConsultationCTA />

      {/* 14. Floating Action Hub */}
      <FloatingActionHub />
    </div>
  );
}
