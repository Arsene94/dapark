import Image from "next/image";

import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "footer" | "nav";
};

const logoSizes = {
  footer: {
    className: "h-12 w-auto",
    sizes: "160px",
    width: 400,
  },
  nav: {
    className: "h-10 w-auto",
    sizes: "160px",
    width: 400,
  },
} as const;

export function BrandLogo({
  className,
  priority = false,
  size = "nav",
}: BrandLogoProps) {
  const config = logoSizes[size];

  return (
    <Image
      alt="DaCars logo"
      className={cn(config.className, className)}
      height={120}
      priority={priority}
      sizes={config.sizes}
      src="/dacars-logo.svg"
      width={config.width}
    />
  );
}
