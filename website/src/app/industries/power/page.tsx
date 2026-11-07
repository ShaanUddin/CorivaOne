import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Power Industry Solutions",
  description:
    "Coriva One supports power and energy organisations with apprenticeship, staffing, recruitment, payroll, and compliance solutions.",
  path: "/industries/power",
});

export default function PowerIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Power", path: "/industries/power" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries"
        title="Power"
        description="Workforce and compliance solutions for energy and utilities environments — apprenticeship pipelines, staffing, recruitment, and payroll discipline."
        cta={{ href: "/contact", label: "Enquire Now" }}
      />
      <section className="py-12">
        <Container className="flex flex-wrap gap-3">
          <ButtonLink href="/services/apprenticeship-management">Apprenticeship Programs</ButtonLink>
          <ButtonLink href="/services/staffing" variant="secondary">
            Staffing
          </ButtonLink>
          <ButtonLink href="/services/labour-compliances" variant="secondary">
            Labour Compliances
          </ButtonLink>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}