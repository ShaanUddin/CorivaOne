import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Coriva One",
  description:
    "Coriva One delivers Apprenticeship Management Services, Hospitality Support Services, staffing, recruitment, and compliance solutions — People | Solutions | Growth.",
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
        eyebrow="About"
        title="Your apprenticeship partner for a stronger tomorrow"
        description={`${site.name} helps SMEs and mid-sized enterprises implement NAPS and NATS apprenticeship programmes with operational discipline — compliance, talent, stipend support, and reporting under one partner.`}
        cta={{ href: "/contact", label: "Get in touch" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow={site.tagline}
            title="Built for employers who need programmes that run every month"
            description="Apprenticeship schemes create real workforce value when portal work, contracts, stipend evidence, and supervisor feedback stay current. That is the operating layer we own with you."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "People",
                body: "Build a supervised pipeline of apprentices matched to roles and locations — then convert the ones who fit.",
              },
              {
                title: "Compliance",
                body: "Stay inside obligation bands with contracts, training plans, and records that hold up to review.",
              },
              {
                title: "Growth",
                body: "Lower the friction of entry-level capacity while sharing stipend cost with government support where eligible.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray">
            Reach us at{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . We respond within one business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/why-corivaone">Why Coriva One</ButtonLink>
            <ButtonLink href="/careers" variant="secondary">
              Careers
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title={site.partnerLine}
        description="Tell us about your workforce — we’ll map NAPS / NATS fit."
      />
    </>
  );
}
