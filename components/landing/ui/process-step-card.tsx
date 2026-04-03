import { MaterialIcon } from "@/components/landing/ui/material-icon";

type ProcessStepCardProps = {
  description: string;
  icon: string;
  title: string;
};

export function ProcessStepCard({
  description,
  icon,
  title,
}: ProcessStepCardProps) {
  return (
    <div className="group flex flex-col items-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-xl ring-8 ring-primary-fixed/30 transition-transform group-hover:scale-110">
        <MaterialIcon className="text-3xl" name={icon} />
      </div>
      <h4 className="mb-2 text-center font-headline font-bold text-on-surface">
        {title}
      </h4>
      <p className="text-center text-sm text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
