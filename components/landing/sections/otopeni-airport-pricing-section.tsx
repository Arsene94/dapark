import { otopeniParkingPricingHighlights } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconPanel } from "@/components/landing/ui/icon-panel";

export function OtopeniAirportPricingSection() {
  return (
    <section className="bg-surface-container-low py-24" id="preturi">
      <Container className="px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold text-on-surface md:text-4xl">
            Prețuri corecte, fără surprize
          </h2>
          <p className="mx-auto max-w-xl text-on-surface-variant">
            Știm cât de important este prețul. Transparența este prioritatea
            noastră.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {otopeniParkingPricingHighlights.map((item) => (
            <IconPanel
              key={item.title}
              centered
              className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-8 text-center shadow-sm"
              description={item.description}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="rounded-full bg-primary px-8 py-4 font-headline text-lg font-bold text-white shadow-lg">
            Plătești exact cât vezi.
          </div>
        </div>
      </Container>
    </section>
  );
}
