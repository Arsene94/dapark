import { contactDetails } from "@/components/landing/data";
import { ContactItem } from "@/components/landing/ui/contact-item";
import { MapEmbed } from "@/components/landing/ui/map-embed";
import { Section } from "@/components/landing/ui/section";
import { SectionHeader } from "@/components/landing/ui/section-header";

export function LocationContactSection() {
  return (
    <Section
      className="bg-surface py-24"
      containerClassName="grid items-stretch gap-16 lg:grid-cols-2"
      id="contact"
    >
      <div className="space-y-10">
        <SectionHeader
          description="Suntem situați strategic, la doar 2 minute de terminalul principal."
          title="Unde ne găsești"
        />
        <div className="space-y-6">
          {contactDetails.map((item) => (
            <ContactItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="min-h-[400px] overflow-hidden rounded-lg">
        {/*<MapEmbed // bg-surface-container-highest shadow-inner*/}
        {/*  className="h-[400px] w-full rounded-[10px] border-0"*/}
        {/*  title="Hartă interactivă Google Maps cu locația parcării DaCars lângă Aeroportul Otopeni"*/}
        {/*/>*/}
      </div>
    </Section>
  );
}
