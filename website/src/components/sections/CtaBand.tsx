import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function CtaBand({
  title = "Partner with CORIVAONE for a Compliant, Cost-Effective and Future-Ready Workforce",
  description = "Built for growing SMEs and mid-sized enterprises. We respond within one business day.",
  showForm = true,
}: {
  title?: string;
  description?: string;
  showForm?: boolean;
}) {
  return (
    <section className="bg-navy py-16 text-white lg:py-20">
      <Container className={`grid gap-10 ${showForm ? "lg:grid-cols-2 lg:items-start" : ""}`}>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-orange uppercase">Next step</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-white/80">{description}</p>
          <p className="script-tagline mt-6 text-3xl text-orange">Your Apprenticeship Partner for a Stronger Tomorrow.</p>
        </div>
        {showForm ? (
          <div className="rounded-lg bg-white p-5 text-navy shadow-xl">
            <h3 className="text-lg font-bold">Enquire now</h3>
            <p className="mt-1 text-sm text-gray">Tell us about your workforce — we’ll map NAPS / NATS fit.</p>
            <div className="mt-4">
              <EnquiryForm compact />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}