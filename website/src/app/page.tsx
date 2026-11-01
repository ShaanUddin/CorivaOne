import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { SchemeCards } from "@/components/sections/SchemeCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WhyCoriva } from "@/components/sections/WhyCoriva";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqTeaser } from "@/lib/content/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS & NATS Apprenticeship Partner for Employers | Coriva One",
  description:
    "Build a skilled workforce, ensure compliance, and drive growth with end-to-end NAPS and NATS apprenticeship programmes from Coriva One.",
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
        title="NAPS & NATS Apprenticeship Programs"
        subtitle="Build a Skilled Workforce. Ensure Compliance. Drive Growth."
      />
      <TrustStrip />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="The hidden gap"
            title="Most 30+ employee organisations carry an unnoticed apprenticeship obligation"
            description="At the same time, entry-level hiring stays expensive. NAPS and NATS let you build a compliant, lower-cost talent pipeline — if the portal, contracts, stipend, and reporting layer is run correctly."
          />
        </Container>
      </section>
      <PillarsGrid />
      <SchemeCards />
      <ProcessSteps limit={5} />
      <WhyCoriva />
      <IndustriesStrip />
      <FaqAccordion items={homeFaqTeaser} showAllLink description="Straight answers for HR, founders, and finance." />
      <CtaBand />
    </>
  );
}