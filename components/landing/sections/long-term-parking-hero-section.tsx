import Link from "next/link";

import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function LongTermParkingHeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 md:pb-40 md:pt-32">
      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="mb-6 inline-block rounded-full bg-primary-container/10 px-3 py-1 text-sm font-bold tracking-wider text-primary">
            PREMIUM LONG TERM PARKING
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] text-secondary md:text-7xl">
            Long Term Parking Otopeni, parcare pe termen lung fără griji
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Ai nevoie de parcare pentru câteva zile sau chiar săptămâni?
            Serviciul nostru de long term parking lângă Aeroportul Otopeni este
            gândit exact pentru asta.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="bg-primary-gradient flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-headline text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:opacity-90"
              href="/"
            >
              Rezervă Acum
              <MaterialIcon className="text-lg" name="arrow_forward" />
            </Link>
            <Link
              className="rounded-lg border border-outline/20 bg-surface-container-low px-8 py-4 text-center font-headline text-lg font-bold text-secondary transition-all hover:bg-surface-container-high"
              href="/#tarife"
            >
              Vezi Tarife
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl shadow-2xl md:rotate-1">
            <ResponsiveImage
              alt="Modern parking facility"
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/images/long-term-parking-otopeni/parcare-subteran.png"
              wrapperClassName="h-[500px] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
          </div>
          <div
            className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 bg-primary-gradient opacity-20"
            style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
          />
        </div>
      </Container>
    </section>
  );
}
