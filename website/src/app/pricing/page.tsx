import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing | Apprenticeship Programme Management",
  description:
    "Coriva One prices NAPS and NATS programme management around apprentice volume, locations, and scheme mix. Request a quote — no fake sticker prices.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Pricing", path: "/pricing" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Pricing"
        title="Programme management priced around your intake"
        description="We charge for operating the apprenticeship programme — not for the stipend itself. Stipend is funded by the employer (less government share paid to apprentices where eligible). Share your volume for a clear commercial proposal."
        cta={{ href: "/contact", label: "Request a quote" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="How we quote"
            title="Per-apprentice management fee, shaped by complexity"
            description="Commercials typically reflect apprentice volume, number of locations, NAPS/NATS mix, and the depth of sourcing plus MIS you need."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "What you pay Coriva One",
                body: "A programme management fee — commonly structured per apprentice / per batch — covering portal work, documentation, sourcing support as scoped, stipend workflow support, and reporting.",
              },
              {
                title: "What you fund separately",
                body: "Employer stipend share to apprentices. Government DBT share (where eligible) goes to apprentices and is not Coriva One revenue.",
              },
              {
                title: "What changes the quote",
                body: "Multi-site coordination, dual-scheme programmes, faster sourcing SLAs, and custom MIS for leadership or audit packs.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted">
            We do not publish fixed public rates here because programme scope varies widely. Any
            illustrative figures shared in proposals will be labelled clearly and are not universal
            list prices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Ask for a quote</ButtonLink>
            <ButtonLink href="/how-it-works" variant="secondary">
              See what’s included
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Ready for a commercial proposal?"
        description="Tell us projected apprentice count, sites, and scheme interest — we’ll respond within one business day."
      />
    </>
  );
}
