import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { natsRates } from "@/lib/rates";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NATS & NAPS for IT and Software Employers",
  description:
    "Graduate and diploma apprenticeship programmes for IT & software organisations — NATS-first pipelines with Coriva One programme management.",
  path: "/industries/it-software",
});

export default function ItSoftwareIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: "IT & Software", path: "/industries/it-software" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries · IT & Software"
        title="Graduate and diploma apprenticeships for technology employers"
        description="IT and software organisations often fit NATS graduate and diploma tracks better than shop-floor NAPS trades. Coriva One helps structure compliant apprenticeships for entry-level technical capacity — with clear training plans, not disguised employment."
        cta={{ href: "/contact", label: "Discuss a NATS intake" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Scheme fit"
            title="NATS-first, with NAPS where operations roles need it"
            description={`Current MoE guidance continues government DBT share at ₹${natsRates.graduateGovtSharePerMonthInr.toLocaleString("en-IN")} (graduate) and ₹${natsRates.diplomaGovtSharePerMonthInr.toLocaleString("en-IN")} (diploma/technician) per month — always re-verify before budgeting.`}
          />
          <div className="mt-6">
            <RatesNote />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <h3 className="text-lg font-bold text-navy">Common NATS tracks</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray">
                <li>Graduate apprentices in engineering / IT functions</li>
                <li>Diploma technician apprentices for support and ops tech</li>
                <li>Structured mentoring with assessment at term end</li>
              </ul>
            </article>
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <h3 className="text-lg font-bold text-navy">Compliance guardrails</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray">
                <li>Training plans that match real work under supervision</li>
                <li>Clear distinction from contractor or intern misuse</li>
                <li>Obligation checks if workforce includes 30+ employees</li>
              </ul>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/nats">Explore NATS</ButtonLink>
            <ButtonLink href="/blog/naps-vs-nats-manufacturing-vs-it" variant="secondary">
              Manufacturing vs IT scheme choice
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Building an entry-level tech pipeline under NATS?"
        description="Share role families and headcount — we recommend NATS, NAPS, or a dual-scheme design."
      />
    </>
  );
}
