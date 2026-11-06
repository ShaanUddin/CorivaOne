import { ServiceSimplePage } from "@/components/sections/ServiceSimplePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HRMS Solutions",
  description: "HRMS solutions from Coriva One for attendance, payroll inputs, and employee lifecycle visibility.",
  path: "/services/hrms",
});

export default function HrmsPage() {
  return (
    <ServiceSimplePage
      eyebrow="HRMS Solutions"
      title="HRMS Solutions"
      description="Technology-enabled HR operations — cleaner employee data, attendance workflows, and leadership visibility."
      path="/services/hrms"
      points={[
        "HRMS workflow mapping and enablement",
        "Attendance and payroll input support",
        "Employee lifecycle process clarity",
        "Dashboards for operational visibility",
      ]}
    />
  );
}