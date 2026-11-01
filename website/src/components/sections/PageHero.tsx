import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="border-b border-[#e4ebf3] bg-surface">
      <Container className="animate-fade-up py-12 lg:py-16">
        {eyebrow ? (
          <p className="text-xs font-bold tracking-[0.18em] text-orange uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 max-w-4xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray sm:text-lg">{description}</p>
        {cta ? (
          <div className="mt-6">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}