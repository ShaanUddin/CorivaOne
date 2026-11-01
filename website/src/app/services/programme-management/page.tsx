import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "End-to-End Apprenticeship Programme Management",
  description:
    "Coriva One operates NAPS and NATS apprenticeship programmes end to end — registration, sourcing, contracts, stipend support, monitoring, and conversion.",
  path: "/services/programme-management",
});

export default function ProgrammeManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Programme Management", path: "/services/programme-management" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Services · Programme management"
        title="One partner for the full apprenticeship operating system"
        description="From the first obligation audit to assessment and absorption, Coriva One runs the programme layer so your HR and plant teams are not buried in portals, contracts, and monthly stipend paperwork."
        cta={{ href: "/contact", label: "Design my programme" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Operating model"
            title="You remain the principal employer. We run the programme."
            description="Apprenticeship compliance fails when ownership is unclear. Our model keeps legal accountability with you while Coriva One executes the work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <h3 className="text-lg font-bold text-navy">Your team focuses on</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray">
                <li>Role and location priorities</li>
                <li>Interviews and final selection</li>
                <li>Supervisor assignment and shop-floor training</li>
                <li>Funding the employer stipend share on time</li>
                <li>Deciding who to absorb at programme end</li>
              </ul>
            </article>
            <article className="rounded-lg border border-[#e4ebf3] bg-white p-6">
              <h3 className="text-lg font-bold text-navy">Coriva One delivers</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray">
                <li>Obligation audit and NAPS / NATS scheme mix</li>
                <li>Portal registration, contracts, and documentation</li>
                <li>Sourcing pipelines matched to your matrix</li>
                <li>Stipend workflows and DBT readiness support</li>
                <li>Monitoring, MIS, and conversion support</li>
              </ul>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/how-it-works">See full process</ButtonLink>
            <ButtonLink href="/services/compliance-reporting" variant="secondary">
              Compliance & reporting
            </ButtonLink>
          </div>
        </Container>
      </section>
      <ProcessSteps showMatrix />
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Best fit"
            title="Built for multi-site SMEs and mid-sized enterprises"
            description="Programme management is most valuable when headcount triggers obligation, roles span trades and graduates, or HR bandwidth is already stretched."
          />
          <ul className="mt-8 grid gap-3 text-sm text-gray md:grid-cols-3">
            {[
              "30+ employee establishments needing a clean obligation plan",
              "Manufacturing, logistics, and IT teams hiring entry-level capacity",
              "Organisations that want both NAPS and NATS without dual admin load",
            ].map((item) => (
              <li key={item} className="rounded-md border border-[#dce5f0] bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand
        title="Let us operate your apprenticeship programme end to end"
        description="Share sites, headcount, and projected intake — we will propose a clear operating plan and commercial structure."
      />
    </>
  );
}
