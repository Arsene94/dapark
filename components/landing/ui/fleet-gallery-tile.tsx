import { ResponsiveImage } from "@/components/landing/ui/responsive-image";
import { cn } from "@/lib/cn";
import type { FleetGalleryItem } from "@/components/landing/data";

export function FleetGalleryTile({ alt, className, src }: FleetGalleryItem) {
  return (
    <div
      className={cn(
        "min-h-64 overflow-hidden rounded-xl",
        className,
      )}
    >
      <ResponsiveImage
        alt={alt}
        className="transition-transform duration-700 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        src={src}
        wrapperClassName="h-full w-full"
      />
    </div>
  );
}
