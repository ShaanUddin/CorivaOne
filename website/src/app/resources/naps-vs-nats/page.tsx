import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { napsRates, natsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS vs NATS: Which Apprenticeship Scheme Fits?",
  description:
    "Compare NAPS and NATS for employers — talent pool, stipend support, duration, and when to run both. Verified rate caps with date stamp.",
  path: "/resources/naps-vs-nats",
});

export default function NapsVsNatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "NAPS vs NATS", path: "/resources/naps-vs-nats" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Resources"
        title="NAPS vs NATS — choose by role, not by brochure"
        description="Both schemes help employers build entry-level talent under the apprenticeship framework. The right choice depends on education level, role family, and how your workforce is structured."
        cta={{ href: "/contact", label: "Get a scheme-fit recommendation" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="At a glance" title="Side-by-side comparison for employers" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#e4ebf3]">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">NAPS</th>
                  <th className="px-4 py-3 font-semibold">NATS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Primary focus", "Trade / designated apprenticeship roles", "Graduate & diploma (technician) apprentices"],
                  ["Typical talent", "ITI, school leavers, vocational tracks", "Engineering graduates & diploma holders"],
                  [
                    "Govt stipend share",
                    `Up to ₹${napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")}/mo (${napsRates.govtSharePercent}% capped)`,
                    `₹${natsRates.graduateGovtSharePerMonthInr.toLocaleString("en-IN")} graduate / ₹${natsRates.diplomaGovtSharePerMonthInr.toLocaleString("en-IN")} diploma (current MoE guidance)`,
                  ],
                  ["Typical duration", napsRates.typicalProgrammeMonths + " months (our programmes)", natsRates.typicalDuration],
                  ["Best when", "Shop-floor, services, operations roles dominate", "Technical graduate/diploma pipelines matter"],
                ].map(([factor, naps, nats]) => (
                  <tr key={factor} className="border-t border-[#e4ebf3] odd:bg-surface">
                    <td className="px-4 py-3 font-semibold text-navy">{factor}</td>
                    <td className="px-4 py-3 text-gray">{naps}</td>
                    <td className="px-4 py-3 text-gray">{nats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <RatesNote />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <h3 className="text-lg font-bold text-navy">Choose NAPS when…</h3>
              <p className="mt-2 text-sm text-gray">
                You need production, warehouse, maintenance support, or other designated trade
                apprenticeships — especially if obligation under the {napsRates.minEmployeesMandatory}
                + employee rule is in play.
              </p>
            </article>
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <h3 className="text-lg font-bold text-navy">Choose NATS when…</h3>
              <p className="mt-2 text-sm text-gray">
                You need graduate or diploma technician apprentices for engineering, IT, or other
                technical functions with structured industry training.
              </p>
            </article>
          </div>
          <p className="mt-6 text-sm text-gray">
            Many organisations with 100+ employees run both. Coriva One maps each role family during
            the eligibility audit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/naps">NAPS service</ButtonLink>
            <ButtonLink href="/services/nats" variant="secondary">
              NATS service
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Unsure which scheme fits your openings?"
        description="Send your role matrix — we recommend NAPS, NATS, or a dual programme."
      />
    </>
  );
}
