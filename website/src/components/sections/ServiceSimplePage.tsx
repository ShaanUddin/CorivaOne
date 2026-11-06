import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { breadcrumbJsonLd } from "@/lib/seo";

export function ServiceSimplePage({
  eyebrow,
  title,
  description,
  path,
  points,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  points: string[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: title, path },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        cta={{ href: "/contact", label: "Enquire Now" }}
      />
      <section className="py-16">
        <Container>
          <ul className="grid gap-3 md:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-[#e4ebf3] bg-white px-4 py-3 text-sm text-gray"
              >
                <span className="mr-2 font-bold text-orange">•</span>
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand title={`Talk to Coriva One about ${title}`} />
    </>
  );
}