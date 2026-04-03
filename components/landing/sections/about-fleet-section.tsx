import { aboutFleetGallery } from "@/components/landing/data";
import { FleetGalleryTile } from "@/components/landing/ui/fleet-gallery-tile";
import { Section } from "@/components/landing/ui/section";

export function AboutFleetSection() {
  return (
    <Section className="pb-24">
      <div className="mb-12">
        <h2 className="mb-2 font-headline text-3xl font-bold text-on-surface">
          Parcarea și flota DaCars
        </h2>
        <p className="text-on-surface-variant">
          Spațiu bine organizat și transfer pregătit pentru fiecare plecare.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4">
        {aboutFleetGallery.map((image) => (
          <FleetGalleryTile key={image.src} {...image} />
        ))}
      </div>
    </Section>
  );
}
