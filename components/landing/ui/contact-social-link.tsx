import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function ContactSocialLink({
  ariaLabel,
  href,
  icon,
}: {
  ariaLabel: string;
  href: string;
  icon: string;
}) {
  return (
    <a
      aria-label={ariaLabel}
      className="group flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all hover:bg-primary hover:text-white"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <MaterialIcon className="text-xl" name={icon} />
    </a>
  );
}
