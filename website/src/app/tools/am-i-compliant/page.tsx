import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ComplianceChecker } from "@/components/tools/ComplianceChecker";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { napsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Am I Compliant? Apprenticeship Obligation Checker",
  description:
    "Check if your establishment likely falls under India’s apprenticeship mandate (30+ employees) and see the 2.5%–15% apprentice band.",
  path: "/tools/am-i-compliant",
});

export default function AmICompliantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Am I Compliant?", path: "/tools/am-i-compliant" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Tools"
        title="Am I under the apprenticeship obligation?"
        description={`Enter approximate workforce headcount (including contract staff). Establishments with ${napsRates.minEmployeesMandatory}+ workers typically must engage apprentices within the ${napsRates.obligationBand} band.`}
      />
      <section className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Indicative checker"
              title="Know your likely min and max apprentice count"
              description="This tool is a starting point — not a legal opinion. Coriva One runs a formal obligation audit before programme design."
            />
          </div>
          <ComplianceChecker />
        </Container>
      </section>
      <CtaBand
        title="Want a formal obligation audit?"
        description="Share site-wise headcount — we’ll calculate the band and recommend NAPS / NATS fit."
      />
    </>
  );
}
