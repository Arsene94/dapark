import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "content" | "wide";
};

const sizeClasses = {
  content: "max-w-7xl",
  wide: "max-w-screen-2xl",
} as const;

export function Container({
  className,
  size = "content",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-8", sizeClasses[size], className)}
      {...props}
    />
  );
}
