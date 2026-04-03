import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", ...props },
  ref,
) {
  return (
    <input
      className={cn(
        "min-h-12 w-full appearance-none rounded-lg border-0 bg-surface-container-low px-4 py-3 text-sm text-on-surface shadow-none outline-none ring-0 [color-scheme:light] placeholder:text-on-surface-variant/70 focus:ring-2 focus:ring-jade-green",
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  );
});
