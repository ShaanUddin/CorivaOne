import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqItems } from "@/lib/content/faq";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Apprenticeship FAQ — NAPS, NATS & Compliance",
  description:
    "Frequently asked questions on NAPS, NATS, mandatory apprenticeship obligations, stipend support, PF/ESI, and Coriva One programme management.",
  path: "/resources/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/resources/faq" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...faqItems])) }}
      />
      <PageHero
        eyebrow="Resources · FAQ"
        title="Straight answers for HR, founders, and finance"
        description="Practical questions on NAPS, NATS, obligation bands, stipend support, and how Coriva One operates programmes for SMEs."
        cta={{ href: "/contact", label: "Ask about your case" }}
      />
      <FaqAccordion
        items={faqItems}
        title="All frequently asked questions"
        description="Figures are date-stamped elsewhere on this site — always re-verify on official portals before budgeting."
      />
      <CtaBand
        title="Still have a specific obligation question?"
        description="Share headcount and locations — we’ll respond within one business day."
      />
    </>
  );
}
