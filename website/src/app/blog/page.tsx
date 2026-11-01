import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog & Insights | NAPS & NATS for Employers",
  description:
    "Practical insights on apprenticeship obligations, NAPS vs NATS, and NAPS 2.0 DBT for HR and business leaders.",
  path: "/blog",
});

const posts = [
  {
    href: "/blog/is-apprenticeship-mandatory-30-employees",
    title: "Is apprenticeship mandatory if you have 30+ employees?",
    excerpt:
      "How the headcount trigger and 2.5%–15% engagement band work for Indian establishments — and what to do next.",
  },
  {
    href: "/blog/naps-vs-nats-manufacturing-vs-it",
    title: "NAPS vs NATS: manufacturing vs IT scheme choice",
    excerpt:
      "When shop-floor trades call for NAPS and when graduate/diploma pipelines fit NATS — including dual-scheme designs.",
  },
  {
    href: "/blog/how-naps-2-dbt-works",
    title: "How NAPS 2.0 DBT stipend share works",
    excerpt:
      "Employer share first, government DBT second — what finance and HR need to keep monthly runs on track.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Blog / Insights"
        title="Clear guidance for employers navigating NAPS & NATS"
        description="Short, practical articles for HR, founders, and finance — written for SME and mid-market decision-making."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="Latest" title="Featured posts" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="rounded-lg border border-[#e4ebf3] bg-white p-6 transition hover:border-orange"
              >
                <h2 className="text-lg font-bold text-navy">{post.title}</h2>
                <p className="mt-2 text-sm text-gray">{post.excerpt}</p>
                <span className="mt-4 inline-flex font-semibold text-orange">Read →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand
        title="Prefer a conversation over an article?"
        description="Ask us about your headcount and role matrix — we’ll map scheme fit within one business day."
      />
    </>
  );
}
