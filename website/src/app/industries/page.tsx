import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industriesWeCater } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Industries We Cater To",
  description:
    "Coriva One serves Manufacturing, Logistics, Hospitality, IT & ITeS, Power, Retail & E-commerce, and more with end-to-end business solutions.",
  path: "/industries",
});

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
        eyebrow="Industries we cater to"
        title="Solutions mapped to how your sector operates"
        description="Manufacturing, logistics, hospitality, IT & ITeS, power, retail & e-commerce — and many more. Tell us your context and we’ll recommend the right mix."
        cta={{ href: "/contact", label: "Enquire Now" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Focus sectors"
            title="Where Coriva One creates leverage"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesWeCater.map((item) => (
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
            <div className="rounded-lg border border-dashed border-[#c9d4e3] bg-surface p-6">
              <h2 className="text-xl font-bold text-navy">And many more</h2>
              <p className="mt-2 text-sm text-gray">
                Other sectors are welcome. Share your headcount, sites, and priorities for a tailored recommendation.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand title="Not sure which solution fits your industry?" />
    </>
  );
}