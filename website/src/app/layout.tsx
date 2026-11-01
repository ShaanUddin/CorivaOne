import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Coriva One | NAPS & NATS Apprenticeship Partner",
    template: "%s | Coriva One",
  },
  description:
    "Coriva One helps SMEs and mid-sized enterprises implement NAPS and NATS apprenticeship programmes — compliance, talent, stipend support, and reporting.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.corivaone.com"),
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${greatVibes.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}