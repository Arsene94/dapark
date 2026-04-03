import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { buildParkingFacilitySchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  description: siteConfig.defaultDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    locale: siteConfig.ogLocale,
    siteName: siteConfig.siteName,
    type: "website",
  },
  title: "DaCars - Parcare Termen Lung Aeroport Otopeni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full scroll-smooth" lang="ro">
      <body
        className={`${manrope.variable} ${plusJakartaSans.variable} flex min-h-full flex-col bg-surface font-body text-on-surface antialiased`}
      >
        <JsonLd data={buildParkingFacilitySchema()} />
        {children}
      </body>
    </html>
  );
}
