import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site, servicesWeCater, industriesWeCater } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Coriva One",
  description:
    "Coriva One is a new-age startup providing businesses with end-to-end solutions across apprenticeship, staffing, recruitment, payroll, labour compliances, HRMS, and hospitality support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="About Us"
        title="A new-age startup providing businesses with end-to-end solutions"
        description="Coriva One partners with growing organisations to deliver people, operations, and compliance solutions — from apprenticeship programmes and staffing to payroll, labour law compliances, HRMS, and hospitality support services."
        cta={{ href: "/contact", label: "Get in touch" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow={site.tagline}
            title="Built to make business operations simpler"
            description="We combine practical execution with clear ownership. Whether you need a compliant apprentice pipeline, dependable staffing, payroll discipline, or managed linen and textile care under Hospitality Support Services — we stay accountable for outcomes."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "People",
                body: "Talent and workforce programmes that help you hire, deploy, and develop the right capacity.",
              },
              {
                title: "Solutions",
                body: "End-to-end offerings across apprenticeship, staffing, recruitment, payroll, compliance, HRMS, and hospitality support.",
              },
              {
                title: "Growth",
                body: "Scalable operating support so leadership can focus on customers and expansion — not admin friction.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What we deliver"
              title="Services designed for real operating needs"
            />
            <ul className="mt-6 space-y-2 text-sm text-gray">
              {servicesWeCater.map((item) => (
                <li key={item.href}>• {item.title}</li>
              ))}
              <li>• Hospitality Support Services (managed linen & textile care)</li>
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Industries we cater to"
            />
            <ul className="mt-6 space-y-2 text-sm text-gray">
              {industriesWeCater.map((item) => (
                <li key={item.href}>• {item.title}</li>
              ))}
              <li>• And many more</li>
            </ul>
          </div>
        </Container>
        <Container className="mt-10">
          <p className="text-sm text-gray">
            Reach us at{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            · {site.location}. We respond within one business day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Enquire Now</ButtonLink>
            <ButtonLink href="/why-corivaone" variant="secondary">
              Why Coriva One
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let’s build the right solution mix for your business"
        description="Tell us about your workforce, compliance, or hospitality support needs."
      />
    </>
  );
}