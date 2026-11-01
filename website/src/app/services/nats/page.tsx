import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { faqItems } from "@/lib/content/faq";
import { natsRates, OFFICIAL_PORTALS } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NATS Apprenticeship for Graduates & Diploma Holders",
  description:
    "Run NATS graduate and diploma apprenticeship programmes with Coriva One — BOAT/BOPT portal support, sourcing, stipend workflows, and reporting.",
  path: "/services/nats",
});

const natsFaqs = faqItems.filter((f) =>
  ["What is NATS?", "What government support applies under NATS?", "NAPS vs NATS — which should we use?", "How long does a typical programme run?"].includes(
    f.question,
  ),
);

export default function NatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "NATS", path: "/services/nats" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...natsFaqs])) }}
      />
      <PageHero
        eyebrow="Services · NATS"
        title="NATS programmes for graduate and diploma talent"
        description="National Apprenticeship Training Scheme programmes connect industry with engineering graduates and diploma (technician) apprentices — Coriva One handles portal, contracts, stipend support, and MIS."
        cta={{ href: "/contact", label: "Discuss a NATS intake" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why NATS"
            title="Industry–academia training for technical entry roles"
            description="NATS is implemented under the Ministry of Education through BOAT/BOPT. It suits organisations that need structured graduate and diploma apprenticeships rather than trade-focused NAPS roles."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Graduate apprentices",
                body: `Government stipend share under current MoE guidance: ₹${natsRates.graduateGovtSharePerMonthInr.toLocaleString("en-IN")} per month via DBT (pending further notification).`,
              },
              {
                title: "Diploma / technician",
                body: `Government stipend share under current MoE guidance: ₹${natsRates.diplomaGovtSharePerMonthInr.toLocaleString("en-IN")} per month via DBT for eligible technician apprentices.`,
              },
              {
                title: "Typical duration",
                body: `NATS graduate and diploma apprenticeships commonly run ${natsRates.typicalDuration}, subject to scheme rules and approved training plans.`,
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray">{natsRates.note}</p>
            <RatesNote />
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we deliver"
            title="NATS programme management without the portal drag"
            description="We map roles to NATS eligibility, set up establishment workflows, and keep monthly records ready for stipend and review."
          />
          <ul className="mt-8 grid gap-3 text-sm text-gray md:grid-cols-2">
            {[
              "Scheme fit vs NAPS for each role family",
              "BOAT/BOPT / NATS portal registration support",
              "Graduate and diploma candidate sourcing against your matrix",
              "Contract and joining coordination",
              "Stipend and DBT workflow support under current norms",
              "Training plan adherence and monthly MIS",
              "Assessment and conversion recommendations",
              "Dual-scheme design when 100+ employers need both NAPS and NATS",
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
              href={OFFICIAL_PORTALS.nats}
              target="_blank"
              rel="noreferrer"
            >
              nats.education.gov.in
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/resources/naps-vs-nats">Compare NAPS vs NATS</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request a quote
            </ButtonLink>
          </div>
        </Container>
      </section>
      <ProcessSteps limit={5} />
      <FaqAccordion items={natsFaqs} description="Graduate vs diploma support, duration, and scheme choice." />
      <CtaBand
        title="Build a NATS pipeline for graduate and diploma roles"
        description="Tell us your engineering, IT, and technician openings — we’ll recommend NATS, NAPS, or a mix."
      />
    </>
  );
}
