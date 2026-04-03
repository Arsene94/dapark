"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/components/landing/data";
import { BrandLogo } from "@/components/landing/ui/brand-logo";
import { Container } from "@/components/landing/ui/container";
import { cn } from "@/lib/cn";

export function TopNav() {
  const pathname = usePathname();
  const activeHref =
    pathname === "/" ||
    pathname === "/despre-noi" ||
    pathname === "/faq" ||
    pathname === "/contact"
      ? pathname
      : null;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <Container
        className="flex h-20 items-center justify-between"
        size="wide"
      >
        <Link
          aria-label="DaPark homepage"
          className="shrink-0"
          href="/"
        >
          <BrandLogo priority />
        </Link>
        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors duration-300",
                resolveInternalHref(item.href) === activeHref
                  ? "border-b-2 border-jade-green pb-1 text-jade-green"
                  : "text-berkeley-blue hover:text-jade-green",
              )}
              href={resolveInternalHref(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div></div>
      </Container>
    </header>
  );
}

function resolveInternalHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}
