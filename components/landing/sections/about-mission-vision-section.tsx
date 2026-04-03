import { aboutStatements } from "@/components/landing/data";
import { AboutStatementCard } from "@/components/landing/ui/about-statement-card";
import { Section } from "@/components/landing/ui/section";

export function AboutMissionVisionSection() {
  return (
    <Section className="py-32">
      <div className="flex flex-col items-stretch gap-12 md:flex-row">
        {aboutStatements.map((statement) => (
          <AboutStatementCard key={statement.title} {...statement} />
        ))}
      </div>
    </Section>
  );
}
