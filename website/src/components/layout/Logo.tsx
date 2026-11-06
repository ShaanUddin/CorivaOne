import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center" aria-label={`${site.name} home`}>
      <Image
        src={site.logoSrc}
        alt="CORIVAONE — People | Solutions | Growth"
        width={compact ? 160 : 220}
        height={compact ? 48 : 64}
        className={`h-auto w-auto object-contain ${compact ? "max-h-10" : "max-h-12 sm:max-h-14"}`}
        priority
      />
    </Link>
  );
}