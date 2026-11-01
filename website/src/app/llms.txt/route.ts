const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corivaone.com";

const body = `# Coriva One
> NAPS & NATS apprenticeship programme partner for SMEs and mid-sized enterprises in India.
> Tagline: People | Compliance | Growth

## Primary
- Home: ${SITE_URL}/
- About: ${SITE_URL}/about
- Contact: ${SITE_URL}/contact
- How it works: ${SITE_URL}/how-it-works
- Why Coriva One: ${SITE_URL}/why-corivaone
- Pricing: ${SITE_URL}/pricing

## Services
- NAPS: ${SITE_URL}/services/naps
- NATS: ${SITE_URL}/services/nats
- Programme management: ${SITE_URL}/services/programme-management
- Talent sourcing: ${SITE_URL}/services/talent-sourcing
- Compliance & reporting: ${SITE_URL}/services/compliance-reporting

## Industries
- All industries: ${SITE_URL}/industries
- Manufacturing: ${SITE_URL}/industries/manufacturing
- Logistics: ${SITE_URL}/industries/logistics
- IT & Software: ${SITE_URL}/industries/it-software

## Resources & tools
- NAPS vs NATS: ${SITE_URL}/resources/naps-vs-nats
- FAQ: ${SITE_URL}/resources/faq
- Obligation guide: ${SITE_URL}/resources/apprenticeship-obligation-india
- Stipend incentives: ${SITE_URL}/resources/stipend-incentives
- Glossary: ${SITE_URL}/resources/glossary
- Checklist: ${SITE_URL}/resources/naps-nats-checklist
- Stipend calculator: ${SITE_URL}/tools/naps-stipend-calculator
- Compliance checker: ${SITE_URL}/tools/am-i-compliant

## Blog
- Blog index: ${SITE_URL}/blog
- Mandatory at 30 employees: ${SITE_URL}/blog/is-apprenticeship-mandatory-30-employees
- NAPS vs NATS by industry: ${SITE_URL}/blog/naps-vs-nats-manufacturing-vs-it
- NAPS 2.0 DBT: ${SITE_URL}/blog/how-naps-2-dbt-works

## Other
- Case studies: ${SITE_URL}/case-studies
- For apprentices: ${SITE_URL}/for-apprentices
- Gurgaon / NCR: ${SITE_URL}/locations/gurgaon-ncr
- Privacy: ${SITE_URL}/privacy
- Terms: ${SITE_URL}/terms
- Disclaimer: ${SITE_URL}/disclaimer

## Verified rate notes (re-check official portals)
- NAPS govt share max: ₹1500 / apprentice / month (NAPS 2.0)
- NATS govt share (current MoE guidance): ₹4500 graduate / ₹4000 diploma per month
- Official NAPS: https://www.apprenticeshipindia.gov.in/
- Official NATS: https://nats.education.gov.in/
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
