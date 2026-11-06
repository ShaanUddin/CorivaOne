import { ServiceSimplePage } from "@/components/sections/ServiceSimplePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Licensing Solutions",
  description: "Licensing and registration support from Coriva One for smoother business operations.",
  path: "/services/licensing",
});

export default function LicensingPage() {
  return (
    <ServiceSimplePage
      eyebrow="Licensing Solutions"
      title="Licensing Solutions"
      description="Support for business licences and registrations so operations are not blocked by paperwork."
      path="/services/licensing"
      points={[
        "Licence and registration guidance",
        "Documentation preparation support",
        "Renewal and follow-up coordination",
        "Aligned with your establishment footprint",
      ]}
    />
  );
}