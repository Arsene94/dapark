import { seoPageConfigs } from "@/lib/seo";

import { FaqSection } from "@/components/landing/sections/faq-section";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { LongTermParkingBenefitsSection } from "@/components/landing/sections/long-term-parking-benefits-section";
import { LongTermParkingFlexibilitySection } from "@/components/landing/sections/long-term-parking-flexibility-section";
import { LongTermParkingHeroSection } from "@/components/landing/sections/long-term-parking-hero-section";
import { LongTermParkingLocationSection } from "@/components/landing/sections/long-term-parking-location-section";
import { LongTermParkingSavingsSection } from "@/components/landing/sections/long-term-parking-savings-section";
import { LongTermParkingSecuritySection } from "@/components/landing/sections/long-term-parking-security-section";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { TopNav } from "@/components/landing/sections/top-nav";

export function LongTermParkingPage() {
  const pageSeo = seoPageConfigs.longTermParkingOtopeni;

  return (
    <>
      <TopNav />
      <main className="pt-20">
        <LongTermParkingHeroSection />
        <LongTermParkingBenefitsSection />
        <LongTermParkingSecuritySection />
        <LongTermParkingSavingsSection />
        <LongTermParkingFlexibilitySection />
        <LongTermParkingLocationSection />
        <TestimonialsSection />
        {pageSeo.faqItems && pageSeo.faqTitle && pageSeo.faqDescription ? (
          <FaqSection
            description={pageSeo.faqDescription}
            items={pageSeo.faqItems}
            title={pageSeo.faqTitle}
          />
        ) : null}
      </main>
      <FooterSection />
    </>
  );
}
