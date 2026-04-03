import Link from "next/link";

import { bucharestLongTermParkingBookingSteps } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { NumberedStepCard } from "@/components/landing/ui/numbered-step-card";

export function BucharestLongTermParkingBookingFlowSection() {
  return (
    <section className="road-accent relative overflow-hidden bg-primary py-24 text-white">
      <div className="absolute left-0 top-0 h-full w-full opacity-10" />
      <Container className="relative z-10 px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-headline text-4xl font-extrabold md:text-5xl">
            Rezervare simplă
          </h2>
          <p className="mx-auto max-w-2xl text-xl opacity-90">
            Totul se face rapid, fără complicații. Gata în mai puțin de 2
            minute.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          <div className="absolute left-24 right-24 top-12 hidden h-0.5 border-t-2 border-dashed border-primary-fixed/40 md:block" />
          {bucharestLongTermParkingBookingSteps.map((step) => (
            <NumberedStepCard key={step.step} {...step} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            className="rounded-lg bg-white px-12 py-5 font-headline text-lg font-extrabold tracking-wider text-primary shadow-2xl transition-transform hover:scale-105"
            href="/"
          >
            ÎNCEPE REZERVAREA ACUM
          </Link>
        </div>
      </Container>
    </section>
  );
}
