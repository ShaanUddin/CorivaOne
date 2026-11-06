import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { faqItems } from "@/lib/content/faq";
import { napsRates, OFFICIAL_PORTALS } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS Apprenticeship Programme Management",
  description:
    "End-to-end NAPS apprenticeship support for employers — obligation audit, portal setup, sourcing, stipend DBT workflows, and MIS under NAPS 2.0.",
  path: "/services/naps",
});

const napsFaqs = faqItems.filter((f) =>
  ["What is NAPS?", "How much subsidy does the government pay under NAPS?", "Is engaging apprentices mandatory?", "NAPS vs NATS — which should we use?"].includes(
    f.question,
  ),
);

export default function NapsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Apprenticeship Management Services", path: "/services/apprenticeship-management" },
              { name: "NAPS", path: "/services/naps" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...napsFaqs])) }}
      />
      <PageHero
        eyebrow="Services · NAPS"
        title="NAPS apprenticeship programmes that stay compliant and operational"
        description="Coriva One designs and runs National Apprenticeship Promotion Scheme programmes for SMEs and mid-sized enterprises — from obligation math to portal contracts, stipend runs, and monthly MIS."
        cta={{ href: "/contact", label: "Request a NAPS programme design" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why NAPS"
            title="A structured path to skilled entry-level capacity"
            description="NAPS lets establishments engage apprentices under the Apprentices Act with partial government stipend support — when registration, contracts, and monthly records are done correctly."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Obligation clarity",
                body: `Know whether you sit in the mandatory band (${napsRates.minEmployeesMandatory}+ employees) and what ${napsRates.obligationBand} of headcount means for your sites.`,
              },
              {
                title: "Government share via DBT",
                body: `Under NAPS 2.0, government share is ${napsRates.govtSharePercent}% of prescribed stipend, capped at ₹${napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")} per apprentice per month, paid to the apprentice via DBT after you pay your share.`,
              },
              {
                title: "Programme duration",
                body: `Typical Coriva One NAPS programmes run ${napsRates.typicalProgrammeMonths} months, aligned to trade, role, and approved training plans.`,
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <RatesNote />
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we deliver"
            title="NAPS end to end — under your establishment"
            description="You remain the principal employer. We operate the programme layer so HR and operations stay focused on the floor."
          />
          <ul className="mt-8 grid gap-3 text-sm text-gray md:grid-cols-2">
            {[
              "Eligibility & obligation audit with scheme fit",
              "Establishment registration and trade mapping on the apprenticeship portal",
              "Role / location intake plan and candidate sourcing support",
              "Contract registration and onboarding coordination",
              "Monthly stipend administration support and DBT readiness",
              "Attendance, training logs, and leadership-ready MIS",
              "Assessment support and absorption recommendations",
              "Re-verification against official portal norms before go-live",
            ].map((item) => (
              <li key={item} className="rounded-md border border-[#dce5f0] bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray">
            Official portal:{" "}
            <a
              className="font-semibold text-orange hover:underline"
              href={OFFICIAL_PORTALS.naps}
              target="_blank"
              rel="noreferrer"
            >
              apprenticeshipindia.gov.in
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/tools/naps-stipend-calculator">Estimate NAPS subsidy</ButtonLink>
            <ButtonLink href="/tools/am-i-compliant" variant="secondary">
              Check compliance band
            </ButtonLink>
          </div>
        </Container>
      </section>
      <ProcessSteps limit={5} />
      <FaqAccordion items={napsFaqs} description="Straight answers on NAPS obligation, subsidy, and fit." />
      <CtaBand
        title="Ready to structure a NAPS programme that holds up to inspection?"
        description="Share headcount, sites, and role needs — we’ll map obligation and intake within one business day."
      />
    </>
  );
}
