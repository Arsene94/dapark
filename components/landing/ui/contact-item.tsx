import type { ContactDetail } from "@/components/landing/data";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import Link from "next/link";

export function ContactItem({ description, icon, title, href }: ContactDetail) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-low text-jade-green">
        <MaterialIcon name={icon} />
      </div>
      <div>
        <p className="font-bold text-berkeley-blue">{title}</p>
          {href ? (
              <Link
                  className="text-sm text-slate-600 transition-opacity underline-offset-4 hover:text-jade-green hover:underline"
                  href={resolveInternalHref(href)!}
              >
                  {description}
              </Link>
          ) : (
              <p className="text-on-surface-variant">{description}</p>
          )}

      </div>
    </div>
  );
}

function resolveInternalHref(href?: string) {
    return href?.startsWith("#") ? `/${href}` : href;
}
