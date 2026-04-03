import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FormFieldProps = {
  children: ReactNode;
  className?: string;
  error?: string;
  htmlFor?: string;
  label: string;
};

export function FormField({
  children,
  className,
  error,
  htmlFor,
  label,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label
        className="px-1 text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="px-1 text-[0.6875rem] leading-tight text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
