import type { FaqItem } from "@/lib/seo";

import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { Section } from "@/components/landing/ui/section";
import { SectionHeader } from "@/components/landing/ui/section-header";

export function FaqSection({
  description,
  items,
  title,
}: {
  description: string;
  items: FaqItem[];
  title: string;
}) {
  return (
    <Section className="bg-surface-container-low py-24">
      <SectionHeader
        centered
        className="mb-14"
        description={description}
        title={title}
      />
      <div className="mx-auto max-w-4xl space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-surface-container-high bg-surface-container-lowest p-6 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <h3 className="font-headline text-lg font-bold text-berkeley-blue">
                {item.question}
              </h3>
              <MaterialIcon
                className="shrink-0 text-primary transition-transform group-open:rotate-45"
                name="add"
              />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-on-surface-variant">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
