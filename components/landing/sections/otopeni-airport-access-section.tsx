import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function OtopeniAirportAccessSection() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-16 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <ResponsiveImage
            alt="Aeroport Otopeni Access"
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/parcare-aeroport-otopeni/airport-airplane.webp"
            wrapperClassName="h-[400px] overflow-hidden rounded-xl shadow-2xl"
          />
        </div>
        <div className="order-1 space-y-6 md:order-2">
          <h2 className="font-headline text-3xl font-bold text-on-surface md:text-4xl">
            Acces rapid către aeroport
          </h2>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Suntem poziționați strategic, la câteva minute de aeroport.
            Transferul se face imediat după parcare, fără timp pierdut.
          </p>
          <div className="flex items-start gap-4 rounded-xl border-l-4 border-primary bg-primary-fixed/20 p-6">
            <MaterialIcon className="mt-0.5 shrink-0 text-3xl text-primary" name="timer" />
            <p className="font-medium text-on-surface">
              Ajungi din parcare la terminal în câteva minute, fără stresul
              traficului sau al locurilor ocupate.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
