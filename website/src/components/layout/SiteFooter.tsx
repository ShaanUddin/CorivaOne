import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { OrangeWave } from "@/components/layout/OrangeWave";
import { Logo } from "@/components/layout/Logo";
import { nav, site } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <OrangeWave />
      <div className="bg-navy-deep text-white">
        <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="rounded-md bg-white px-3 py-2 inline-block">
              <Logo compact />
            </div>
            <p className="script-tagline text-2xl text-orange">{site.scriptTagline}</p>
            <p className="text-sm text-white/75">
              A new-age startup providing end-to-end solutions — apprenticeship programs, staffing,
              recruitment, payroll, labour compliances, HRMS, and hospitality support services.
            </p>
            <p className="text-xs text-white/60">
              Apprenticeship programmes operate under Government of India NAPS/NATS frameworks.
              Coriva One helps employers implement compliantly — we do not claim unofficial
              government endorsement.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold tracking-wide uppercase text-orange">Company</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/why-corivaone" className="hover:text-white">Why Coriva One</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold tracking-wide uppercase text-orange">Services</h3>
            <ul className="space-y-2 text-sm text-white/85">
              {nav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold tracking-wide uppercase text-orange">Resources</h3>
            <ul className="space-y-2 text-sm text-white/85">
              {nav.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">{item.label}</Link>
                </li>
              ))}
              <li><Link href="/resources/glossary" className="hover:text-white">Glossary</Link></li>
              <li><Link href="/resources/naps-nats-checklist" className="hover:text-white">NAPS/NATS Checklist</Link></li>
              <li><Link href="/for-apprentices" className="hover:text-white">For Apprentices</Link></li>
            </ul>
            <div className="mt-6 space-y-1 text-sm">
              <p className="font-semibold text-white">{site.salesName}</p>
              <p className="text-white/70">{site.salesTitle}</p>
              {site.phone ? (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block text-white hover:text-orange">
                  {site.phone}
                </a>
              ) : null}
              <a href={`mailto:${site.email}`} className="block text-white hover:text-orange">
                {site.email}
              </a>
              <p className="text-white/70">{site.location}</p>
              <p className="text-white/70">{site.website}</p>
            </div>
          </div>
        </Container>

        <div className="border-t border-white/10">
          <Container className="flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Coriva One. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/disclaimer" className="hover:text-white">Scheme Disclaimer</Link>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}