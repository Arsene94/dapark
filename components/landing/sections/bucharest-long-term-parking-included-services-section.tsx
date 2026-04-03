import { bucharestLongTermParkingIncludedServices } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconDetailRow } from "@/components/landing/ui/icon-detail-row";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function BucharestLongTermParkingIncludedServicesSection() {
  return (
    <section className="px-6 py-24">
      <Container className="flex max-w-7xl flex-col items-center gap-16 px-0 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <ResponsiveImage
              alt="Shuttle Service"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="/images/bucharest-long-term-parking/shuttle-service.png"
              wrapperClassName="h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl"
            />
            <div className="absolute -right-6 -top-6 max-w-[200px] rounded-2xl bg-primary p-8 text-white shadow-xl">
              <p className="mb-1 font-headline text-3xl font-extrabold">0 lei</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                Transfer Inclus
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="mb-10 font-headline text-4xl font-bold tracking-tight">
            Servicii incluse
          </h2>
          <div className="space-y-8">
            {bucharestLongTermParkingIncludedServices.map((service) => (
              <IconDetailRow
                key={service.title}
                description={service.description}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
