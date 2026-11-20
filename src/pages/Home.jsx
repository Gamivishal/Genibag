import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ValueProposition from '../components/home/ValueProposition';
import ServicesSection from '../components/home/ServicesSection';
import AuditMethodology from '../components/home/AuditMethodology';
import WhatWeExamine from '../components/home/WhatWeExamine';
import DeliverablesSection from '../components/home/DeliverablesSection';
import SampleFindingsSection from '../components/home/SampleFindingsSection';
import EngagementModels from '../components/home/EngagementModels';
import PartnershipCommitment from '../components/home/PartnershipCommitment';
import ConsultationCTA from '../components/home/ConsultationCTA';

/**
 * Home Page for Geniebag Solutions
 * Comprehensive implementation covering all 12 slides from the company presentation:
 * - Slide 01: Hero & Compliance Snapshot
 * - Slide 02: Value Proposition (3 Pillars: Protect, Support, Enable)
 * - Slide 03 & 04: 6 Modular Services & Compliance Lens
 * - Slide 05: 6-Step Audit Methodology & 4 Promises
 * - Slide 06: What We Examine (6 HR Operating Domains)
 * - Slide 07: What Clients Receive (6 Concrete Deliverables)
 * - Slide 08 & 09: Why Geniebag & Realistic Findings Preview / Risk Priority
 * - Slide 10: Flexible Engagement Models (Health Check, Full Audit, Advisory)
 * - Slide 11: A Good Partnership & Statutory Boundaries
 * - Slide 12: Consultation Booking & Scoping Call Action
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 01. Hero & Compliance Snapshot (Slide 01) */}
      <HeroSection />

      {/* 02. The Big Picture / 3 Pillars (Slide 02) */}
      <ValueProposition />

      {/* 03. Modular Services & Compliance Lens (Slide 03 & 04) */}
      <ServicesSection />

      {/* 04. 6-Step Audit Methodology & 4 Promises (Slide 05) */}
      <AuditMethodology />

      {/* 05. What We Examine / Scope Matrix (Slide 06) */}
      <WhatWeExamine />

      {/* 06. Deliverables / 6 Outputs (Slide 07) */}
      <DeliverablesSection />

      {/* 07. Sample Findings & Risk Priority Matrix (Slide 08 & 09) */}
      <SampleFindingsSection />

      {/* 08. Flexible Engagement Options (Slide 10) */}
      <EngagementModels />

      {/* 09. A Good Partnership & Mutual Commitments (Slide 11) */}
      <PartnershipCommitment />

      {/* 10. Let's Make HR Ready / Consultation Form (Slide 12) */}
      <ConsultationCTA />
    </div>
  );
}
