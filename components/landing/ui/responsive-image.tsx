import Image from "next/image";

import { cn } from "@/lib/cn";

type ResponsiveImageProps = {
  alt: string;
  className?: string;
  preload?: boolean;
  quality?: 60 | 75 | 85;
  sizes?: string;
  src: string;
  wrapperClassName?: string;
};

export function ResponsiveImage({
  alt,
  className,
  preload = false,
  quality = 75,
  sizes = "100vw",
  src,
  wrapperClassName,
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative", wrapperClassName)}>
      <Image
        alt={alt}
        className={cn("object-cover", className)}
        decoding="async"
        fill
        preload={preload}
        quality={quality}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}
