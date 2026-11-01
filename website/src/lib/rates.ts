/**
 * Scheme figures — date-stamped for AEO/SEO accuracy.
 * Re-verify against official portals before relying on published numbers.
 * Sources: NAPS 2.0 guidelines (MSDE); MoE/BOAT circulars on NATS stipend share (2025).
 */
export const RATES_LAST_VERIFIED = "2026-03-01";

export const OFFICIAL_PORTALS = {
  naps: "https://www.apprenticeshipindia.gov.in/",
  nats: "https://nats.education.gov.in/",
} as const;

export const napsRates = {
  /** Government share under NAPS-2: 25% of stipend, capped */
  govtShareMaxPerMonthInr: 1500,
  govtSharePercent: 25,
  typicalProgrammeMonths: "6–12",
  obligationBand: "2.5%–15%",
  minEmployeesMandatory: 30,
  note: "Under NAPS 2.0, the government share is paid to the apprentice via DBT after the employer pays their share.",
} as const;

/**
 * NATS government share — MoE directed continuation of ₹4,500 (graduate)
 * and ₹4,000 (technician/diploma) per month via DBT pending further orders (Sep 2025 circular).
 * Brochure figures (₹6,150 / ₹5,450) are NOT used on-site until reconfirmed.
 */
export const natsRates = {
  graduateGovtSharePerMonthInr: 4500,
  diplomaGovtSharePerMonthInr: 4000,
  typicalDuration: "up to 1 year",
  note: "Prescribed minimum stipends were revised in 2025; government DBT share for graduate/technician apprentices continues at ₹4,500 / ₹4,000 per current MoE guidance until further notification.",
} as const;

export function ratesDisclaimer(): string {
  return `Figures as of ${RATES_LAST_VERIFIED}. Always re-verify on the official apprenticeship / NATS portals before relying on them.`;
}