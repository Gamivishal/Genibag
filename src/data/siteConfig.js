/**
 * Central site configuration for Geniebag Solutions
 * Edit brand info, contact details, navigation, services, and social links here.
 */

export const siteConfig = {
  brand: {
    name: "GENIEBAG SOLUTIONS",
    shortName: "Geniebag",
    subtitle: "{The Management Basket}",
    businessLine: "HR Compliance & Audit Consultancy",
    tagline: "Clarity for your people. Confidence for your business.",
    mission: "Practical, proportionate and people-aware HR governance.",
    assurance: "OUR SERVICES • OUR APPROACH • YOUR ASSURANCE",
  },

  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    email: "info@geniebagsolutions.com",
    hours: "Mon–Sat, 10am–7pm",
    address: {
      street: "Plot No. 42, Sector 18, Institutional Area",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122002",
      country: "India",
      display: "Sector 18, Institutional Area, Gurugram, Haryana 122002, India",
    },
  },

  cta: {
    label: "Book a Consultation",
    href: "/contact",
  },

  // 6 Core Modular Services from Presentation Slide 03
  services: [
    {
      id: "hr-compliance-review",
      number: "01",
      title: "HR Compliance Review",
      shortTitle: "Compliance Review",
      description: "Review applicable labour-law requirements, records, registers, notices and filing workflows.",
      href: "/services/hr-compliance-review",
      accent: "primary", // orange
    },
    {
      id: "hr-process-audit",
      number: "02",
      title: "HR Process Audit",
      shortTitle: "Process Audit",
      description: "Examine recruitment, onboarding, attendance, leave, employee changes and exits.",
      href: "/services/hr-process-audit",
      accent: "teal",
    },
    {
      id: "policy-documentation",
      number: "03",
      title: "Policy & Documentation",
      shortTitle: "Policy & Docs",
      description: "Assess HR policies, appointment documents, employee handbook and process consistency.",
      href: "/services/policy-documentation",
      accent: "magenta",
    },
    {
      id: "employee-records-audit",
      number: "04",
      title: "Employee Records Audit",
      shortTitle: "Records Audit",
      description: "Check completeness, accuracy, accessibility and retention of employee files.",
      href: "/services/employee-records-audit",
      accent: "blue",
    },
    {
      id: "compensation-benefits-review",
      number: "05",
      title: "Compensation & Benefits Review",
      shortTitle: "Comp & Benefits",
      description: "Review salary structures, internal alignment, benefits records and process controls.",
      href: "/services/compensation-benefits-review",
      accent: "green",
    },
    {
      id: "action-plan-advisory",
      number: "06",
      title: "Action Plan & Advisory",
      shortTitle: "Action Plan",
      description: "Prioritise findings, assign owners and support implementation of agreed improvements.",
      href: "/services/action-plan-advisory",
      accent: "primary", // orange
    },
  ],

  // Main navigation menu
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      isDropdown: true,
    },
    { label: "Our Approach", href: "/approach" },
    { label: "Engagement Options", href: "/engagement-options" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer quick links
  footerQuickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Approach", href: "/approach" },
    { label: "Engagement Options", href: "/engagement-options" },
    { label: "Contact", href: "/contact" },
  ],

  // 4 Promises strip above the footer bottom bar (from Presentation Slide 05)
  promises: [
    "Clear scope",
    "Confidential handling",
    "Evidence-led recommendations",
    "No unnecessary disruption",
  ],

  // Disclaimer line from Slide 11
  disclaimer:
    "Our consultancy review supports compliance readiness; it is not a guarantee of legal compliance or a substitute for advice from a qualified legal / statutory professional where required.",

  // Social profiles (placeholder links)
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/geniebag-solutions",
      platform: "linkedin",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/geniebagsolutions",
      platform: "facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/geniebagsolutions",
      platform: "instagram",
    },
    {
      name: "X",
      href: "https://x.com/geniebag",
      platform: "x",
    },
  ],

  // Legal / Bottom bar links
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};
