import { cheapOtopeniParkingServices } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconDetailRow } from "@/components/landing/ui/icon-detail-row";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function CheapOtopeniParkingServicesSection() {
  return (
    <section className="overflow-hidden bg-surface py-24">
      <Container className="px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 relative lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <ResponsiveImage
                alt="Shuttle"
                sizes="(max-width: 1024px) 50vw, 25vw"
                src="/images/parcare-ieftina-otopeni/space-shuttle.png"
                wrapperClassName="h-64 w-full rounded-xl shadow-lg"
              />
              <ResponsiveImage
                alt="Security"
                sizes="(max-width: 1024px) 50vw, 25vw"
                src="/images/parcare-ieftina-otopeni/seif.png"
                wrapperClassName="mt-8 h-64 w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary/20">
                <MaterialIcon className="text-tertiary" name="airport_shuttle" />
              </div>
              <span className="text-sm font-bold">Transfer Gratuit inclus</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight">
              Ce primești la fiecare rezervare
            </h2>
            <ul className="space-y-8">
              {cheapOtopeniParkingServices.map((service) => (
                <li key={service.title}>
                  <IconDetailRow
                    description={service.description}
                    icon={service.icon}
                    title={service.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
