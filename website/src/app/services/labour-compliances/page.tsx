import { ServiceSimplePage } from "@/components/sections/ServiceSimplePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Labour Law Compliances",
  description: "Labour law compliance support from Coriva One to keep establishments audit-ready.",
  path: "/services/labour-compliances",
});

export default function LabourCompliancesPage() {
  return (
    <ServiceSimplePage
      eyebrow="Labour Law Compliances"
      title="Labour Law Compliances"
      description="Statutory and labour-law compliance support so HR and leadership reduce risk and stay inspection-ready."
      path="/services/labour-compliances"
      points={[
        "Establishment and statutory compliance support",
        "Documentation and register discipline",
        "Due-date oriented compliance workflows",
        "Audit and inspection readiness assistance",
      ]}
    />
  );
}