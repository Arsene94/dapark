import type { FaqCategory } from "@/components/landing/data";

import { FaqItemCard } from "@/components/landing/ui/faq-item-card";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function FaqCategorySection({
  description,
  icon,
  items,
  title,
}: FaqCategory) {
  return (
    <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
      <div className="md:sticky md:top-32 md:col-span-4">
        <div className="mb-4 flex items-center gap-3">
          <MaterialIcon className="text-primary" name={icon} />
          <h2 className="font-headline text-2xl font-bold text-secondary">
            {title}
          </h2>
        </div>
        <p className="text-sm font-medium text-on-surface-variant">
          {description}
        </p>
      </div>
      <div className="space-y-4 md:col-span-8">
        {items.map((item, index) => (
          <FaqItemCard
            key={item.question}
            defaultOpen={index === 0}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
