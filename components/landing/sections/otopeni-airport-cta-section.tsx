import Link from "next/link";

import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function OtopeniAirportCtaSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/parcare-aeroport-otopeni/gradient-green.png')",
          }}
        />
      </div>

      <Container className="relative z-10 max-w-4xl px-6 text-center">
        <h2 className="mb-8 font-headline text-4xl font-extrabold md:text-5xl">
          Rezervă locul tău
        </h2>
        <p className="mb-10 text-xl leading-relaxed opacity-90">
          Locurile sunt limitate, mai ales în perioade aglomerate.
          <br className="hidden md:block" />
          Rezervă din timp și scapă de grija parcării în ziua plecării.
        </p>
        <div className="inline-flex flex-col items-center gap-6">
          <Link
            className="rounded-lg bg-primary-fixed px-12 py-5 font-label text-lg font-bold uppercase tracking-[0.1em] text-on-primary-fixed shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-fixed-dim"
            href="/"
          >
            Rezervă Acum
          </Link>
          <div className="flex items-center gap-2 text-primary-fixed-dim">
            <MaterialIcon className="text-xl" name="bolt" />
            <span className="font-medium">Confirmare instantanee a rezervării</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
