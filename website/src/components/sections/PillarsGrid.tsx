import { Container } from "@/components/ui/Container";
import { IconCircle } from "@/components/ui/IconCircle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/lib/content/site";

const icons = ["✓", "⚙", "₹", "↻"];

export function PillarsGrid() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why apprenticeship programmes"
          title="Four outcomes employers actually need"
          description="Coriva One helps organisations leverage NAPS and NATS for a future-ready workforce — with end-to-end implementation support."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="space-y-3">
              <IconCircle>
                <span className="text-lg font-bold">{icons[i]}</span>
              </IconCircle>
              <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-gray">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}