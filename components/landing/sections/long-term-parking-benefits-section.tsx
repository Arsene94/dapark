import { longTermParkingBenefits } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconPanel } from "@/components/landing/ui/icon-panel";

export function LongTermParkingBenefitsSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <Container className="px-6">
        <div className="mb-16">
          <h2 className="mb-4 font-headline text-4xl font-extrabold text-secondary">
            Ideal pentru călătorii lungi
          </h2>
          <p className="max-w-2xl text-on-surface-variant">
            Indiferent dacă pleci în vacanță sau în interes de serviciu, am
            optimizat fiecare aspect pentru confortul tău.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {longTermParkingBenefits.map((benefit) => (
            <IconPanel
              key={benefit.title}
              className="rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md"
              description={benefit.description}
              icon={benefit.icon}
              iconWrapperClassName="bg-primary-container/10"
              title={benefit.title}
              titleClassName="text-xl text-secondary"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
