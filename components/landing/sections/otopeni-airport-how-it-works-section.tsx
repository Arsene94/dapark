import { otopeniParkingSteps } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { ProcessStepCard } from "@/components/landing/ui/process-step-card";

export function OtopeniAirportHowItWorksSection() {
  return (
    <section className="overflow-hidden py-24">
      <Container className="px-6">
        <h2 className="mb-20 text-center font-headline text-3xl font-bold text-on-surface md:text-4xl">
          Cum funcționează
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -z-10 hidden h-1 w-full -translate-y-1/2 border-t-2 border-dashed border-primary-fixed-dim lg:block" />
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-4">
            {otopeniParkingSteps.map((step) => (
              <ProcessStepCard key={step.title} {...step} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="font-headline text-2xl font-extrabold uppercase tracking-widest text-secondary opacity-50">
            Simplu. Rapid. Fără stres.
          </p>
        </div>
      </Container>
    </section>
  );
}
