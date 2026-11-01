import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { napsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Apprenticeship Obligation in India — 30+ Employees",
  description:
    "Understand India’s apprenticeship engagement obligation for establishments with 30+ workers, the 2.5%–15% band, and how Coriva One audits compliance.",
  path: "/resources/apprenticeship-obligation-india",
});

export default function ObligationGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              {
                name: "Apprenticeship Obligation",
                path: "/resources/apprenticeship-obligation-india",
              },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Resources"
        title="Is apprenticeship mandatory for your establishment?"
        description={`Establishments with ${napsRates.minEmployeesMandatory} or more workers (including contractual staff) are generally required to engage apprentices within a ${napsRates.obligationBand} band of total strength. This guide explains what that means in practice.`}
        cta={{ href: "/tools/am-i-compliant", label: "Run the compliance checker" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="The rule of thumb"
            title="Headcount triggers the obligation; band sets the range"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: `${napsRates.minEmployeesMandatory}+ workers`,
                body: "Mandatory engagement typically applies. Count includes contractual staff for establishment strength calculations.",
              },
              {
                title: napsRates.obligationBand,
                body: "Engage apprentices within this percentage band of total workforce — neither under-engaging nor over-engaging casually.",
              },
              {
                title: "4–29 workers",
                body: "Engagement is generally optional. Many growing SMEs start early to build a pipeline before the mandatory threshold.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray">
            <p>
              Obligation is only half the story. Apprentices must be engaged under proper contracts
              and training plans — not as a cheaper substitute for regular employment. Disguised
              employment creates compliance and labour-law risk.
            </p>
            <p>
              Coriva One’s eligibility & obligation audit calculates your band, maps roles to NAPS
              and/or NATS, and shows what records leadership should monitor monthly.
            </p>
          </div>
          <div className="mt-6">
            <RatesNote />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/blog/is-apprenticeship-mandatory-30-employees">
              Read the 30-employee deep dive
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request an obligation audit
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Need your exact min/max apprentice numbers?"
        description="Share approximate headcount by site — we calculate the band and recommend scheme mix."
      />
    </>
  );
}
