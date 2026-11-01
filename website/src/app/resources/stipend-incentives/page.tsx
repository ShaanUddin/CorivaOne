import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { napsRates, natsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS & NATS Stipend Incentives Explained",
  description:
    "How government stipend share works under NAPS 2.0 (max ₹1,500/mo) and NATS (₹4,500 graduate / ₹4,000 diploma) via DBT — with date-stamped verification.",
  path: "/resources/stipend-incentives",
});

export default function StipendIncentivesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Stipend Incentives", path: "/resources/stipend-incentives" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Resources"
        title="Stipend incentives under NAPS and NATS"
        description="Government share reduces the net cost of building an apprentice pipeline — but only when employer share, portal records, and DBT workflows stay on track."
        cta={{ href: "/tools/naps-stipend-calculator", label: "Estimate NAPS subsidy" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <p className="text-xs font-bold tracking-[0.16em] text-orange uppercase">NAPS 2.0</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">Government share</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray">
                The government bears {napsRates.govtSharePercent}% of the prescribed stipend, capped
                at ₹{napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")} per apprentice per
                month. Under NAPS 2.0, this share is paid to the apprentice via DBT after the employer
                pays their share.
              </p>
              <p className="mt-3 text-sm text-gray">{napsRates.note}</p>
            </article>
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <p className="text-xs font-bold tracking-[0.16em] text-orange uppercase">NATS</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">Graduate & diploma share</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray">
                Current MoE guidance continues DBT shares of ₹
                {natsRates.graduateGovtSharePerMonthInr.toLocaleString("en-IN")} (graduate) and ₹
                {natsRates.diplomaGovtSharePerMonthInr.toLocaleString("en-IN")} (technician/diploma)
                per month pending further notification.
              </p>
              <p className="mt-3 text-sm text-gray">{natsRates.note}</p>
            </article>
          </div>
          <div className="mt-6">
            <RatesNote />
          </div>
          <div className="mt-14">
            <SectionHeading
              eyebrow="Employer reality"
              title="What finance teams should budget for"
            />
          </div>
          <ul className="mt-8 space-y-3 text-sm text-gray">
            {[
              "Employer stipend share must be funded on time — DBT typically follows employer payment evidence.",
              "Government figures above are maximums / current guidance, not a guaranteed fixed invoice credit.",
              "Coriva One’s management fee is separate from stipend; see Pricing for how we quote.",
              "Re-verify rates on official portals before board or budget approvals.",
            ].map((item) => (
              <li key={item} className="rounded-md border border-[#e4ebf3] bg-surface px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/blog/how-naps-2-dbt-works">How NAPS 2.0 DBT works</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              Programme pricing approach
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Want a stipend model for your projected intake?"
        description="We build employer-share and government-share scenarios using verified caps — not outdated brochure numbers."
      />
    </>
  );
}
