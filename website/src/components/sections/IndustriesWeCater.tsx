import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { industriesWeCater } from "@/lib/content/site";

export function IndustriesWeCater() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries we cater to"
          title="Built for the sectors that keep India moving"
          description="From plants and warehouses to hospitality, technology, power, and retail — we align people and operations solutions to how you work."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industriesWeCater.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[#e4ebf3] bg-white p-5 transition hover:border-orange hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-gray">{item.body}</p>
            </Link>
          ))}
          <div className="rounded-lg border border-dashed border-[#c9d4e3] bg-white/70 p-5">
            <h3 className="text-lg font-bold text-navy">And many more</h3>
            <p className="mt-2 text-sm text-gray">
              Other sectors are welcome — share your context and we’ll map the right solution mix.
            </p>
            <div className="mt-4">
              <ButtonLink href="/industries" variant="secondary">
                View all industries
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}