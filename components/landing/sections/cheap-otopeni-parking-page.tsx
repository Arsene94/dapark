import { seoPageConfigs } from "@/lib/seo";

import { CheapOtopeniParkingBudgetSection } from "@/components/landing/sections/cheap-otopeni-parking-budget-section";
import { CheapOtopeniParkingComparisonSection } from "@/components/landing/sections/cheap-otopeni-parking-comparison-section";
import { CheapOtopeniParkingCtaSection } from "@/components/landing/sections/cheap-otopeni-parking-cta-section";
import { CheapOtopeniParkingHeroSection } from "@/components/landing/sections/cheap-otopeni-parking-hero-section";
import { CheapOtopeniParkingReasonsSection } from "@/components/landing/sections/cheap-otopeni-parking-reasons-section";
import { CheapOtopeniParkingServicesSection } from "@/components/landing/sections/cheap-otopeni-parking-services-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { TopNav } from "@/components/landing/sections/top-nav";

export function CheapOtopeniParkingPage() {
  const pageSeo = seoPageConfigs.cheapOtopeniParking;

  return (
    <>
      <TopNav />
      <main>
        <CheapOtopeniParkingHeroSection />
        <CheapOtopeniParkingReasonsSection />
        <CheapOtopeniParkingServicesSection />
        <CheapOtopeniParkingComparisonSection />
        <CheapOtopeniParkingBudgetSection />
        <TestimonialsSection />
        {pageSeo.faqItems && pageSeo.faqTitle && pageSeo.faqDescription ? (
          <FaqSection
            description={pageSeo.faqDescription}
            items={pageSeo.faqItems}
            title={pageSeo.faqTitle}
          />
        ) : null}
        <CheapOtopeniParkingCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
