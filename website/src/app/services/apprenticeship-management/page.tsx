import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { nav } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Apprenticeship Management Services | NAPS & NATS",
  description:
    "Coriva One Apprenticeship Management Services cover end-to-end NAPS and NATS implementation — registration, sourcing, stipend support, compliance, and reporting.",
  path: "/services/apprenticeship-management",
});

const offerings = [
  {
    href: "/services/naps",
    title: "NAPS",
    body: "National Apprenticeship Promotion Scheme for trade, fresher, and operations talent with government stipend support via DBT.",
  },
  {
    href: "/services/nats",
    title: "NATS",
    body: "National Apprenticeship Training Scheme for graduate and diploma apprentices with structured industry training.",
  },
  {
    href: "/services/programme-management",
    title: "Programme Management",
    body: "Lifecycle ownership from obligation audit and portal setup through MIS and conversion support.",
  },
  {
    href: "/services/talent-sourcing",
    title: "Talent Sourcing",
    body: "Apprentice pipelines matched to your roles, locations, and scheme eligibility.",
  },
  {
    href: "/services/compliance-reporting",
    title: "Compliance & Reporting",
    body: "Contracts, stipend proofs, portal workflows, and leadership-ready programme reporting.",
  },
];

export default function ApprenticeshipManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Apprenticeship Management Services", path: "/services/apprenticeship-management" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Apprenticeship Management Services"
        title="NAPS & NATS under one managed programme"
        description="Coriva One runs apprenticeship as a complete service line — scheme selection, portal work, talent, stipend support, and compliance reporting — so HR and operations stay focused on the floor."
        cta={{ href: "/contact", label: "Enquire Now" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What’s included"
            title="Everything under Apprenticeship Management Services"
            description="NAPS and NATS are schemes inside this vertical — not standalone one-off pages without context."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#e4ebf3] bg-white p-5 transition hover:border-orange"
              >
                <h2 className="text-xl font-bold text-navy">{item.title}</h2>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-orange">View details →</span>
              </Link>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm">
            {nav.apprenticeship.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-md bg-surface px-3 py-1.5 font-semibold text-navy hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ProcessSteps limit={5} />
      <CtaBand
        title="Start an apprenticeship programme with Coriva One"
        description="Tell us your headcount and roles — we’ll map NAPS, NATS, or both."
      />
    </>
  );
}