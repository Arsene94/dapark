import type { ReactNode } from "react";

import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function ContactInfoCard({
  children,
  footer,
  icon,
  title,
}: {
  children: ReactNode;
  footer?: ReactNode;
  icon: string;
  title: string;
}) {
  return (
    <article className="group flex flex-col items-center rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-8 text-center shadow-sm transition-all duration-300 hover:bg-surface-bright">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
        <MaterialIcon className="text-3xl" name={icon} />
      </div>
      <h2 className="mb-3 font-headline text-xl font-bold text-on-surface">
        {title}
      </h2>
      <div className="space-y-2 text-on-surface-variant">{children}</div>
      {footer ? <div className="mt-3">{footer}</div> : null}
    </article>
  );
}
