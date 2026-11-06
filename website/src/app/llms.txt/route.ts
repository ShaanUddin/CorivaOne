const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corivaone.com";

const body = `# Coriva One
> People | Solutions | Growth
> Apprenticeship Management Services (NAPS & NATS), Hospitality Support Services (linen & hospital laundry), staffing, recruitment, labour compliances, licensing, and HRMS.

## Primary
- Home: ${SITE_URL}/
- About: ${SITE_URL}/about
- Contact: ${SITE_URL}/contact
- How it works: ${SITE_URL}/how-it-works
- Why Coriva One: ${SITE_URL}/why-corivaone

## Services
- Apprenticeship Management Services: ${SITE_URL}/services/apprenticeship-management
- NAPS: ${SITE_URL}/services/naps
- NATS: ${SITE_URL}/services/nats
- Programme management: ${SITE_URL}/services/programme-management
- Talent sourcing: ${SITE_URL}/services/talent-sourcing
- Compliance & reporting: ${SITE_URL}/services/compliance-reporting
- Hospitality Support Services: ${SITE_URL}/services/hospitality-support
- Staffing: ${SITE_URL}/services/staffing
- Recruitment: ${SITE_URL}/services/recruitment
- Labour Compliances: ${SITE_URL}/services/labour-compliances
- Licensing: ${SITE_URL}/services/licensing
- HRMS: ${SITE_URL}/services/hrms

## Industries
- All industries: ${SITE_URL}/industries
- Manufacturing: ${SITE_URL}/industries/manufacturing
- Logistics: ${SITE_URL}/industries/logistics
- IT & Software: ${SITE_URL}/industries/it-software
- Hospitality & Healthcare: ${SITE_URL}/industries/hospitality

## Resources & tools
- NAPS vs NATS: ${SITE_URL}/resources/naps-vs-nats
- FAQ: ${SITE_URL}/resources/faq
- Stipend calculator: ${SITE_URL}/tools/naps-stipend-calculator
- Compliance checker: ${SITE_URL}/tools/am-i-compliant

## Brand
- Logo: ${SITE_URL}/brand/corivaone-logo.png
- Contact: sahil.mahotra@corivaone.com | Gurugram, Haryana, India
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
