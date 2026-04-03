import Link from "next/link";

import type { SeoLandingLink } from "@/components/landing/data";
import { cn } from "@/lib/cn";

type SeoLandingLinksProps = {
  className?: string;
  items: SeoLandingLink[];
  variant?: "cards" | "pills";
};

export function SeoLandingLinks({
  className,
  items,
  variant = "pills",
}: SeoLandingLinksProps) {
  if (variant === "cards") {
    return (
      <div className={cn("grid gap-3 md:grid-cols-2 xl:grid-cols-4", className)}>
        {items.map((item) => (
          <Link
            key={item.href}
            className="group rounded-xl border border-surface-container-high bg-surface px-4 py-4 transition-colors hover:border-jade-green/40 hover:bg-white"
            href={item.href}
          >
            <p className="font-headline text-sm font-bold text-berkeley-blue transition-colors group-hover:text-jade-green">
              {item.label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          className="rounded-full border border-surface-container-high bg-white px-4 py-2 text-xs font-semibold text-berkeley-blue transition-colors hover:border-jade-green/40 hover:text-jade-green"
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
