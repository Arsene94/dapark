import type { AboutValue } from "@/components/landing/data";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function AboutValueCard({ description, icon, title }: AboutValue) {
  return (
    <div className="group rounded-xl bg-surface-container-lowest p-10 transition-all hover:shadow-xl">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-fixed transition-transform group-hover:scale-110">
        <MaterialIcon className="text-3xl text-primary" name={icon} />
      </div>
      <h3 className="mb-4 font-headline text-2xl font-bold text-on-surface">
        {title}
      </h3>
      <p className="leading-relaxed text-on-surface-variant">{description}</p>
    </div>
  );
}
