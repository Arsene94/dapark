import Link from "next/link";

import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function CheapOtopeniParkingHeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48">
      <Container className="grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative z-10">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-tertiary">
            Premium Airport Parking
          </span>
          <h1 className="mb-6 font-headline text-5xl font-extrabold leading-tight tracking-tighter text-on-surface md:text-7xl">
            Parcare Ieftină Otopeni, preț mic, servicii complete
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-zinc-600">
            Cauți o variantă accesibilă pentru parcare lângă Aeroportul Henri
            Coandă? Oferim una dintre cele mai bune combinații între preț și
            siguranță.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="bg-primary-gradient rounded-lg px-8 py-4 text-center font-label text-base font-bold uppercase tracking-wider text-white shadow-lg"
              href="/"
            >
              Rezervă Locul
            </Link>
            <Link
              className="rounded-lg border border-outline/20 bg-surface-container-lowest px-8 py-4 text-center font-label text-base font-bold uppercase tracking-wider text-on-surface"
              href="/#tarife"
            >
              Vezi Tarife
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-12 -top-12 h-96 w-96 rounded-full bg-primary-fixed/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-xl shadow-2xl md:rotate-3">
            <ResponsiveImage
              alt="Parcare Otopeni"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="/images/parcare-otopeni-green.webp"
              wrapperClassName="h-[500px] w-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="flex items-center gap-2 text-white">
                <MaterialIcon className="text-primary-fixed" name="verified_user" />
                <span className="text-sm font-semibold">
                  Monitorizat 24/7 de echipe de securitate
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
