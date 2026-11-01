import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { napsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How NAPS 2.0 DBT Stipend Share Works",
  description:
    "Under NAPS 2.0, government share (25% of stipend, capped at ₹1,500/mo) is paid to apprentices via DBT after the employer pays their share. Here’s the operating sequence.",
  path: "/blog/how-naps-2-dbt-works",
});

export default function Naps2DbtBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: "NAPS 2.0 DBT", path: "/blog/how-naps-2-dbt-works" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="How NAPS 2.0 DBT works for employers"
        description={`${napsRates.note} Cap: ₹${napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")} per apprentice per month.`}
      />
      <article className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-gray">
          <h2 className="text-2xl font-bold text-navy">The sequence that matters</h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Engage apprentices under valid contracts and an approved training plan.</li>
            <li>
              Pay the employer stipend share on time and keep payment evidence aligned to portal
              requirements.
            </li>
            <li>
              Maintain attendance and programme records so government share eligibility is not
              blocked by incomplete data.
            </li>
            <li>
              Government share — {napsRates.govtSharePercent}% of prescribed stipend, capped at ₹
              {napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")} / month / apprentice — is
              paid to the apprentice via DBT when conditions are met.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-navy">What finance should not assume</h2>
          <p>
            The cap is a maximum, not an automatic fixed credit on your books. Actual amounts depend
            on prescribed stipend, eligibility, and timely employer-side actions. Outdated brochure
            figures should not drive board budgets.
          </p>
          <h2 className="text-2xl font-bold text-navy">Where Coriva One helps</h2>
          <p>
            We keep monthly stipend workflows and programme records moving so DBT readiness is part
            of operations — not a quarter-end scramble.
          </p>
          <RatesNote />
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/tools/naps-stipend-calculator">Stipend calculator</ButtonLink>
            <ButtonLink href="/resources/stipend-incentives" variant="secondary">
              Stipend incentives guide
            </ButtonLink>
          </div>
        </Container>
      </article>
      <CtaBand
        title="Need stipend workflows designed for your sites?"
        description="We’ll map employer-share calendars and programme MIS around your intake plan."
      />
    </>
  );
}
