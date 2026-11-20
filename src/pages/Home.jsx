import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CounterSection from '../components/home/CounterSection';
import ValueProposition from '../components/home/ValueProposition';
import ServicesSection from '../components/home/ServicesSection';
import ComplianceEstimator from '../components/home/ComplianceEstimator';
import AuditMethodology from '../components/home/AuditMethodology';
import WhatWeExamine from '../components/home/WhatWeExamine';
import DeliverablesSection from '../components/home/DeliverablesSection';
import ChooseUsSection from '../components/home/ChooseUsSection';
import BeforeAfterComparison from '../components/home/BeforeAfterComparison';
import SampleFindingsSection from '../components/home/SampleFindingsSection';
import EngagementModels from '../components/home/EngagementModels';
import CTABanner from '../components/home/CTABanner';
import PartnershipCommitment from '../components/home/PartnershipCommitment';
import FAQSection from '../components/home/FAQSection';
import ConsultationCTA from '../components/home/ConsultationCTA';
import FloatingActionHub from '../components/home/FloatingActionHub';

/**
 * Premium Home Page for Geniebag Solutions
 * Perfectly styled with Bixoo Corporate Consulting patterns & 12-slide HR presentation content:
 * - 01. Bixoo Hero Section (Full-bleed slider, dark overlay, vertical social bar, dual buttons)
 * - 02. Bixoo Counter Section (100% Statutory Scope, 6-Stage Method, 3 Tiers, 0 Disruption)
 * - 03. Bixoo About Section (Feature photo + Overlapping corporate card + 3 Pillar boxes)
 * - 04. Modular Services Grid & Compliance Lens (Slide 03 & 04)
 * - 05. Interactive 60-Second Compliance Health Estimator
 * - 06. 6-Step Audit Methodology & 4 Core Promises (Slide 05)
 * - 07. What We Examine / Scope Matrix Tabs (Slide 06)
 * - 08. Deliverables Showcase / 6 Tangible Outputs (Slide 07)
 * - 09. Bixoo Choose Us Section (What You Get vs How We Work - Slide 08)
 * - 10. Before vs After Transformation Showcase
 * - 11. Sample Findings & Risk Priority Matrix (Slide 09)
 * - 12. Flexible Engagement Tiers (Slide 10)
 * - 13. Bixoo High-Impact Gradient CTA Banner
 * - 14. A Good Partnership & Statutory Boundaries (Slide 11)
 * - 15. FAQ Accordion Section
 * - 16. Consultation Booking & Scoping Form (Slide 12)
 * - 17. Floating Action Hub (Back to Top & Quick FAB)
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col relative">
      {/* 01. Bixoo Signature Hero Section */}
      <HeroSection />

      {/* 02. Bixoo Stats Counter Section */}
      <CounterSection />

      {/* 03. Bixoo About Section (3 Pillars + Photography) */}
      <ValueProposition />

      {/* 04. 6 Modular Services Grid */}
      <ServicesSection />

      {/* 05. Interactive 60-Second Compliance Health Estimator */}
      <ComplianceEstimator />

      {/* 06. 6-Step Audit Methodology & 4 Promises */}
      <AuditMethodology />

      {/* 07. What We Examine / Operating System Checklist */}
      <WhatWeExamine />

      {/* 08. 6 Concrete Deliverables Showcase */}
      <DeliverablesSection />

      {/* 09. Bixoo Choose Us (What You Get vs How We Work) */}
      <ChooseUsSection />

      {/* 10. Before vs After Transformation Showcase */}
      <BeforeAfterComparison />

      {/* 11. Sample Findings & Risk Priority Matrix */}
      <SampleFindingsSection />

      {/* 12. Flexible Engagement Models */}
      <EngagementModels />

      {/* 13. Bixoo High-Impact Gradient CTA Banner */}
      <CTABanner />

      {/* 14. A Good Partnership & Mutual Commitments */}
      <PartnershipCommitment />

      {/* 15. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 16. Consultation Booking Form */}
      <ConsultationCTA />

      {/* 17. Floating Action Hub */}
      <FloatingActionHub />
    </div>
  );
}
