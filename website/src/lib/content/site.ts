export const site = {
  name: "Coriva One",
  wordmark: "CORIVAONE",
  tagline: "PEOPLE | SOLUTIONS | GROWTH",
  scriptTagline: "Your Growth. Our Commitment.",
  partnerLine: "People. Solutions. Growth.",
  email: "sahil.mahotra@corivaone.com",
  secondaryEmail: "ranjeeta.rajputa@corivaone.com",
  website: "www.corivaone.com",
  location: "Gurugram, Haryana, India",
  salesName: "Sahil Mahotra",
  salesTitle: "Senior Sales Manager",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+91 98111 23456",
  logoSrc: "/brand/corivaone-logo.png",
} as const;

export const nav = {
  services: [
    { href: "/services/apprenticeship-management", label: "Apprenticeship Management Services" },
    { href: "/services/naps", label: "NAPS" },
    { href: "/services/nats", label: "NATS" },
    { href: "/services/hospitality-support", label: "Hospitality Support Services" },
    { href: "/services/staffing", label: "Staffing Solutions" },
    { href: "/services/recruitment", label: "Recruitment Solutions" },
    { href: "/services/labour-compliances", label: "Labour Compliances" },
    { href: "/services/licensing", label: "Licensing Solutions" },
    { href: "/services/hrms", label: "HRMS Solutions" },
  ],
  apprenticeship: [
    { href: "/services/apprenticeship-management", label: "Overview" },
    { href: "/services/naps", label: "NAPS" },
    { href: "/services/nats", label: "NATS" },
    { href: "/services/programme-management", label: "Programme Management" },
    { href: "/services/talent-sourcing", label: "Talent Sourcing" },
    { href: "/services/compliance-reporting", label: "Compliance & Reporting" },
  ],
  industries: [
    { href: "/industries/manufacturing", label: "Manufacturing" },
    { href: "/industries/logistics", label: "Logistics" },
    { href: "/industries/it-software", label: "IT & Software" },
    { href: "/industries/hospitality", label: "Hospitality & Healthcare" },
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

export const businessVerticals = [
  {
    href: "/services/apprenticeship-management",
    title: "Apprenticeship Management Services",
    body: "End-to-end NAPS & NATS programmes — registration, sourcing, stipend support, compliance, and reporting.",
  },
  {
    href: "/services/hospitality-support",
    title: "Hospitality Support Services",
    body: "Corporate linen management and care, including hospital laundry and managed textile services.",
  },
  {
    href: "/services/staffing",
    title: "Staffing Solutions",
    body: "Flexible workforce deployment for operations, projects, and seasonal demand.",
  },
  {
    href: "/services/recruitment",
    title: "Recruitment Solutions",
    body: "Role-fit hiring across permanent, campus, and specialised mandates.",
  },
  {
    href: "/services/labour-compliances",
    title: "Labour Compliances",
    body: "Statutory and labour-law compliance support to keep establishments audit-ready.",
  },
  {
    href: "/services/licensing",
    title: "Licensing Solutions",
    body: "Registrations and licences support for smoother business operations.",
  },
  {
    href: "/services/hrms",
    title: "HRMS Solutions",
    body: "HR systems enablement for attendance, payroll inputs, and employee lifecycle visibility.",
  },
] as const;

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