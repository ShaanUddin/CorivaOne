"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/lib/content/site";
import { trackCtaClick } from "@/lib/analytics";

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 px-2 py-2 text-sm font-semibold text-navy transition hover:text-orange"
      >
        {label}
        <span aria-hidden className="text-[10px]">
          ▼
        </span>
      </button>
      <div className="invisible absolute left-0 z-40 mt-1 min-w-64 rounded-md border border-[#e4ebf3] bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-navy hover:bg-surface hover:text-orange"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4ebf3] bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          <Dropdown label="Services" items={nav.services} />
          <Link
            href="/how-it-works"
            className="px-2 py-2 text-sm font-semibold text-navy hover:text-orange"
          >
            How It Works
          </Link>
          <Dropdown label="Industries" items={nav.industries} />
          <Dropdown label="Resources" items={nav.resources} />
          <Link
            href="/about"
            className="px-2 py-2 text-sm font-semibold text-navy hover:text-orange"
          >
            About
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {site.phone ? (
            <a href={`tel:${site.phone}`} className="text-sm font-semibold text-navy">
              {site.phone}
            </a>
          ) : null}
          <ButtonLink
            href="/contact"
            onClick={() => trackCtaClick("Enquire", "header")}
          >
            Enquire
          </ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex rounded-md border border-[#d5dde8] px-3 py-2 text-sm font-semibold text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </Container>
      {open ? (
        <div className="border-t border-[#e4ebf3] bg-white lg:hidden">
          <Container className="space-y-4 py-4">
            {[...nav.services, ...nav.industries, ...nav.resources].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-semibold text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/how-it-works" className="block text-sm font-semibold text-navy" onClick={() => setOpen(false)}>
              How It Works
            </Link>
            <Link href="/about" className="block text-sm font-semibold text-navy" onClick={() => setOpen(false)}>
              About
            </Link>
            <ButtonLink href="/contact" className="w-full" onClick={() => setOpen(false)}>
              Enquire
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}