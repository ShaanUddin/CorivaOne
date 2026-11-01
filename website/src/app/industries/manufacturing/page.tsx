import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { napsRates, natsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS & NATS for Manufacturing Employers",
  description:
    "Apprenticeship programmes for manufacturing plants — shop-floor NAPS trades, graduate/diploma NATS tracks, compliance, and stipend support.",
  path: "/industries/manufacturing",
});

export default function ManufacturingIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "Manufacturing", path: "/industries/manufacturing" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries · Manufacturing"
        title="Skilled apprentices for the shop floor — without compliance risk"
        description="Manufacturing establishments with 30+ workers often carry apprenticeship obligations while struggling to fill entry-level production, quality, and maintenance support roles. Coriva One runs NAPS-first programmes with NATS where graduate/diploma talent fits."
        cta={{ href: "/contact", label: "Plan a plant intake" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Typical roles"
            title="Trades and technical tracks we commonly structure"
          />
          <ul className="mt-8 grid gap-3 text-sm text-gray md:grid-cols-2">
            {[
              "Production / assembly apprentices (NAPS)",
              "Quality and inspection support",
              "Maintenance helper / technician pathways",
              "Stores, packing, and material handling",
              "Diploma technician apprentices (NATS)",
              "Graduate engineering apprentices for plant functions (NATS)",
            ].map((item) => (
              <li key={item} className="rounded-md border border-[#e4ebf3] bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-[#dce5f0] bg-surface p-5">
            <p className="text-sm text-gray">
              NAPS government share: up to ₹{napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")}{" "}
              / month / apprentice. NATS current guidance: ₹
              {natsRates.graduateGovtSharePerMonthInr.toLocaleString("en-IN")} graduate / ₹
              {natsRates.diplomaGovtSharePerMonthInr.toLocaleString("en-IN")} diploma per month.
            </p>
            <div className="mt-3">
              <RatesNote />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/naps">Explore NAPS</ButtonLink>
            <ButtonLink href="/blog/naps-vs-nats-manufacturing-vs-it" variant="secondary">
              NAPS vs NATS for manufacturing
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Running multi-shift plants with apprenticeship gaps?"
        description="Share headcount by location — we calculate obligation and propose a shop-floor intake plan."
      />
    </>
  );
}
