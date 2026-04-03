import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  centered?: boolean;
  className?: string;
  description: string;
  descriptionClassName?: string;
  title: string;
  titleClassName?: string;
};

export function SectionHeader({
  centered = false,
  className,
  description,
  descriptionClassName,
  title,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      <h2
        className={cn(
          "font-headline text-4xl font-bold text-berkeley-blue",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-on-surface-variant",
          centered && "mx-auto max-w-2xl",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}
