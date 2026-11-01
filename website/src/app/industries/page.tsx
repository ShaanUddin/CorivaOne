import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Industries We Serve | Apprenticeship Programmes",
  description:
    "NAPS and NATS apprenticeship programmes for manufacturing, logistics, IT & software, and other SME sectors across India.",
  path: "/industries",
});

const industries = [
  {
    href: "/industries/manufacturing",
    title: "Manufacturing",
    body: "Shop-floor trades, quality, maintenance support, and dual NAPS/NATS pipelines for plants with 30+ workers.",
  },
  {
    href: "/industries/logistics",
    title: "Logistics",
    body: "Warehouse, dispatch, inventory, and operations apprenticeships that scale with multi-location networks.",
  },
  {
    href: "/industries/it-software",
    title: "IT & Software",
    body: "Graduate and diploma apprenticeships under NATS, with NAPS for selected operations and support roles.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Industries"
        title="Apprenticeship programmes built around how your sector hires"
        description="Coriva One works with SMEs and mid-sized enterprises where entry-level capacity, compliance, and supervisor bandwidth all matter. Start with your sector — or ask us to map a custom role matrix."
        cta={{ href: "/contact", label: "Map my industry roles" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Focus sectors"
            title="Where we deliver the most value today"
            description="These sectors combine clear obligation pressure with repeatable apprentice role families."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#e4ebf3] bg-white p-6 transition hover:border-orange"
              >
                <h2 className="text-xl font-bold text-navy">{item.title}</h2>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
                <span className="mt-4 inline-flex font-semibold text-orange">Explore →</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray">
            Other sectors — including services, retail operations, and facility-led businesses — are
            welcome. Share your headcount and role needs for a scheme-fit recommendation.
          </p>
        </Container>
      </section>
      <CtaBand
        title="Not sure which scheme fits your industry roles?"
        description="We map shop-floor, operations, and graduate tracks to NAPS, NATS, or both."
      />
    </>
  );
}
