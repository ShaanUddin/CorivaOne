import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS & NATS Employer Readiness Checklist",
  description:
    "Practical checklist for employers starting NAPS or NATS — documents, headcount inputs, role matrix, bank/KYC, and supervisor readiness.",
  path: "/resources/naps-nats-checklist",
});

const sections = [
  {
    title: "Workforce & obligation",
    items: [
      "Total headcount including contractual staff by location",
      "Current apprentice count (if any) and scheme mix",
      "Sites expected to host apprentices in the next 6–12 months",
    ],
  },
  {
    title: "Roles & training",
    items: [
      "Role / trade / course matrix with preferred education levels",
      "Named supervisors or mentors per site",
      "Shift patterns and joining windows",
    ],
  },
  {
    title: "Establishment & portal",
    items: [
      "Legal entity name, address, and authorised signatory details",
      "Existing apprenticeship / NATS portal credentials (if any)",
      "Trade or course mapping preferences",
    ],
  },
  {
    title: "Stipend & onboarding",
    items: [
      "Bank and KYC workflow owners for stipend administration",
      "Employer stipend-share funding calendar",
      "Onboarding checklist owner (HR / plant admin)",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "NAPS NATS Checklist", path: "/resources/naps-nats-checklist" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Resources · Checklist"
        title="Employer readiness checklist for NAPS & NATS"
        description="Use this list before kickoff. Coriva One provides a joining checklist tailored to your sites once the obligation audit is complete."
        cta={{ href: "/contact", label: "Request a kickoff pack" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Before you start"
            title="Gather these inputs to move faster"
            description="Most delays come from incomplete headcount, unclear roles, or missing authorised signatory details — not from the portal itself."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-[#e4ebf3] bg-white p-6">
                <h2 className="text-lg font-bold text-navy">{section.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-orange">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/how-it-works">See the full process</ButtonLink>
            <ButtonLink href="/tools/am-i-compliant" variant="secondary">
              Check obligation first
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Want Coriva One to run the checklist with your team?"
        description="Book a discovery call — we turn this list into a site-specific kickoff plan."
      />
    </>
  );
}
