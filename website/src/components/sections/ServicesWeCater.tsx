import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesWeCater } from "@/lib/content/site";

export function ServicesWeCater() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services we cater"
          title="End-to-end solutions for growing businesses"
          description="Workforce, compliance, and systems support — delivered with practical ownership."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesWeCater.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[#e4ebf3] bg-white p-5 transition hover:border-orange hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">{item.body}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-orange">Explore →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}