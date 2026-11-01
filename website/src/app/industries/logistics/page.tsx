import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Apprenticeship Programmes for Logistics Companies",
  description:
    "NAPS and NATS apprenticeship support for logistics and warehouse operations — multi-location sourcing, compliance, and programme MIS.",
  path: "/industries/logistics",
});

export default function LogisticsIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Logistics", path: "/industries/logistics" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries · Logistics"
        title="Apprentice capacity for warehouses and distribution networks"
        description="Logistics employers need reliable entry-level capacity across sites — without turning apprenticeships into informal labour. Coriva One structures compliant NAPS programmes for warehouse and operations roles, with NATS where graduate/diploma tracks fit."
        cta={{ href: "/contact", label: "Map multi-site intake" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where apprenticeships help"
            title="Operations roles that benefit from structured training"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Warehouse operations",
                body: "Inbound, put-away, picking, packing, and inventory accuracy under supervised training plans.",
              },
              {
                title: "Dispatch & coordination",
                body: "Documentation, gate processes, and coordination roles that need consistency more than tenure.",
              },
              {
                title: "Multi-location hiring",
                body: "Sourcing and onboarding against a location matrix so each site gets a manageable batch size.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/talent-sourcing">Talent sourcing</ButtonLink>
            <ButtonLink href="/services/programme-management" variant="secondary">
              Programme management
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Need apprentices across hubs without portal chaos?"
        description="We design site-wise intake, contracts, and monthly MIS for logistics networks."
      />
    </>
  );
}
