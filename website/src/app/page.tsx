import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BusinessVerticals } from "@/components/sections/BusinessVerticals";
import { SchemeCards } from "@/components/sections/SchemeCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WhyCoriva } from "@/components/sections/WhyCoriva";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
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
    "Coriva One delivers Apprenticeship Management Services (NAPS & NATS), Hospitality Support Services including hospital laundry, staffing, recruitment, compliance, licensing, and HRMS solutions.",
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
        subtitle="Apprenticeship management, hospitality linen care, staffing, recruitment, and compliance solutions for growing organisations."
        primaryCta={{ href: "/contact", label: "Enquire Now" }}
        secondaryCta={{ href: "/services/apprenticeship-management", label: "Apprenticeship Services" }}
      />
      <TrustStrip
        items={[
          "Apprenticeship Management — NAPS & NATS",
          "Hospitality Support — Linen & Hospital Laundry",
          "Staffing · Recruitment · Compliance · HRMS",
        ]}
      />

      <BusinessVerticals />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Apprenticeship Management Services"
              title="NAPS & NATS under one managed service line"
              description="Government-backed apprenticeship programmes for employers with 30+ staff — registration to reporting, without the portal chaos."
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
              title="Linen management, care & hospital laundry"
              description="Corporate managed textile and linen services — with dedicated hospital laundry support — then enquire with our team."
            />
            <div className="mt-6">
              <ButtonLink href="/services/hospitality-support">Hospitality & laundry</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <SchemeCards />
      <ProcessSteps limit={5} />
      <WhyCoriva />
      <IndustriesStrip />
      <FaqAccordion items={homeFaqTeaser} showAllLink description="Straight answers for HR, founders, and finance." />
      <CtaBand />
    </>
  );
}