import { Container } from "@/components/landing/ui/container";
import { MapEmbed } from "@/components/landing/ui/map-embed";

export function LongTermParkingLocationSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <Container className="px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="mb-6 font-headline text-4xl font-extrabold text-secondary">
              Lângă Aeroport
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              Suntem situați la doar 3 minute distanță de terminalele
              Plecări/Sosiri Aeroport Henri Coandă. Transferul este asigurat
              gratuit.
            </p>
          </div>
          <div className="h-[400px] w-full overflow-hidden rounded-2xl shadow-lg lg:w-2/3">
            <MapEmbed
              className="h-full w-full"
              title="Hartă Google Maps cu locația parcării DaCars aproape de Aeroportul Otopeni"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
