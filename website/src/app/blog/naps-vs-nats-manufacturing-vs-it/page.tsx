import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { RatesNote } from "@/components/sections/RatesNote";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "NAPS vs NATS for Manufacturing and IT Employers",
  description:
    "How manufacturing and IT employers should choose between NAPS and NATS — and when a dual-scheme programme makes sense.",
  path: "/blog/naps-vs-nats-manufacturing-vs-it",
});

export default function NapsVsNatsIndustryBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              {
                name: "NAPS vs NATS by industry",
                path: "/blog/naps-vs-nats-manufacturing-vs-it",
              },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="NAPS vs NATS: manufacturing vs IT"
        description="Scheme choice follows role families. Manufacturing often leans NAPS for shop-floor trades; IT and engineering functions often lean NATS for graduate and diploma apprentices."
      />
      <article className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-gray">
          <h2 className="text-2xl font-bold text-navy">Manufacturing: start with NAPS</h2>
          <p>
            Production, assembly, quality support, stores, and many maintenance-adjacent roles map
            cleanly to NAPS designated apprenticeships. Plants with 30+ workers should treat
            obligation math as part of workforce planning, then layer NATS where diploma or graduate
            engineering apprentices add value on the technical side.
          </p>
          <h2 className="text-2xl font-bold text-navy">IT & software: start with NATS</h2>
          <p>
            Graduate and diploma technician apprenticeships under NATS typically fit entry-level
            technical pipelines better than trade-focused NAPS tracks. That said, larger technology
            employers with significant operations or facilities headcount may still need NAPS for
            non-engineering roles — or for obligation coverage across the full establishment.
          </p>
          <h2 className="text-2xl font-bold text-navy">When to run both</h2>
          <p>
            Dual-scheme designs are common once headcount and role diversity grow. The mistake is
            forcing every opening into one portal. Coriva One maps each role family during the audit
            so stipend workflows and training plans stay scheme-correct.
          </p>
          <RatesNote />
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/resources/naps-vs-nats">Full NAPS vs NATS guide</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request scheme-fit advice
            </ButtonLink>
          </div>
        </Container>
      </article>
      <CtaBand
        title="Send us your role matrix"
        description="We’ll recommend NAPS, NATS, or both — with a practical intake sequence."
      />
    </>
  );
}
