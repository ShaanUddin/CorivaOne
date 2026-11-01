"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function FaqAccordion({
  items,
  title = "Frequently asked questions",
  description,
  showAllLink = false,
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
  description?: string;
  showAllLink?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <SectionHeading eyebrow="FAQ" title={title} description={description} />
        <div className="mt-8 divide-y divide-[#dce5f0] rounded-lg border border-[#dce5f0] bg-white">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy">{item.question}</span>
                  <span className="text-orange">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-gray">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
        {showAllLink ? (
          <div className="mt-6">
            <ButtonLink href="/resources/faq" variant="secondary">
              View all FAQs
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}