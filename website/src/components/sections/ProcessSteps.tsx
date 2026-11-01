import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { processSteps } from "@/lib/content/site";

export function ProcessSteps({
  limit,
  showMatrix = false,
}: {
  limit?: number;
  showMatrix?: boolean;
}) {
  const steps = limit ? processSteps.slice(0, limit) : processSteps;
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From registration to reporting — without the chaos"
          description="You remain the principal employer. Coriva One operates the programme end to end."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
              <p className="text-sm font-bold text-orange">Step {index + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-gray">{step.body}</p>
            </li>
          ))}
        </ol>
        {showMatrix ? (
          <div className="mt-10 overflow-x-auto rounded-lg border border-[#e4ebf3]">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Step</th>
                  <th className="px-4 py-3 font-semibold">You do</th>
                  <th className="px-4 py-3 font-semibold">We do</th>
                </tr>
              </thead>
              <tbody>
                {processSteps.map((step) => (
                  <tr key={step.title} className="border-t border-[#e4ebf3] odd:bg-surface">
                    <td className="px-4 py-3 font-semibold text-navy">{step.title}</td>
                    <td className="px-4 py-3 text-gray">{step.you}</td>
                    <td className="px-4 py-3 text-gray">{step.we}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-8">
            <ButtonLink href="/how-it-works" variant="secondary">
              See full process
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}