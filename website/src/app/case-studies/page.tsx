import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies | Coriva One",
  description:
    "Employer outcome stories from Coriva One apprenticeship programmes — detailed case studies coming soon. Enquire to discuss relevant references.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/case-studies" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Case studies"
        title="Employer outcomes — coming soon"
        description="We are preparing published case studies with verifiable programme context. We will not publish fabricated metrics. If you need sector-relevant references while we finalise write-ups, ask us directly."
        cta={{ href: "/contact", label: "Request a reference conversation" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="In progress"
            title="What published stories will cover"
            description="Each case study will describe sector, scheme mix, programme scope, and qualitative outcomes — only when clients approve disclosure."
          />
          <ul className="mt-8 grid gap-3 text-sm text-gray md:grid-cols-3">
            {[
              "Manufacturing plant NAPS intakes",
              "Multi-site logistics engagement models",
              "IT / engineering NATS graduate pipelines",
            ].map((item) => (
              <li key={item} className="rounded-md border border-[#e4ebf3] bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/contact">Talk to Coriva One</ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Looking for proof points for an internal proposal?"
        description="Share your industry and headcount — we’ll discuss relevant programme experience honestly."
        showForm
      />
    </>
  );
}
