import { Container } from "@/components/landing/ui/container";
import { MapEmbed } from "@/components/landing/ui/map-embed";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function BucharestLongTermParkingLocationSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24" id="locatie">
      <Container className="max-w-7xl px-0">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight">
            Locație strategică
          </h2>
          <p className="text-lg text-zinc-600">
            Aproape de Aeroportul Otopeni, cu acces rapid direct din DN1.
            Poziționarea noastră îți permite să ajungi la terminal în doar
            câteva minute.
          </p>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-2xl bg-surface-container shadow-inner">
          <MapEmbed
            className="h-full w-full opacity-90"
            title="Hartă Google Maps cu accesul rapid către parcarea DaCars din Otopeni"
          />
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/90 px-8 py-6 shadow-2xl backdrop-blur">
              <div className="rounded-full bg-primary p-3">
                <MaterialIcon className="text-3xl text-white" name="location_on" />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold">
                  OtopeniPark Premium
                </h4>
                <p className="text-sm text-zinc-500">
                  3 minute distanță de terminal
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
