import { parkingTestimonials } from "@/components/landing/data";
import { Section } from "@/components/landing/ui/section";
import { SectionHeader } from "@/components/landing/ui/section-header";

export function TestimonialsSection({
  description = "Recenziile reale ajută atât oamenii, cât și Google, să înțeleagă că serviciul este folosit și apreciat constant.",
  title = "Recenzii de la clienți",
}: {
  description?: string;
  title?: string;
}) {
  return (
    <Section className="bg-surface py-24">
      <SectionHeader
        centered
        className="mb-14"
        description={description}
        title={title}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {parkingTestimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-2xl border border-surface-container-high bg-surface-container-low p-8 shadow-sm"
          >
            <p className="text-base leading-relaxed text-on-surface">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="mt-6 border-t border-outline-variant/30 pt-4">
              <p className="font-headline text-lg font-bold text-berkeley-blue">
                {testimonial.name}
              </p>
              <p className="text-sm text-on-surface-variant">
                {testimonial.context}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
