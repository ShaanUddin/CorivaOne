import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { whyChoose } from "@/lib/content/site";

export function WhyCoriva() {
  return (
    <section className="bg-navy py-16 text-white lg:py-20">
      <Container>
        <SectionHeading
          invert
          eyebrow="Why choose CORIVAONE"
          title="Built for SMEs and mid-sized enterprises"
          description="Measurable value, seamless implementation, and government incentives — without enterprise complexity."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {whyChoose.map((item) => (
            <div key={item} className="flex gap-4 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <IconCircle>
                <span className="font-bold text-orange">✓</span>
              </IconCircle>
              <p className="text-sm leading-relaxed text-white/90">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}