import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { faqItems } from "@/lib/content/faq";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Apprenticeship Compliance & Reporting Support",
  description:
    "Stay audit-ready on NAPS and NATS — obligation tracking, contracts, stipend records, attendance logs, and leadership MIS from Coriva One.",
  path: "/services/compliance-reporting",
});

const complianceFaqs = faqItems.filter((f) =>
  [
    "Is engaging apprentices mandatory?",
    "Do we have to pay PF and ESI for apprentices?",
    "Can apprentices do regular production work?",
    "Who is the principal employer?",
  ].includes(f.question),
);

export default function ComplianceReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Compliance & Reporting", path: "/services/compliance-reporting" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...complianceFaqs])) }}
      />
      <PageHero
        eyebrow="Services · Compliance & reporting"
        title="Apprenticeship records that stand up to scrutiny"
        description="Obligation bands, portal contracts, stipend evidence, and training logs are where programmes quietly fail. Coriva One keeps the compliance and reporting layer current."
        cta={{ href: "/tools/am-i-compliant", label: "Check your obligation band" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we monitor"
            title="Compliance is a monthly operating discipline"
            description="We do not treat registration as a one-time event. Programme health depends on continuous records."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Obligation & engagement band",
                body: "Track whether your apprentice count stays inside the 2.5%–15% band relative to total workforce including contract staff.",
              },
              {
                title: "Contracts & establishment records",
                body: "Keep portal contracts, establishment details, and authorised signatory documentation aligned to live batches.",
              },
              {
                title: "Stipend & DBT readiness",
                body: "Support employer-share payment evidence and workflows that unlock government DBT for eligible apprentices.",
              },
              {
                title: "Attendance, training & MIS",
                body: "Maintain attendance and training logs with leadership-ready monthly visibility — not last-minute scramble files.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/resources/apprenticeship-obligation-india">
              Read obligation guide
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request compliance review
            </ButtonLink>
          </div>
        </Container>
      </section>
      <FaqAccordion
        items={complianceFaqs}
        description="PF/ESI, production work, principal employer, and mandatory engagement."
      />
      <CtaBand
        title="Need an audit-ready apprenticeship MIS?"
        description="We will review your current engagement position and show what records leadership should see every month."
      />
    </>
  );
}
