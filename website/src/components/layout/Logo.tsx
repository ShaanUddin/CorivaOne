import Link from "next/link";
import { site } from "@/lib/content/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M20 4C11.163 4 4 11.163 4 20c0 8.837 7.163 16 16 16 4.1 0 7.84-1.54 10.67-4.07L26.2 27.4A9.9 9.9 0 0 1 20 30c-5.523 0-10-4.477-10-10S14.477 10 20 10c2.2 0 4.23.71 5.88 1.92l4.55-4.55A15.9 15.9 0 0 0 20 4Z"
          fill="#002D62"
        />
        <path
          d="M31.2 12.4 26.5 17.1A9.9 9.9 0 0 1 30 20c0 2.2-.71 4.23-1.92 5.88l4.55 4.55A15.9 15.9 0 0 0 36 20c0-2.88-.76-5.58-2.09-7.9l-2.71.3Z"
          fill="#F37021"
        />
      </svg>
      <span className="leading-tight">
        <span className="block text-lg font-extrabold tracking-wide text-navy group-hover:text-navy">
          {site.wordmark}
        </span>
        {!compact ? (
          <span className="block text-[10px] font-semibold tracking-[0.14em] text-gray uppercase">
            {site.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}