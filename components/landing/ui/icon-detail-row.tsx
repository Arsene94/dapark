import { MaterialIcon } from "@/components/landing/ui/material-icon";

type IconDetailRowProps = {
  description: string;
  icon: string;
  title: string;
};

export function IconDetailRow({
  description,
  icon,
  title,
}: IconDetailRowProps) {
  return (
    <div className="flex gap-4">
      <MaterialIcon className="mt-0.5 shrink-0 text-primary" name={icon} />
      <div>
        <h4 className="mb-1 font-bold text-secondary">{title}</h4>
        <p className="text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}
