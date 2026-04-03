import { seoPageConfigs } from "@/lib/seo";

import { BucharestLongTermParkingAlternativeSection } from "@/components/landing/sections/bucharest-long-term-parking-alternative-section";
import { BucharestLongTermParkingBookingFlowSection } from "@/components/landing/sections/bucharest-long-term-parking-booking-flow-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { BucharestLongTermParkingHeroSection } from "@/components/landing/sections/bucharest-long-term-parking-hero-section";
import { BucharestLongTermParkingIncludedServicesSection } from "@/components/landing/sections/bucharest-long-term-parking-included-services-section";
import { BucharestLongTermParkingLocationSection } from "@/components/landing/sections/bucharest-long-term-parking-location-section";
import { BucharestLongTermParkingTravelTypesSection } from "@/components/landing/sections/bucharest-long-term-parking-travel-types-section";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { TopNav } from "@/components/landing/sections/top-nav";

export function BucharestLongTermParkingPage() {
  const pageSeo = seoPageConfigs.bucharestLongTermParking;

  return (
    <>
      <TopNav />
      <main>
        <BucharestLongTermParkingHeroSection />
        <BucharestLongTermParkingAlternativeSection />
        <BucharestLongTermParkingLocationSection />
        <BucharestLongTermParkingTravelTypesSection />
        <BucharestLongTermParkingIncludedServicesSection />
        <BucharestLongTermParkingBookingFlowSection />
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
