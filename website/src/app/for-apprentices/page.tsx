import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "For Apprentices | Coriva One",
  description:
    "Information for candidates interested in NAPS and NATS apprenticeship opportunities through Coriva One employer partners.",
  path: "/for-apprentices",
});

export default function ForApprenticesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "For Apprentices", path: "/for-apprentices" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="For apprentices"
        title="Structured industry training with employer partners"
        description="Coriva One works with companies running NAPS and NATS programmes. If you are a candidate, we can guide you toward openings that match your education and location — final selection always rests with the employer."
        cta={{ href: "/contact", label: "Share your profile interest" }}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What to expect"
            title="Apprenticeship is training under a contract — not informal work"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "NAPS pathways",
                body: "Trade and designated role apprenticeships with supervised on-the-job learning and stipend support under scheme rules.",
              },
              {
                title: "NATS pathways",
                body: "Graduate and diploma / technician apprenticeships with industry training, typically up to one year.",
              },
              {
                title: "Selection",
                body: "Employers interview and decide. Coriva One helps source and coordinate — we do not guarantee placement.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4ebf3] bg-white p-5">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray">
            Email{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            with your education, preferred locations, and whether you are exploring NAPS or NATS.
            Use the contact form and select your interest so our team can route you correctly.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Are you an employer looking for apprentices?"
        description="Visit our talent sourcing and programme management pages — or enquire directly."
        showForm
      />
    </>
  );
}
