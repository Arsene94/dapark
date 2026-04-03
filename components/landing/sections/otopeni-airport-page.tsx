import { seoPageConfigs } from "@/lib/seo";

import { FaqSection } from "@/components/landing/sections/faq-section";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { OtopeniAirportAccessSection } from "@/components/landing/sections/otopeni-airport-access-section";
import { OtopeniAirportCtaSection } from "@/components/landing/sections/otopeni-airport-cta-section";
import { OtopeniAirportFeaturesSection } from "@/components/landing/sections/otopeni-airport-features-section";
import { OtopeniAirportHeroSection } from "@/components/landing/sections/otopeni-airport-hero-section";
import { OtopeniAirportHowItWorksSection } from "@/components/landing/sections/otopeni-airport-how-it-works-section";
import { OtopeniAirportPricingSection } from "@/components/landing/sections/otopeni-airport-pricing-section";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { TopNav } from "@/components/landing/sections/top-nav";

export function OtopeniAirportPage() {
  const pageSeo = seoPageConfigs.otopeniAirportParking;

  return (
    <>
      <TopNav />
      <main>
        <OtopeniAirportHeroSection />
        <OtopeniAirportFeaturesSection />
        <OtopeniAirportAccessSection />
        <OtopeniAirportPricingSection />
        <OtopeniAirportHowItWorksSection />
        <TestimonialsSection />
        {pageSeo.faqItems && pageSeo.faqTitle && pageSeo.faqDescription ? (
          <FaqSection
            description={pageSeo.faqDescription}
            items={pageSeo.faqItems}
            title={pageSeo.faqTitle}
          />
        ) : null}
        <OtopeniAirportCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
