import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hospitality Industry Solutions",
  description:
    "Coriva One supports hospitality businesses with Hospitality Support Services (managed linen and textile care), staffing, recruitment, and apprenticeship programmes.",
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
              { name: "Hospitality", path: "/industries/hospitality" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries"
        title="Hospitality"
        description="Hospitality Support Services for managed linen and textile care, plus staffing, recruitment, and apprenticeship options for hospitality operations."
        cta={{ href: "/services/hospitality-support", label: "Hospitality Support Services" }}
      />
      <section className="py-12">
        <Container className="flex flex-wrap gap-3">
          <ButtonLink href="/services/hospitality-support">Hospitality Support Services</ButtonLink>
          <ButtonLink href="/services/staffing" variant="secondary">
            Staffing
          </ButtonLink>
          <ButtonLink href="/services/apprenticeship-management" variant="secondary">
            Apprenticeship Programs
          </ButtonLink>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}