import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Coriva One",
  description:
    "Enquire about NAPS and NATS apprenticeship programmes. Coriva One responds within one business day.",
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
        title="Tell us about your workforce"
        description="Share headcount, sites, and whether you are exploring NAPS, NATS, or both. We respond within one business day with a clear next step."
      />
      <section className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Enquire"
              title="Programme design starts with a short brief"
              description="No need for a perfect org chart — approximate employee count and role needs are enough to begin."
            />
            <ul className="mt-8 space-y-3 text-sm text-gray">
              <li>
                Email:{" "}
                <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>Website: {site.website}</li>
              <li>Typical response: within one business day</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#dce5f0] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-navy">Enquiry form</h2>
            <p className="mt-1 text-sm text-gray">All fields help us map scheme fit accurately.</p>
            <div className="mt-4">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
