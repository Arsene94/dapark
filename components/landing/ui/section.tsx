import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/landing/ui/container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string;
  size?: "content" | "wide";
};

export function Section({
  children,
  className,
  containerClassName,
  size = "content",
  ...props
}: SectionProps) {
  return (
    <section className={className} {...props}>
      <Container className={containerClassName} size={size}>
        {children}
      </Container>
    </section>
  );
}
