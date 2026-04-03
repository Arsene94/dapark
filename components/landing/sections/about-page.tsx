import { AboutCtaSection } from "@/components/landing/sections/about-cta-section";
import { AboutHeroSection } from "@/components/landing/sections/about-hero-section";
import { AboutMissionVisionSection } from "@/components/landing/sections/about-mission-vision-section";
import { AboutValuesSection } from "@/components/landing/sections/about-values-section";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";

export function AboutPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20">
        <AboutHeroSection />
        <AboutValuesSection />
        <AboutMissionVisionSection />
        <AboutCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
