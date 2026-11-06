import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hospitality Support Services | Linen & Hospital Laundry",
  description:
    "Coriva One Hospitality Support Services — corporate managed linen and textile care, including hospital laundry programmes. Enquire now.",
  path: "/services/hospitality-support",
});

const linenFeatures = [
  {
    title: "Corporate linen management",
    body: "Managed textile and linen programmes for hotels, corporates, facilities, and institutional campuses — pickup, process, quality control, and return cycles.",
  },
  {
    title: "Linen care standards",
    body: "Hygienic handling, sorting, washing, finishing, and inventory discipline so your guest or patient experience stays consistent.",
  },
  {
    title: "Hospital laundry",
    body: "Dedicated hospital laundry support for healthcare environments where infection control, turnaround time, and batch tracking matter.",
  },
  {
    title: "Operational reporting",
    body: "Clear programme visibility on volumes, turnaround, and service levels so facilities and procurement teams stay in control.",
  },
];

export default function HospitalitySupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Hospitality Support Services", path: "/services/hospitality-support" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Hospitality Support Services"
        title="Linen management and care for corporates and hospitals"
        description="A separate Coriva One business vertical for managed textile and linen services — including hospital laundry — so hospitality and healthcare operations run clean, compliant, and on schedule."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we deliver"
            title="Corporate managed textile and linen services"
            description="From day-to-day linen cycles to specialised hospital laundry, Coriva One supports facilities teams with dependable hospitality operations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {linenFeatures.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-[#e4ebf3] bg-white p-5">
                <IconCircle>
                  <span className="text-sm font-bold text-orange">◆</span>
                </IconCircle>
                <div>
                  <h2 className="text-lg font-bold text-navy">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-orange uppercase">Hospital laundry</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built for healthcare turnaround and hygiene discipline
            </h2>
            <p className="mt-4 text-white/85">
              Hospital laundry is not generic hospitality washing. We focus on process discipline —
              segregation, hygienic processing, reliable turnaround, and coordination with hospital
              housekeeping or CSSD-linked workflows as defined with your facilities team.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Batch-oriented handling for hospital linen categories</li>
              <li>• Emphasis on hygiene, contamination control, and documentation</li>
              <li>• Service cadence aligned to ward and OT linen demand</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white/5 p-6 ring-1 ring-white/15">
            <h3 className="text-xl font-bold">Who this is for</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>Hospitals and nursing homes needing dependable laundry cycles</li>
              <li>Hotel and hospitality groups seeking managed linen care</li>
              <li>Corporate campuses and institutions with textile service needs</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="enquire" className="bg-surface py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Enquire now"
              title="Start a hospitality linen or hospital laundry conversation"
              description="Share your facility type, approximate linen volume, and locations. We respond within one business day."
            />
            <p className="mt-4 text-sm text-gray">
              Prefer email? Write to{" "}
              <a className="font-semibold text-orange hover:underline" href="mailto:sahil.mahotra@corivaone.com">
                sahil.mahotra@corivaone.com
              </a>
            </p>
            <p className="mt-6 text-xs text-muted">
              Hospitality Support Services is a Coriva One business vertical separate from
              Apprenticeship Management Services.
            </p>
          </div>
          <div className="rounded-lg border border-[#dce5f0] bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-navy">Enquire now</h3>
            <p className="mt-1 text-sm text-gray">Hospitality / linen / hospital laundry interest welcome.</p>
            <div className="mt-4">
              <EnquiryForm compact defaultInterest="Hospitality Support" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}