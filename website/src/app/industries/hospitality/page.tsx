import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hospitality & Healthcare Industry Solutions",
  description:
    "Coriva One supports hospitality and healthcare with linen management, hospital laundry, staffing, and apprenticeship programmes.",
  path: "/industries/hospitality",
});

export default function HospitalityIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Hospitality & Healthcare", path: "/industries/hospitality" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries"
        title="Hospitality & Healthcare"
        description="Linen care and hospital laundry for facilities teams, plus workforce and apprenticeship support where needed."
        cta={{ href: "/services/hospitality-support", label: "Hospitality Support Services" }}
      />
      <section className="py-12">
        <Container className="flex flex-wrap gap-3">
          <ButtonLink href="/services/hospitality-support">Linen & hospital laundry</ButtonLink>
          <ButtonLink href="/services/apprenticeship-management" variant="secondary">
            Apprenticeship programmes
          </ButtonLink>
          <ButtonLink href="/services/staffing" variant="secondary">
            Staffing
          </ButtonLink>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}