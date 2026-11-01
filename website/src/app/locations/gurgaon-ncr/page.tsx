import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS & NATS Apprenticeship Partner in Gurgaon / NCR",
  description:
    "Coriva One supports employers in Gurgaon and the NCR with NAPS and NATS apprenticeship programme management, sourcing, and compliance.",
  path: "/locations/gurgaon-ncr",
});

export default function GurgaonNcrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Gurgaon / NCR", path: "/locations/gurgaon-ncr" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Locations · Gurgaon / NCR"
        title="Apprenticeship programmes for NCR employers"
        description="From manufacturing belts to logistics hubs and IT campuses across Gurgaon and the wider NCR, Coriva One helps establishments structure compliant NAPS and NATS programmes with local sourcing support."
        cta={{ href: "/contact", label: "Discuss NCR intake" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Regional focus"
            title="Multi-site NCR programmes without fragmented admin"
            description="Obligation math, portal setup, and monthly MIS should not restart from scratch at every warehouse or plant."
          />
          <ul className="mt-8 grid gap-3 text-sm text-gray md:grid-cols-2">
            {[
              "Headcount and obligation audits for NCR establishments",
              "NAPS trade intakes for manufacturing and logistics sites",
              "NATS graduate/diploma pipelines for IT and engineering teams",
              "Location-matrix sourcing across Gurgaon and adjoining NCR cities",
            ].map((item) => (
              <li key={item} className="rounded-md border border-[#e4ebf3] bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/industries">Browse industries</ButtonLink>
            <ButtonLink href="/services/programme-management" variant="secondary">
              Programme management
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Running sites across Gurgaon / NCR?"
        description="Share locations and headcount — we’ll propose a scheme mix and intake sequence."
      />
    </>
  );
}
