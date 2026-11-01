import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryOnDark" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-hover shadow-sm",
  secondary:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  secondaryOnDark:
    "border-2 border-white text-white hover:bg-white hover:text-navy",
  ghost: "text-navy hover:text-orange",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  onClick,
}: Common & { href: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}