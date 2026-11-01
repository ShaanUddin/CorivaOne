import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { napsRates, natsRates, ratesDisclaimer } from "@/lib/rates";

export function SchemeCards() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="NAPS & NATS"
          title="Government-backed. Industry-focused. Future-ready."
          description="Two national schemes. Different talent pools. One implementation partner."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-[#dce5f0] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold tracking-[0.16em] text-orange uppercase">NAPS</p>
            <h3 className="mt-2 text-2xl font-extrabold text-navy">
              National Apprenticeship Promotion Scheme
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray">
              <li>For organisations with {napsRates.minEmployeesMandatory}+ employees (mandatory band)</li>
              <li>Apprenticeship share: {napsRates.obligationBand} of establishment size</li>
              <li>Typical programme duration we run: {napsRates.typicalProgrammeMonths}</li>
              <li>
                Government incentive: up to ₹{napsRates.govtShareMaxPerMonthInr.toLocaleString("en-IN")}{" "}
                / month / apprentice via DBT
              </li>
            </ul>
            <Link href="/services/naps" className="mt-6 inline-flex font-semibold text-orange hover:underline">
              Explore NAPS →
            </Link>
          </article>
          <article className="rounded-lg border border-[#dce5f0] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold tracking-[0.16em] text-orange uppercase">NATS</p>
            <h3 className="mt-2 text-2xl font-extrabold text-navy">
              National Apprenticeship Training Scheme
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray">
              <li>Graduate and diploma / technician apprentices</li>
              <li>Industry–academia collaboration for entry-level technical talent</li>
              <li>Typical duration: {natsRates.typicalDuration}</li>
              <li>
                Govt share (current guidance): ₹
                {natsRates.graduateGovtSharePerMonthInr.toLocaleString("en-IN")} graduate / ₹
                {natsRates.diplomaGovtSharePerMonthInr.toLocaleString("en-IN")} diploma per month
              </li>
            </ul>
            <Link href="/services/nats" className="mt-6 inline-flex font-semibold text-orange hover:underline">
              Explore NATS →
            </Link>
          </article>
        </div>
        <p className="mt-4 text-xs text-muted">{ratesDisclaimer()}</p>
      </Container>
    </section>
  );
}