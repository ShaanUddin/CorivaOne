import { ServiceSimplePage } from "@/components/sections/ServiceSimplePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Payroll Management",
  description:
    "Payroll management from Coriva One — accurate monthly payroll runs with statutory inputs and operational clarity.",
  path: "/services/payroll",
});

export default function PayrollPage() {
  return (
    <ServiceSimplePage
      eyebrow="Payroll Management"
      title="Payroll Management"
      description="Keep payroll accurate, timely, and audit-friendly — with clear inputs, statutory coordination, and dependable monthly cycles."
      path="/services/payroll"
      points={[
        "Monthly payroll processing and payslip readiness",
        "Statutory input coordination (as scoped with your team)",
        "Attendance and payroll input hygiene support",
        "MIS for finance and HR visibility",
      ]}
    />
  );
}