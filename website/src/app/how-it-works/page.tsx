import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How Coriva One Apprenticeship Programmes Work",
  description:
    "See the Coriva One process: eligibility audit, portal setup, sourcing, contracts, stipend support, MIS, and conversion — with a clear you-vs-we matrix.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "How it works", path: "/how-it-works" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="How it works"
        title="From registration to reporting — without the chaos"
        description="Coriva One runs a seven-step apprenticeship operating model. You remain the principal employer; we execute portal work, sourcing support, documentation, stipend workflows, and MIS."
        cta={{ href: "/contact", label: "Start with an obligation audit" }}
      />
      <ProcessSteps showMatrix />
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="Most employers can move to first-batch sourcing within weeks"
            description="Exact speed depends on documentation readiness, role clarity, and how quickly authorised signatories approve portal setup."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Week 0–1",
                body: "Discovery call, headcount inputs, obligation & scheme-fit audit, commercial proposal.",
              },
              {
                title: "Setup",
                body: "Establishment registration, trade/course mapping, and joining checklist for your sites.",
              },
              {
                title: "First batch",
                body: "Sourcing against your matrix, interviews, contracts, and stipend workflow kickoff.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#dce5f0] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/resources/naps-nats-checklist">Download readiness checklist</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              How pricing works
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Want a programme design within one business day?"
        description="Share workforce numbers and role needs — we map NAPS / NATS fit and next steps."
      />
    </>
  );
}
