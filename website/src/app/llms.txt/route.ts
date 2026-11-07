const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corivaone.com";

const body = `# Coriva One
> People | Solutions | Growth
> A new-age startup providing businesses with end-to-end solutions.

## Services we cater
- Apprenticeship Programs: ${SITE_URL}/services/apprenticeship-management
- Staffing Solutions: ${SITE_URL}/services/staffing
- Recruitment Services: ${SITE_URL}/services/recruitment
- Payroll Management: ${SITE_URL}/services/payroll
- Labour Law Compliances: ${SITE_URL}/services/labour-compliances
- HRMS: ${SITE_URL}/services/hrms
- Hospitality Support Services (managed linen & textile care): ${SITE_URL}/services/hospitality-support

## Industries we cater to
- Manufacturing: ${SITE_URL}/industries/manufacturing
- Logistics: ${SITE_URL}/industries/logistics
- Hospitality: ${SITE_URL}/industries/hospitality
- IT & ITeS: ${SITE_URL}/industries/it-software
- Power: ${SITE_URL}/industries/power
- Retail & E-commerce: ${SITE_URL}/industries/retail-ecommerce
- All industries: ${SITE_URL}/industries

## Company
- About: ${SITE_URL}/about
- Contact: ${SITE_URL}/contact
- Logo: ${SITE_URL}/brand/corivaone-logo.png
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}