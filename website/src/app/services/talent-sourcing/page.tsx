import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Talent Sourcing for NAPS & NATS Apprentices",
  description:
    "Source screened NAPS and NATS apprentice candidates against your role and location matrix. You interview and select; Coriva One presents fit profiles.",
  path: "/services/talent-sourcing",
});

export default function TalentSourcingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Talent Sourcing", path: "/services/talent-sourcing" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Services · Talent sourcing"
        title="Apprentice sourcing matched to roles, not resumes alone"
        description="Coriva One builds apprentice pipelines for shop-floor, operations, logistics, and graduate/diploma roles — screened against your location matrix so selection stays with your supervisors."
        cta={{ href: "/contact", label: "Share your role matrix" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="How sourcing works"
            title="You select. We present fit profiles."
            description="Apprenticeship programmes stall when candidate quality and scheme eligibility do not match the training plan. We source against both."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Role & location matrix",
                body: "Define trades, graduate/diploma tracks, shifts, and sites before outreach begins.",
              },
              {
                step: "02",
                title: "Scheme-aware screening",
                body: "Candidates filtered for NAPS or NATS eligibility, education, and location feasibility.",
              },
              {
                step: "03",
                title: "Shortlist presentation",
                body: "Your team interviews and decides — we coordinate joining timelines once selected.",
              },
              {
                step: "04",
                title: "Contract-ready handover",
                body: "Selected apprentices move into contract registration and onboarding with programme management.",
              },
            ].map((item) => (
              <li key={item.step} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <p className="text-sm font-bold text-orange">{item.step}</p>
                <h3 className="mt-1 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Role families"
            title="Common apprentice profiles we support"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Manufacturing & trades",
                body: "Production, assembly, quality, maintenance support, and other shop-floor NAPS trades.",
              },
              {
                title: "Logistics & operations",
                body: "Warehouse, dispatch, inventory, and coordination roles suited to structured apprenticeships.",
              },
              {
                title: "Graduate & diploma (NATS)",
                body: "Engineering, IT, and technician apprenticeships mapped to NATS graduate/diploma tracks.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#dce5f0] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/programme-management">Pair with programme management</ButtonLink>
            <ButtonLink href="/for-apprentices" variant="secondary">
              Looking for apprenticeships?
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Need a batch ready for interview within weeks?"
        description="Send your openings and locations — we will propose a sourcing plan aligned to NAPS or NATS."
      />
    </>
  );
}
