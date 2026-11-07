import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Retail & E-commerce Industry Solutions",
  description:
    "Coriva One supports retail and e-commerce businesses with staffing, recruitment, apprenticeship, payroll, and compliance solutions.",
  path: "/industries/retail-ecommerce",
});

export default function RetailEcommerceIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Retail & E-commerce", path: "/industries/retail-ecommerce" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries"
        title="Retail & E-commerce"
        description="Scale store, fulfilment, and customer-ops capacity with staffing, recruitment, apprenticeship programmes, and payroll support."
        cta={{ href: "/contact", label: "Enquire Now" }}
      />
      <section className="py-12">
        <Container className="flex flex-wrap gap-3">
          <ButtonLink href="/services/staffing">Staffing Solutions</ButtonLink>
          <ButtonLink href="/services/recruitment" variant="secondary">
            Recruitment
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