import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { pillars, whyChoose } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Why Coriva One for NAPS & NATS",
  description:
    "Why SMEs choose Coriva One — compliance support, portal execution, skilled apprentice pipelines, and continuous MIS under People | Compliance | Growth.",
  path: "/why-corivaone",
});

export default function WhyCorivaOnePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Why Coriva One", path: "/why-corivaone" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Why Coriva One"
        title="People. Compliance. Growth."
        description="Coriva One is an apprenticeship programme partner for SMEs and mid-sized enterprises that need NAPS and NATS to work in practice — not as a brochure promise."
        cta={{ href: "/contact", label: "Talk to our team" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our pillars"
            title="Four outcomes every programme must deliver"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <article key={p.title} className="rounded-lg border border-[#e4ebf3] bg-white p-6">
                <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What sets us apart"
            title="Operational depth, not just advisory slides"
            description="Leaders choose Coriva One when they need someone to own the monthly work behind apprenticeship compliance."
          />
          <ul className="mt-8 space-y-3">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="rounded-md border border-[#dce5f0] bg-white px-4 py-3 text-sm text-gray"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/how-it-works">See how it works</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              About Coriva One
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Partner with CORIVAONE for a compliant, cost-effective workforce"
        description="Built for growing SMEs and mid-sized enterprises across manufacturing, logistics, and IT."
      />
    </>
  );
}
