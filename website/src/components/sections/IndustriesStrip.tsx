import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  { href: "/industries/manufacturing", label: "Manufacturing", blurb: "Operators, technicians, quality roles" },
  { href: "/industries/logistics", label: "Logistics", blurb: "Warehouse, dispatch, field ops pipelines" },
  { href: "/industries/it-software", label: "IT & Software", blurb: "Graduate / diploma trainee funnels" },
  { href: "/industries/hospitality", label: "Hospitality & Healthcare", blurb: "Linen care and hospital laundry" },
];

export function IndustriesStrip() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries we serve"
          title="Where apprenticeship programmes create immediate leverage"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[#e4ebf3] bg-white p-5 transition hover:border-orange hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-navy">{item.label}</h3>
              <p className="mt-2 text-sm text-gray">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}