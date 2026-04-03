"use client";

import { useId, useState } from "react";

import { MapEmbed } from "@/components/landing/ui/map-embed";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function FaqItemCard({
  answer,
  defaultOpen = false,
  includeMap = false,
  question,
}: {
  answer: string;
  defaultOpen?: boolean;
  includeMap?: boolean;
  question: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <article className="rounded-xl bg-surface-container-lowest p-6 transition-all duration-300 hover:bg-surface-bright">
      <button
        aria-controls={contentId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <h3 className="pr-4 font-headline font-bold text-on-surface">
          {question}
        </h3>
        <MaterialIcon
          className={`shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          name="expand_more"
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        id={contentId}
      >
        <div className="overflow-hidden">
          <div className="border-t border-surface-container-high pt-4 text-on-surface-variant">
            <p className="leading-relaxed">{answer}</p>
            {includeMap ? (
              <div className="mt-4 overflow-hidden rounded-lg">
                <MapEmbed
                  className="h-48"
                  title="Hartă Google Maps cu locația parcării DaCars din Otopeni"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
