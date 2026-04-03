import type { ComponentPropsWithoutRef } from "react";

import { parkingMapEmbedUrl } from "@/components/landing/data";
import { cn } from "@/lib/cn";

type MapEmbedProps = Omit<ComponentPropsWithoutRef<"iframe">, "src">;

export function MapEmbed({
  className,
  title = "Hartă interactivă Google Maps cu locația parcării DaCars lângă Aeroportul Otopeni",
  ...props
}: MapEmbedProps) {
  return (
    <iframe
      allowFullScreen
      className={cn("w-full border-0", className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={parkingMapEmbedUrl}
      title={title}
      {...props}
    />
  );
}
