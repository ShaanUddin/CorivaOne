import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { napsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Is Apprenticeship Mandatory for 30+ Employees?",
  description:
    "Yes — establishments with 30 or more workers generally must engage apprentices within 2.5%–15% of total strength. Here’s how employers should respond.",
  path: "/blog/is-apprenticeship-mandatory-30-employees",
});

export default function Mandatory30BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              {
                name: "Mandatory at 30 employees",
                path: "/blog/is-apprenticeship-mandatory-30-employees",
              },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="Is apprenticeship mandatory if you have 30+ employees?"
        description="For most establishments that cross the headcount threshold, yes — engagement within a defined band is required. The practical question is how to do it without creating operational or compliance risk."
      />
      <article className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-gray">
          <p>
            Under India’s apprenticeship framework, establishments with{" "}
            {napsRates.minEmployeesMandatory} or more workers — including contractual staff — are
            generally required to engage apprentices within a {napsRates.obligationBand} band of
            total strength. Establishments with 4–29 workers may engage apprentices optionally.
          </p>
          <h2 className="text-2xl font-bold text-navy">What “mandatory” actually means</h2>
          <p>
            It means you should plan apprentice engagement as an operating requirement, not a CSR
            experiment. Calculate your minimum and maximum numbers from current headcount, then map
            roles to NAPS (and NATS where graduate/diploma tracks fit).
          </p>
          <h2 className="text-2xl font-bold text-navy">Where companies get stuck</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Under-counting contract staff when estimating obligation</li>
            <li>Registering on a portal without a sustainable monthly MIS</li>
            <li>Using “apprentices” as informal labour without training plans</li>
            <li>Missing stipend evidence that unlocks government DBT share</li>
          </ul>
          <h2 className="text-2xl font-bold text-navy">A practical next step</h2>
          <p>
            Run an indicative check with our compliance tool, then request a formal obligation audit
            from Coriva One. We remain focused on programmes that supervisors can run and auditors
            can understand.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/tools/am-i-compliant">Am I compliant?</ButtonLink>
            <ButtonLink href="/resources/apprenticeship-obligation-india" variant="secondary">
              Obligation guide
            </ButtonLink>
          </div>
        </Container>
      </article>
      <CtaBand
        title="Need your exact apprentice band calculated?"
        description="Share approximate headcount by site — we’ll respond within one business day."
      />
    </>
  );
}
