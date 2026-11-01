import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { StipendCalculator } from "@/components/tools/StipendCalculator";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { napsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS Stipend Calculator — Estimate Government Share",
  description:
    "Estimate maximum NAPS government stipend share: apprentices × ₹1,500 × months. Illustrative tool with date-stamped rates from Coriva One.",
  path: "/tools/naps-stipend-calculator",
});

export default function NapsStipendCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "NAPS Stipend Calculator", path: "/tools/naps-stipend-calculator" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Tools"
        title="NAPS stipend calculator"
        description={`Estimate the maximum government share under NAPS 2.0 using the ₹${napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")} per apprentice per month cap. Actual DBT depends on prescribed stipend and eligibility.`}
      />
      <section className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Illustrative estimate"
              title="Apprentices × monthly cap × months"
              description="This tool multiplies apprentice count by the NAPS government-share maximum and programme months. It is not a grant guarantee."
            />
            <div className="mt-6">
              <RatesNote />
            </div>
          </div>
          <StipendCalculator />
        </Container>
      </section>
      <CtaBand
        title="Need a finance-ready stipend model?"
        description="We build employer-share and government-share scenarios for your projected intake and sites."
      />
    </>
  );
}
