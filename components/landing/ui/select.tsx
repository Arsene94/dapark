import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

import type { SelectOption } from "@/components/landing/data";
import { cn } from "@/lib/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, options, ...props },
  ref,
) {
  return (
    <select
      className={cn(
        "min-h-12 w-full appearance-none rounded-lg border-0 bg-surface-container-low px-4 py-3 text-sm text-on-surface shadow-none outline-none ring-0 focus:ring-2 focus:ring-jade-green",
        className,
      )}
      ref={ref}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
