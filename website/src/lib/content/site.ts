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

/** Primary services shown on home + main commercial menu order */
export const servicesWeCater = [
  {
    href: "/services/apprenticeship-management",
    title: "Apprenticeship Programs",
    body: "End-to-end NAPS & NATS apprenticeship management for compliant, cost-effective talent pipelines.",
  },
  {
    href: "/services/staffing",
    title: "Staffing Solutions",
    body: "Flexible workforce deployment for operations, projects, and seasonal demand.",
  },
  {
    href: "/services/recruitment",
    title: "Recruitment Services",
    body: "Role-fit hiring across permanent, campus, and specialised mandates.",
  },
  {
    href: "/services/payroll",
    title: "Payroll Management",
    body: "Accurate payroll processing with statutory inputs and dependable monthly runs.",
  },
  {
    href: "/services/labour-compliances",
    title: "Labour Law Compliances",
    body: "Statutory and labour-law compliance support to keep establishments audit-ready.",
  },
  {
    href: "/services/hrms",
    title: "HRMS",
    body: "HR systems enablement for attendance, payroll inputs, and employee lifecycle visibility.",
  },
] as const;

export const industriesWeCater = [
  {
    href: "/industries/manufacturing",
    title: "Manufacturing",
    body: "Plant, quality, and shop-floor workforce programmes.",
  },
  {
    href: "/industries/logistics",
    title: "Logistics",
    body: "Warehouse, dispatch, and multi-site operations support.",
  },
  {
    href: "/industries/hospitality",
    title: "Hospitality",
    body: "Hotels, facilities, and hospitality operations.",
  },
  {
    href: "/industries/it-software",
    title: "IT & ITeS",
    body: "Technology and services talent pipelines.",
  },
  {
    href: "/industries/power",
    title: "Power",
    body: "Energy and utilities workforce solutions.",
  },
  {
    href: "/industries/retail-ecommerce",
    title: "Retail & E-commerce",
    body: "Store, fulfilment, and customer-ops scale.",
  },
] as const;

export const nav = {
  services: [
    { href: "/services/apprenticeship-management", label: "Apprenticeship Programs" },
    { href: "/services/naps", label: "NAPS" },
    { href: "/services/nats", label: "NATS" },
    { href: "/services/staffing", label: "Staffing Solutions" },
    { href: "/services/recruitment", label: "Recruitment Services" },
    { href: "/services/payroll", label: "Payroll Management" },
    { href: "/services/labour-compliances", label: "Labour Law Compliances" },
    { href: "/services/hrms", label: "HRMS" },
    { href: "/services/hospitality-support", label: "Hospitality Support Services" },
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
    { href: "/industries/hospitality", label: "Hospitality" },
    { href: "/industries/it-software", label: "IT & ITeS" },
    { href: "/industries/power", label: "Power" },
    { href: "/industries/retail-ecommerce", label: "Retail & E-commerce" },
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
    title: "People First",
    body: "Build skilled talent pipelines and dependable workforce capacity across roles and locations.",
  },
  {
    title: "End-to-End Solutions",
    body: "From apprenticeship and staffing to payroll, compliance, HRMS, and hospitality support — one partner.",
  },
  {
    title: "Operational Clarity",
    body: "Clear processes, documentation, and reporting so leadership stays in control every month.",
  },
  {
    title: "Growth Ready",
    body: "Scale people and operations without losing compliance discipline or service quality.",
  },
] as const;

export const whyChoose = [
  "New-age startup mindset with practical, execution-led delivery",
  "End-to-end solutions across workforce, compliance, and hospitality support",
  "Apprenticeship programmes under NAPS & NATS with portal-to-reporting ownership",
  "Dedicated hospitality support through managed linen and textile care services",
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