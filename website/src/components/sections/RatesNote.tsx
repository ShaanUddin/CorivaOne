import { OFFICIAL_PORTALS, ratesDisclaimer } from "@/lib/rates";

export function RatesNote() {
  return (
    <p className="text-xs leading-relaxed text-muted">
      {ratesDisclaimer()}{" "}
      <a className="underline hover:text-navy" href={OFFICIAL_PORTALS.naps} target="_blank" rel="noreferrer">
        apprenticeshipindia.gov.in
      </a>{" "}
      ·{" "}
      <a className="underline hover:text-navy" href={OFFICIAL_PORTALS.nats} target="_blank" rel="noreferrer">
        nats.education.gov.in
      </a>
    </p>
  );
}