import { MapEmbed } from "@/components/landing/ui/map-embed";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function FaqItemCard({
  answer,
  includeMap = false,
  question,
}: {
  answer: string;
  includeMap?: boolean;
  question: string;
}) {
  return (
    <article className="group rounded-xl bg-surface-container-lowest p-6 transition-all duration-300 hover:bg-surface-bright">
      <div className="flex items-center justify-between gap-4">
        <h3 className="pr-4 font-headline font-bold text-on-surface">
          {question}
        </h3>
        <MaterialIcon
          className="shrink-0 text-primary transition-transform group-hover:rotate-180"
          name="expand_more"
        />
      </div>
      <div className="mt-4 border-t border-surface-container-high pt-4 text-on-surface-variant">
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
    </article>
  );
}
