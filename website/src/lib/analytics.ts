export const GA_EVENTS = {
  enquirySubmit: "enquiry_submit",
  generateLead: "generate_lead",
  ctaClick: "cta_click",
  calculatorUse: "calculator_use",
  complianceCheck: "compliance_check",
  fileDownload: "file_download",
} as const;

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { gtag?: GtagFn }).gtag;
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", eventName, params);
}

export function trackCtaClick(label: string, location: string) {
  trackEvent(GA_EVENTS.ctaClick, { cta_label: label, cta_location: location });
}

export function trackEnquirySubmit(params: {
  industry: string;
  interest: string;
  employee_band: string;
}) {
  trackEvent(GA_EVENTS.enquirySubmit, params);
  trackEvent(GA_EVENTS.generateLead, {
    currency: "INR",
    ...params,
  });
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ] as const;
  const out: Record<string, string> = {};
  for (const key of keys) {
    const value = params.get(key);
    if (value) out[key] = value;
  }
  if (document.referrer) out.referrer = document.referrer;
  return out;
}