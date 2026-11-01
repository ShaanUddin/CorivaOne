import { Container } from "@/components/ui/Container";

export function TrustStrip({
  items = [
    "Government-backed NAPS & NATS schemes",
    "Built for employers with 30+ staff",
    "Manufacturing · Logistics · IT & Software",
  ],
}: {
  items?: string[];
}) {
  return (
    <section className="border-b border-[#e4ebf3] bg-surface">
      <Container className="flex flex-col gap-3 py-4 text-sm font-semibold text-navy sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-orange" />
            {item}
          </span>
        ))}
      </Container>
    </section>
  );
}