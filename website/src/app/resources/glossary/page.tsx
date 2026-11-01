import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Apprenticeship Glossary — NAPS, NATS & Key Terms",
  description:
    "Plain-language glossary of NAPS, NATS, DBT, BOAT, obligation band, stipend share, and other apprenticeship terms for employers.",
  path: "/resources/glossary",
});

const terms = [
  {
    term: "NAPS",
    definition:
      "National Apprenticeship Promotion Scheme — government scheme supporting employer engagement of apprentices with partial stipend support under MSDE.",
  },
  {
    term: "NATS",
    definition:
      "National Apprenticeship Training Scheme — graduate and diploma/technician apprenticeship training implemented via BOAT/BOPT under the Ministry of Education.",
  },
  {
    term: "DBT",
    definition:
      "Direct Benefit Transfer — government stipend share paid into the apprentice’s bank account when eligibility and employer-share conditions are met.",
  },
  {
    term: "Obligation band",
    definition:
      "The 2.5%–15% range of total workforce (including contract staff) within which establishments meeting the headcount threshold should engage apprentices.",
  },
  {
    term: "Principal employer",
    definition:
      "The establishment that engages apprentices under the Apprentices Act. Coriva One operates the programme; you remain the principal employer.",
  },
  {
    term: "BOAT / BOPT",
    definition:
      "Boards of Apprenticeship / Practical Training that implement NATS regionally for graduate and technician apprentices.",
  },
  {
    term: "Stipend",
    definition:
      "Payment to apprentices under apprenticeship law — distinct from wages. Correct structuring matters for PF/ESI treatment.",
  },
  {
    term: "Training plan",
    definition:
      "The structured learning and on-the-job curriculum against which apprentices are engaged, supervised, and assessed.",
  },
  {
    term: "Absorption / conversion",
    definition:
      "Optional hiring of apprentices onto regular rolls after assessment at programme end — generally not a statutory obligation unless contracted.",
  },
  {
    term: "MIS",
    definition:
      "Management information system / reporting pack covering attendance, engagement counts, stipend status, and programme health for leadership.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Glossary", path: "/resources/glossary" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Resources · Glossary"
        title="Apprenticeship terms, without the jargon fog"
        description="A quick reference for HR, finance, and plant leaders evaluating NAPS and NATS programmes."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <dl className="divide-y divide-[#e4ebf3] rounded-lg border border-[#e4ebf3] bg-white">
            {terms.map((item) => (
              <div key={item.term} className="px-5 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-navy">{item.term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray sm:col-span-2 sm:mt-0">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <CtaBand
        title="Prefer a walkthrough for your team?"
        description="We can run a short scheme-fit session for HR and finance before programme kickoff."
      />
    </>
  );
}
