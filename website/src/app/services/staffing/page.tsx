import { ServiceSimplePage } from "@/components/sections/ServiceSimplePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Staffing Solutions",
  description: "Flexible staffing solutions from Coriva One for operations, projects, and workforce scale.",
  path: "/services/staffing",
});

export default function StaffingPage() {
  return (
    <ServiceSimplePage
      eyebrow="Staffing Solutions"
      title="Staffing Solutions"
      description="Deploy the right workforce capacity without permanent headcount drag — with onboarding and operational coordination support."
      path="/services/staffing"
      points={[
        "Contract and flexible staffing for operations and projects",
        "Associate onboarding and documentation support",
        "Attendance and deployment coordination",
        "Aligned with compliance-led workforce practices",
      ]}
    />
  );
}