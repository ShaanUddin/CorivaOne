import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corivaone.com";

const paths = [
  "/",
  "/about",
  "/contact",
  "/how-it-works",
  "/why-corivaone",
  "/pricing",
  "/case-studies",
  "/for-apprentices",
  "/careers",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/services/apprenticeship-management",
  "/services/naps",
  "/services/nats",
  "/services/programme-management",
  "/services/talent-sourcing",
  "/services/compliance-reporting",
  "/services/hospitality-support",
  "/services/staffing",
  "/services/recruitment",
  "/services/payroll",
  "/services/labour-compliances",
  "/services/hrms",
  "/industries",
  "/industries/manufacturing",
  "/industries/logistics",
  "/industries/hospitality",
  "/industries/it-software",
  "/industries/power",
  "/industries/retail-ecommerce",
  "/resources/naps-vs-nats",
  "/resources/faq",
  "/resources/apprenticeship-obligation-india",
  "/resources/stipend-incentives",
  "/resources/glossary",
  "/resources/naps-nats-checklist",
  "/tools/naps-stipend-calculator",
  "/tools/am-i-compliant",
  "/blog",
  "/blog/is-apprenticeship-mandatory-30-employees",
  "/blog/naps-vs-nats-manufacturing-vs-it",
  "/blog/how-naps-2-dbt-works",
  "/locations/gurgaon-ncr",
  "/llms.txt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-01T00:00:00.000Z");
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" || path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));
}
