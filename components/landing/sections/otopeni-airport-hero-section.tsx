import Link from "next/link";

import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function OtopeniAirportHeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/2 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 Q100,50 200,200 T400,200"
            fill="none"
            stroke="#006d41"
            strokeDasharray="20,20"
            strokeWidth="40"
          />
        </svg>
      </div>

      <Container className="grid items-center gap-12 px-6 md:grid-cols-2">
        <div className="space-y-8">
          <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-6xl lg:text-7xl">
            Parcare Aeroport Otopeni{" "}
            <span className="text-primary">Sigură, Rapidă</span> și Accesibilă
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Dacă pleci din Aeroportul Internațional Henri Coandă și ai nevoie
            de un loc sigur unde să îți lași mașina, ai ajuns unde trebuie.
            Oferim parcare pe termen scurt și lung, la câteva minute de
            aeroport, cu acces rapid și fără complicații.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="bg-primary-gradient rounded-lg px-8 py-4 text-center font-label text-sm font-bold uppercase tracking-[0.05em] text-white shadow-lg transition-all hover:-translate-y-[2px]"
              href="/"
            >
              Rezervă Acum
            </Link>
            <Link
              className="rounded-lg bg-surface-container-highest px-8 py-4 text-center font-label text-sm font-bold uppercase tracking-[0.05em] text-secondary transition-all hover:bg-surface-container-high"
              href="#preturi"
            >
              Vezi Tarife
            </Link>
          </div>
        </div>

        <div className="relative">
          <ResponsiveImage
            alt="Parcare Otopeni"
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/parcare-otopeni-animated.png"
            wrapperClassName="h-[500px] overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 md:rotate-2 md:hover:rotate-0"
          />
          <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-xl bg-surface-container-lowest p-6 shadow-xl">
            <div className="mb-2 flex items-center gap-3 text-primary">
              <MaterialIcon className="text-xl" name="verified_user" />
              <span className="font-headline text-sm font-bold uppercase">
                Securitate 24/7
              </span>
            </div>
            <p className="text-xs leading-snug text-on-surface-variant">
              Monitorizare video permanentă pentru liniștea ta deplină.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
