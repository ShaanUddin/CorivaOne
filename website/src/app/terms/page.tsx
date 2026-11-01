import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Terms governing use of the Coriva One website and general conditions for requesting apprenticeship programme information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Terms", path: "/terms" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="By using this website, you agree to these terms. Programme engagements are governed by separate commercial agreements."
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-gray">
          <p>
            <strong className="text-navy">Website purpose.</strong> Content on {site.website} is
            provided for general information about {site.name} apprenticeship services. It is not
            legal advice and does not create a client relationship by itself.
          </p>
          <p>
            <strong className="text-navy">Accuracy.</strong> We aim to keep scheme descriptions and
            rate notes current and date-stamped, but official portals remain the authoritative
            source. Always re-verify before relying on figures for budgeting or compliance.
          </p>
          <p>
            <strong className="text-navy">Enquiries.</strong> Submitting a form requests a
            conversation or proposal. It does not bind either party to a commercial contract until a
            written agreement is executed.
          </p>
          <p>
            <strong className="text-navy">Acceptable use.</strong> Do not misuse the site, attempt to
            disrupt services, or submit unlawful, misleading, or abusive content through forms.
          </p>
          <p>
            <strong className="text-navy">Intellectual property.</strong> Site design, branding, and
            original content belong to {site.name} or its licensors. You may not copy substantial
            portions for commercial reuse without permission.
          </p>
          <p>
            <strong className="text-navy">Limitation.</strong> To the fullest extent permitted by
            law, {site.name} is not liable for decisions made solely on the basis of website content
            or illustrative calculators.
          </p>
          <p>
            <strong className="text-navy">Contact.</strong>{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
