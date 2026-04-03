import Link from "next/link";

import { footerGroups, socialIcons } from "@/components/landing/data";
import { BrandLogo } from "@/components/landing/ui/brand-logo";
import { FooterLinkGroup } from "@/components/landing/ui/footer-link-group";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function FooterSection() {
  return (
    <footer className="grid w-full grid-cols-1 gap-8 bg-[#f6f3f2] px-8 py-12 md:grid-cols-4">
      <div className="col-span-1 space-y-4 md:col-span-1">
        <Link aria-label="DaPark homepage" className="inline-flex" href="/">
          <BrandLogo size="footer" />
        </Link>
        <p className="text-sm text-slate-600">
          Partenerul tău de încredere pentru parcare securizată la cel mai înalt
          nivel de profesionalism.
        </p>
      </div>
      {footerGroups.map((group) => (
        <FooterLinkGroup key={group.title} {...group} />
      ))}
      <div className="col-span-1 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:col-span-4 md:flex-row">
        <p className="text-xs text-slate-600">
          © 2024 DaCars Parking Otopeni. Toate drepturile rezervate.
        </p>
        <div className="flex gap-4">
          {socialIcons.map((icon) => (
            <MaterialIcon
              key={icon.name}
              className="cursor-pointer text-slate-400 transition-colors hover:text-jade-green"
              dataIcon={icon.dataIcon}
              name={icon.name}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
