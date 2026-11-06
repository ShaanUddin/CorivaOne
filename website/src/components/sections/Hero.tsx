import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero({
  eyebrow = "PEOPLE | SOLUTIONS | GROWTH",
  title,
  subtitle,
  primaryCta = { href: "/contact", label: "Talk to an Expert" },
  secondaryCta = { href: "/tools/am-i-compliant", label: "Check Compliance" },
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(243,112,33,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 35%)",
        }}
      />
      <Container className="relative grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div className="animate-fade-up space-y-6">
          <p className="text-xs font-bold tracking-[0.2em] text-orange uppercase">{eyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-white/85">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondaryOnDark">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <div className="animate-fade-up relative min-h-64 overflow-hidden rounded-lg border border-white/10 bg-navy-deep shadow-xl lg:min-h-80">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(0,45,98,0.2), rgba(0,26,58,0.85)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Young professionals building a skilled workforce"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent p-6">
            <p className="script-tagline text-3xl text-orange">Your Growth. Our Commitment.</p>
            <p className="mt-1 text-sm text-white/80">
              Skilled People. Compliant Processes. Sustainable Growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}