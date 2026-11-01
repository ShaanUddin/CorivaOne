import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Coriva One collects, uses, and protects personal information submitted through our website and enquiry forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Privacy", path: "/privacy" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="This policy explains how Coriva One handles information you share when you use our website or submit an enquiry."
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-gray">
          <p>
            <strong className="text-navy">Who we are.</strong> {site.name} (“we”, “us”) operates{" "}
            {site.website} and related apprenticeship programme services for employers.
          </p>
          <p>
            <strong className="text-navy">Information we collect.</strong> When you submit an
            enquiry, we may collect your name, work email, phone number, company name, approximate
            employee count, industry, interest area, message content, page source, and UTM / referrer
            data. Server logs may collect technical data such as IP address and browser type.
          </p>
          <p>
            <strong className="text-navy">How we use information.</strong> We use enquiry data to
            respond to your request, prepare programme recommendations, improve our website, and —
            where analytics tools are configured — understand aggregate traffic. We do not sell your
            personal information.
          </p>
          <p>
            <strong className="text-navy">Sharing.</strong> We may use trusted processors (for
            example email, spreadsheet, or analytics providers) to store or process enquiry and
            analytics data under our instructions. We may disclose information if required by law.
          </p>
          <p>
            <strong className="text-navy">Retention.</strong> We retain enquiry records for as long as
            needed to manage the business relationship and legitimate follow-up, unless a longer
            period is required by law.
          </p>
          <p>
            <strong className="text-navy">Your choices.</strong> To access, correct, or request
            deletion of personal information you have shared with us, email{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <p>
            <strong className="text-navy">Updates.</strong> We may update this policy from time to
            time. The version on this page is the current version.
          </p>
        </Container>
      </section>
    </>
  );
}
