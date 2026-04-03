import Link from "next/link";

import type { FooterGroup } from "@/components/landing/data";

export function FooterLinkGroup({ items, title }: FooterGroup) {
  return (
    <div>
      <h3 className="mb-4 font-headline font-semibold text-berkeley-blue">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <Link
                className="text-sm text-slate-600 transition-opacity underline-offset-4 hover:text-jade-green hover:underline"
                href={resolveInternalHref(item.href)}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-slate-600">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function resolveInternalHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}
