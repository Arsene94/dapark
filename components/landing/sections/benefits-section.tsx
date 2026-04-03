import { seoLandingLinks } from "@/components/landing/data";
import { benefits } from "@/components/landing/data";
import { FeatureCard } from "@/components/landing/ui/feature-card";
import { SeoLandingLinks } from "@/components/landing/ui/seo-landing-links";
import { Section } from "@/components/landing/ui/section";

export function BenefitsSection() {
  return (
    <Section className="bg-surface-container-low py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <FeatureCard key={benefit.title} {...benefit} />
        ))}
      </div>
      <div className="mt-16 rounded-2xl border border-surface-container-high bg-surface-container-lowest p-6 shadow-sm md:p-8">
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-green">
            Linkuri interne SEO
          </p>
          <h2 className="mt-2 font-headline text-2xl font-bold text-berkeley-blue">
            Caută rapid pagina potrivită pentru tipul tău de parcare
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
            Am legat homepage-ul de landing-urile create, astfel încât să poți
            ajunge direct la pagina cea mai relevantă pentru căutarea ta.
          </p>
        </div>
        <SeoLandingLinks items={seoLandingLinks} variant="cards" />
      </div>
    </Section>
  );
}
