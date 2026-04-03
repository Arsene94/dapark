import Link from "next/link";

import { Container } from "@/components/landing/ui/container";

export function CheapOtopeniParkingCtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container className="px-6 text-center">
        <div className="bg-primary-gradient relative z-10 rounded-2xl px-8 py-16">
          <h2 className="mb-6 font-headline text-4xl font-bold text-white">
            Rezervă acum locul tău
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-xl text-white/90">
            Prețurile mici atrag cerere mare. Rezervă din timp pentru a prinde
            loc.
          </p>
          <Link
            className="rounded-lg bg-white px-10 py-5 font-label text-lg font-bold uppercase tracking-wider text-primary shadow-2xl transition-colors hover:bg-zinc-100"
            href="/"
          >
            Rezervă Locul
          </Link>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 -z-0 h-1/2 w-full bg-surface-container-low" />
    </section>
  );
}
