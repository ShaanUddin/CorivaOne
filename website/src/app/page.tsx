import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesWeCater } from "@/components/sections/ServicesWeCater";
import { IndustriesWeCater } from "@/components/sections/IndustriesWeCater";
import { SchemeCards } from "@/components/sections/SchemeCards";
import { WhyCoriva } from "@/components/sections/WhyCoriva";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { homeFaqTeaser } from "@/lib/content/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Coriva One | People | Solutions | Growth",
  description:
    "Coriva One is a new-age startup providing end-to-end business solutions — apprenticeship programs, staffing, recruitment, payroll, labour compliances, HRMS, and hospitality support services.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...homeFaqTeaser])) }}
      />
      <Hero
        title="People. Solutions. Growth."
        subtitle="A new-age startup providing businesses with end-to-end solutions across workforce, compliance, and hospitality support."
        primaryCta={{ href: "/contact", label: "Enquire Now" }}
        secondaryCta={{ href: "/services/apprenticeship-management", label: "Apprenticeship Programs" }}
      />
      <TrustStrip
        items={[
          "Apprenticeship · Staffing · Recruitment",
          "Payroll · Labour Compliances · HRMS",
          "Hospitality Support Services",
        ]}
      />

      <ServicesWeCater />
      <IndustriesWeCater />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Apprenticeship Programs"
              title="NAPS & NATS under Apprenticeship Management Services"
              description="Government-backed apprenticeship programmes for employers — registration to reporting, without the portal chaos."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/services/apprenticeship-management">Explore apprenticeship</ButtonLink>
              <ButtonLink href="/services/naps" variant="secondary">
                NAPS
              </ButtonLink>
              <ButtonLink href="/services/nats" variant="secondary">
                NATS
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-[#e4ebf3] bg-surface p-6">
            <SectionHeading
              eyebrow="Hospitality Support Services"
              title="Managed linen and textile care services"
              description="Under Hospitality Support Services, Coriva One delivers corporate managed linen and textile care — including hospital laundry support."
            />
            <div className="mt-6">
              <ButtonLink href="/services/hospitality-support">Explore hospitality support</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <SchemeCards />
      <WhyCoriva />
      <FaqAccordion items={homeFaqTeaser} showAllLink description="Straight answers for founders, HR, and operations." />
      <CtaBand />
    </>
  );
}