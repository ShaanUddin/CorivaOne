import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { RatesNote } from "@/components/sections/RatesNote";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Important disclaimer on scheme rates, compliance checkers, calculators, and informational content published by Coriva One.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Disclaimer", path: "/disclaimer" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Informational tools and rate notes on this site are aids for employer planning — not substitutes for official guidance or formal legal advice."
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-gray">
          <p>
            {site.name} publishes educational content about NAPS, NATS, and related apprenticeship
            topics for employers and candidates. Scheme rules, stipend shares, and portal processes
            can change. Official government portals remain the source of truth.
          </p>
          <p>
            Calculators and compliance checkers provide illustrative estimates only. Results depend
            on inputs you provide and simplified assumptions. They are not a determination of legal
            obligation, eligibility, or guaranteed subsidy.
          </p>
          <p>
            Nothing on this website constitutes legal, tax, or regulatory advice. For establishment-
            specific compliance decisions, obtain advice appropriate to your facts and review
            current circulars.
          </p>
          <RatesNote />
          <p>
            Questions:{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
