import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { cn } from "@/lib/cn";

type IconPanelProps = {
  centered?: boolean;
  className?: string;
  description: string;
  descriptionClassName?: string;
  icon: string;
  iconClassName?: string;
  iconWrapperClassName?: string;
  title: string;
  titleClassName?: string;
};

export function IconPanel({
  centered = false,
  className,
  description,
  descriptionClassName,
  icon,
  iconClassName,
  iconWrapperClassName,
  title,
  titleClassName,
}: IconPanelProps) {
  return (
    <div className={className}>
      <div
        className={cn(
          "mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed text-on-primary-fixed",
          centered && "mx-auto",
          iconWrapperClassName,
        )}
      >
        <MaterialIcon className={cn("text-[1.75rem]", iconClassName)} name={icon} />
      </div>
      <h3
        className={cn(
          "mb-3 font-headline text-lg font-bold text-on-surface",
          centered && "text-center",
          titleClassName,
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm leading-relaxed text-on-surface-variant",
          centered && "text-center",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}
