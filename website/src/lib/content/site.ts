export const site = {
  name: "Coriva One",
  wordmark: "CORIVAONE",
  tagline: "PEOPLE | COMPLIANCE | GROWTH",
  scriptTagline: "Your Growth. Our Commitment.",
  partnerLine: "Your Apprenticeship Partner for a Stronger Tomorrow.",
  email: "ranjeeta.rajputa@corivaone.com",
  website: "www.corivaone.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
} as const;

export const nav = {
  services: [
    { href: "/services/naps", label: "NAPS Apprenticeship" },
    { href: "/services/nats", label: "NATS Apprenticeship" },
    { href: "/services/programme-management", label: "End-to-End Programme Management" },
    { href: "/services/talent-sourcing", label: "Talent Sourcing for Apprentices" },
    { href: "/services/compliance-reporting", label: "Compliance & Reporting Support" },
  ],
  industries: [
    { href: "/industries/manufacturing", label: "Manufacturing" },
    { href: "/industries/logistics", label: "Logistics" },
    { href: "/industries/it-software", label: "IT & Software" },
    { href: "/industries", label: "All Industries" },
  ],
  resources: [
    { href: "/resources/naps-vs-nats", label: "NAPS vs NATS Guide" },
    { href: "/resources/faq", label: "FAQ" },
    { href: "/blog", label: "Blog / Insights" },
    { href: "/tools/naps-stipend-calculator", label: "Stipend Calculator" },
    { href: "/tools/am-i-compliant", label: "Am I Compliant?" },
  ],
} as const;

export const pillars = [
  {
    title: "Compliance Made Easy",
    body: "Stay aligned with apprenticeship guidelines and establishment obligations without drowning in portal work.",
  },
  {
    title: "Skilled Workforce",
    body: "Build a pipeline of job-ready talent trained on your floor, roles, and operating standards.",
  },
  {
    title: "Cost Effective",
    body: "Share stipend cost with government support under NAPS and NATS while reducing entry-level hiring load.",
  },
  {
    title: "End-to-End Support",
    body: "From registration and contracts to stipend administration, monitoring, and reporting — we run the programme with you.",
  },
] as const;

export const whyChoose = [
  "100% compliance support across registration, contracts, and programme records",
  "Hassle-free registration and documentation on apprenticeship portals",
  "Skilled and trained talent pool matched to your roles and locations",
  "Continuous monitoring and reporting so leadership stays audit-ready",
] as const;

export const processSteps = [
  {
    title: "Eligibility & obligation audit",
    body: "Headcount analysis, scheme fit (NAPS / NATS), and your 2.5%–15% band.",
    you: "Share workforce numbers and role needs",
    we: "Map obligation, scheme mix, and intake plan",
  },
  {
    title: "Portal registration & setup",
    body: "Establishment registration and trade/course mapping under your name.",
    you: "Approve establishment details",
    we: "Configure portal setup correctly first time",
  },
  {
    title: "Sourcing & selection",
    body: "Candidates sourced against your role and location matrix; you select.",
    you: "Interview / shortlist",
    we: "Source, screen, and present fit profiles",
  },
  {
    title: "Contracts & onboarding",
    body: "Apprenticeship contracts registered; joining formalities coordinated.",
    you: "Confirm joining dates and supervisors",
    we: "Execute contracts and onboarding checklist",
  },
  {
    title: "Stipend & incentive support",
    body: "Monthly stipend runs and NAPS/NATS DBT workflows kept on track.",
    you: "Fund employer stipend share on time",
    we: "Process records that unlock government share",
  },
  {
    title: "Monitoring & MIS",
    body: "Attendance, training logs, and leadership-ready programme visibility.",
    you: "Provide supervisor feedback",
    we: "Maintain records and monthly MIS",
  },
  {
    title: "Assessment & conversion",
    body: "End-of-term support and structured absorption recommendations.",
    you: "Decide who to absorb",
    we: "Coordinate assessments and conversion path",
  },
] as const;