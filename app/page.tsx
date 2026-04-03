import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { BenefitsSection } from "@/components/landing/sections/benefits-section";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { LocationContactSection } from "@/components/landing/sections/location-contact-section";
import { PillarsSection } from "@/components/landing/sections/pillars-section";
import { PricingSection } from "@/components/landing/sections/pricing-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import {
  buildOrganizationSchema,
  buildPageMetadata,
  buildPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("home");

export default function Page() {
  return (
    <>
      <JsonLd data={[buildPageSchema("home"), buildOrganizationSchema()]} />
      <TopNav />
        <main>
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <PillarsSection />
      <LocationContactSection />
      <FooterSection />
        </main>
    </>
  );
}
