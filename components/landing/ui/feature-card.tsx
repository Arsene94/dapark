import type { Benefit } from "@/components/landing/data";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function FeatureCard({ description, icon, title }: Benefit) {
  return (
    <div className="rounded-lg bg-surface-container-lowest p-8 transition-all hover:bg-surface-bright hover:shadow-lg">
      <MaterialIcon
        className="mb-6 block text-4xl text-jade-green"
        name={icon}
      />
      <h2 className="mb-3 font-headline text-xl font-bold text-berkeley-blue">
        {title}
      </h2>
      <p className="text-sm leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
