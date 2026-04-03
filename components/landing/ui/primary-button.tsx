import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
  children,
  className,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary-gradient rounded-lg font-bold text-white",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
