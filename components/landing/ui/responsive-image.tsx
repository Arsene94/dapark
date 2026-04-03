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
  width?: number;
  height?: number;
};

export function ResponsiveImage({
                                  alt,
                                  className,
                                  preload = false,
                                  quality = 75,
                                  sizes = "100vw",
                                  src,
                                  wrapperClassName,
                                  width,
                                  height,
                                }: ResponsiveImageProps) {
  return (
      <div className={cn("relative", wrapperClassName)}>
        {width && height ? (
            <Image
                alt={alt}
                className={cn("h-auto w-full object-cover", className)}
                decoding="async"
                width={width}
                height={height}
                preload={preload}
                quality={quality}
                sizes={sizes}
                src={src}
            />
        ) : (
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
        )}
      </div>
  );
}
