import { cn } from "@/lib/cn";
import type { AboutStatement } from "@/components/landing/data";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function AboutStatementCard({
  description,
  icon,
  title,
  variant,
}: AboutStatement) {
  return (
    <div
      className={cn(
        "group relative flex-1 overflow-hidden rounded-xl p-12",
        variant === "primary"
          ? "bg-primary text-on-primary"
          : "bg-surface-container-high text-on-surface",
      )}
    >
      <div className="relative z-10">
        <h3 className="mb-6 font-headline text-4xl font-extrabold">{title}</h3>
        <p
          className={cn(
            "text-xl leading-relaxed",
            variant === "primary" ? "opacity-90" : "text-on-surface-variant",
          )}
        >
          {description}
        </p>
      </div>
      <div
        className={cn(
          "absolute right-0 top-0 p-8 transition-opacity group-hover:opacity-20",
          variant === "primary" ? "opacity-10" : "opacity-10",
        )}
      >
        <MaterialIcon className="text-[120px]" name={icon} />
      </div>
    </div>
  );
}
