import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers at Coriva One",
  description:
    "Careers at Coriva One — roles in apprenticeship programme delivery. Openings will be listed here; for now, introduce yourself by email.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Careers", path: "/careers" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Careers"
        title="Build apprenticeship programmes that employers can run"
        description="We are growing a team that cares about compliance detail and workforce outcomes. Formal openings will appear on this page when available."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="No active listings right now"
            description="If you have experience in apprenticeship operations, HR programme delivery, or employer partnership roles, introduce yourself — we keep thoughtful profiles on file."
          />
          <p className="mt-8 text-sm text-gray">
            Email{" "}
            <a className="font-semibold text-orange hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            with a short note and CV.
          </p>
        </Container>
      </section>
      <CtaBand
        title="Employers looking for programme support?"
        description="Visit Contact to enquire about NAPS and NATS partnerships."
        showForm={false}
      />
    </>
  );
}
