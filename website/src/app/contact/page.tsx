import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Coriva One",
  description:
    "Enquire about Apprenticeship Management Services, Hospitality Support Services, staffing, recruitment, or compliance. We respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need"
        description="Apprenticeship programmes, hospitality linen / hospital laundry, staffing, recruitment, or compliance — share a short brief and we respond within one business day."
      />
      <section className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Enquire"
              title="Speak with our team"
              description="Approximate requirements are enough to begin — facility type, headcount, or linen volume."
            />
            <ul className="mt-8 space-y-3 text-sm text-gray">
              <li>
                <span className="font-semibold text-navy">{site.salesName}</span> — {site.salesTitle}
              </li>
              <li>
                Phone:{" "}
                <a className="font-semibold text-orange hover:underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                Email:{" "}
                <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>Location: {site.location}</li>
              <li>Website: {site.website}</li>
              <li>Typical response: within one business day</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dce5f0] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-navy">Enquiry form</h2>
            <p className="mt-1 text-sm text-gray">Choose your interest area so we route the right specialist.</p>
            <div className="mt-4">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}