import { aboutValues } from "@/components/landing/data";
import { AboutValueCard } from "@/components/landing/ui/about-value-card";
import { Section } from "@/components/landing/ui/section";
import { SectionHeader } from "@/components/landing/ui/section-header";

export function AboutValuesSection() {
  return (
    <Section className="bg-surface-container-low py-24">
      <SectionHeader
        centered
        className="mb-20"
        description="În long term parking, lucrurile contează atunci când sunt simple, clare și făcute cum trebuie."
        descriptionClassName="text-lg"
        title="Pilonii pe care construim"
        titleClassName="text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {aboutValues.map((value) => (
          <AboutValueCard key={value.title} {...value} />
        ))}
      </div>
    </Section>
  );
}
