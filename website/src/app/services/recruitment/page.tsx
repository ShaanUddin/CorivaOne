import { ServiceSimplePage } from "@/components/sections/ServiceSimplePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Recruitment Solutions",
  description: "Recruitment solutions from Coriva One for permanent, campus, and specialised hiring mandates.",
  path: "/services/recruitment",
});

export default function RecruitmentPage() {
  return (
    <ServiceSimplePage
      eyebrow="Recruitment Solutions"
      title="Recruitment Solutions"
      description="Structured hiring support — from role intake and sourcing to shortlisting and offer coordination."
      path="/services/recruitment"
      points={[
        "Permanent and specialised role hiring",
        "Campus and early-talent pipelines",
        "Screening and interview coordination",
        "Offer and joining support",
      ]}
    />
  );
}