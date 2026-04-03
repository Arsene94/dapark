import Link from "next/link";

import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function BucharestLongTermParkingHeroSection() {
  return (
    <header className="relative overflow-hidden px-6 pb-20 pt-32">
      <div className="road-accent absolute right-0 top-0 -z-10 h-full w-1/3 translate-x-12 skew-x-12 opacity-20" />
      <Container className="grid max-w-7xl grid-cols-1 items-center gap-12 px-0 lg:grid-cols-2">
        <div>
          <span className="mb-6 inline-block rounded-full bg-secondary-fixed px-4 py-1.5 text-sm font-semibold tracking-wide text-on-secondary-fixed">
            PREMIUM LONG TERM PARKING
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            Parcare pe Termen Lung București,{" "}
            <span className="text-primary">aproape de aeroport</span>
          </h1>
          <p className="mb-10 max-w-lg text-xl leading-relaxed text-zinc-600">
            Dacă ai nevoie de parcare pe termen lung în București, aproape de
            aeroport, serviciul nostru este una dintre cele mai eficiente
            soluții.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="bg-primary-gradient rounded-lg px-8 py-4 font-headline text-base font-bold uppercase tracking-wider text-on-primary shadow-lg shadow-primary/20 transition-all"
              href="/"
            >
              Rezervare Rapidă
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg px-8 py-4 font-bold text-primary transition-all hover:bg-surface-container-low"
              href="#locatie"
            >
              <MaterialIcon name="explore" />
              Vezi Locația
            </Link>
          </div>
        </div>

        <div className="relative">
          <ResponsiveImage
            alt="Premium Parking Facility"
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/bucharest-long-term-parking/empty-parking.webp"
            wrapperClassName="h-[500px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 md:rotate-1 md:hover:rotate-0"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-surface-container-high bg-white p-6 shadow-xl md:block">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary-fixed p-3">
                <MaterialIcon className="text-3xl text-primary" name="verified_user" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Securitate
                </p>
                <p className="font-headline text-lg font-bold">
                  24/7 Monitorizare
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
