import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessVerticals } from "@/lib/content/site";

export function BusinessVerticals({
  limit,
}: {
  limit?: number;
}) {
  const items = limit ? businessVerticals.slice(0, limit) : businessVerticals;
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our solutions"
          title="Workforce, compliance, and hospitality support under one partner"
          description="Coriva One delivers people and operations solutions — from apprenticeship programmes to linen care for hospitals and corporates."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
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