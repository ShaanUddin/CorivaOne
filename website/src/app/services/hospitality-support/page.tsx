import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCircle } from "@/components/ui/IconCircle";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hospitality Support Services | Managed Linen & Textile Care",
  description:
    "Coriva One Hospitality Support Services deliver managed linen and textile care services for corporates, hospitality, and hospital laundry programmes. Enquire now.",
  path: "/services/hospitality-support",
});

const linenFeatures = [
  {
    title: "Managed linen programmes",
    body: "End-to-end linen cycles for hotels, corporates, and institutions — pickup, processing, quality control, and return.",
  },
  {
    title: "Textile care standards",
    body: "Hygienic handling, sorting, washing, finishing, and inventory discipline for consistent service quality.",
  },
  {
    title: "Hospital laundry",
    body: "Dedicated hospital laundry support where hygiene, turnaround, and batch discipline matter.",
  },
  {
    title: "Operational reporting",
    body: "Visibility on volumes, turnaround, and service levels for facilities and procurement teams.",
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
        title="Hospitality Support Services"
        description="A Coriva One business vertical focused on managed linen and textile care services for hospitality, corporate facilities, and healthcare environments."
        cta={{ href: "#enquire", label: "Enquire Now" }}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do under this vertical"
            title="Managed linen and textile care services"
            description="Hospitality Support Services covers corporate managed textile and linen care — including specialised hospital laundry support."
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
              Textile care built for healthcare turnaround
            </h2>
            <p className="mt-4 text-white/85">
              Hospital laundry sits inside Hospitality Support Services — with process discipline for
              segregation, hygienic processing, reliable turnaround, and coordination with your
              facilities team.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Batch-oriented handling for hospital linen categories</li>
              <li>• Emphasis on hygiene and documentation</li>
              <li>• Service cadence aligned to facility demand</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white/5 p-6 ring-1 ring-white/15">
            <h3 className="text-xl font-bold">Who this is for</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>Hotels and hospitality groups</li>
              <li>Hospitals and nursing homes</li>
              <li>Corporate campuses and institutions</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="enquire" className="bg-surface py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Enquire now"
              title="Talk to us about Hospitality Support Services"
              description="Share your facility type, approximate linen volume, and locations. We respond within one business day."
            />
            <p className="mt-4 text-sm text-gray">
              Prefer email? Write to{" "}
              <a className="font-semibold text-orange hover:underline" href="mailto:sahil.mahotra@corivaone.com">
                sahil.mahotra@corivaone.com
              </a>
            </p>
          </div>
          <div className="rounded-lg border border-[#dce5f0] bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-navy">Enquire now</h3>
            <p className="mt-1 text-sm text-gray">Hospitality Support / managed linen & textile care.</p>
            <div className="mt-4">
              <EnquiryForm compact defaultInterest="Hospitality Support" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}