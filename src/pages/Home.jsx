import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MarqueeTicker from '../components/home/MarqueeTicker';
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
 * - 01. Bixoo Hero Section (Full-bleed slider, dark overlay, vertical social bar, dual buttons, float-bob-x)
 * - 02. Bixoo Infinite Marquee Ticker (Continuous glassmorphic service pills)
 * - 03. Bixoo Stats Counter Section (100% Statutory Scope, 6-Stage Method, 3 Tiers, 0 Disruption)
 * - 04. Bixoo About Section (Feature photo + Overlapping corporate card + 3 Pillar boxes + float-bob-y)
 * - 05. 6 Modular Services Grid & Compliance Lens (Slide 03 & 04)
 * - 06. Interactive 60-Second Compliance Health Estimator
 * - 07. 6-Step Audit Methodology & 4 Core Promises (Slide 05)
 * - 08. What We Examine / Scope Matrix Tabs (Slide 06)
 * - 09. Deliverables Showcase / 6 Tangible Outputs (Slide 07)
 * - 10. Bixoo Choose Us Section (What You Get vs How We Work - Slide 08)
 * - 11. Before vs After Transformation Showcase
 * - 12. Sample Findings & Risk Priority Matrix (Slide 09)
 * - 13. Flexible Engagement Tiers (Slide 10)
 * - 14. Bixoo High-Impact Gradient CTA Banner
 * - 15. A Good Partnership & Statutory Boundaries (Slide 11)
 * - 16. FAQ Accordion Section
 * - 17. Consultation Booking & Scoping Form (Slide 12)
 * - 18. Floating Action Hub (Back to Top & Quick FAB)
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col relative">
      {/* 01. Bixoo Signature Hero Section with float-bob-x */}
      <HeroSection />

      {/* 02. Bixoo Signature Infinite Marquee Ticker */}
      <MarqueeTicker />

      {/* 03. Bixoo Stats Counter Section */}
      <CounterSection />

      {/* 04. Bixoo About Section with float-bob-y */}
      <ValueProposition />

      {/* 05. 6 Modular Services Grid */}
      <ServicesSection />

      {/* 06. Interactive 60-Second Compliance Health Estimator */}
      <ComplianceEstimator />

      {/* 07. 6-Step Audit Methodology & 4 Promises */}
      <AuditMethodology />

      {/* 08. What We Examine / Operating System Checklist */}
      <WhatWeExamine />

      {/* 09. 6 Concrete Deliverables Showcase */}
      <DeliverablesSection />

      {/* 10. Bixoo Choose Us (What You Get vs How We Work) */}
      <ChooseUsSection />

      {/* 11. Before vs After Transformation Showcase */}
      <BeforeAfterComparison />

      {/* 12. Sample Findings & Risk Priority Matrix */}
      <SampleFindingsSection />

      {/* 13. Flexible Engagement Models */}
      <EngagementModels />

      {/* 14. Bixoo High-Impact Gradient CTA Banner */}
      <CTABanner />

      {/* 15. A Good Partnership & Mutual Commitments */}
      <PartnershipCommitment />

      {/* 16. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 17. Consultation Booking Form */}
      <ConsultationCTA />

      {/* 18. Floating Action Hub */}
      <FloatingActionHub />
    </div>
  );
}
