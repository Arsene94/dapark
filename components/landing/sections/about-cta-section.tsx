import Link from "next/link";

import { Container } from "@/components/landing/ui/container";

export function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24">
      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-headline text-4xl font-extrabold leading-tight text-on-surface">
            Cauți un loc sigur pentru mașina ta cât timp ești plecat?
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="w-full rounded-lg bg-primary px-10 py-5 font-headline text-sm font-bold uppercase tracking-widest text-on-primary shadow-lg transition-colors hover:bg-primary-container sm:w-auto"
              href="/"
            >
              Fă o rezervare
            </Link>
            <Link
              className="w-full rounded-lg border-2 border-outline px-10 py-5 font-headline text-sm font-bold uppercase tracking-widest transition-colors hover:bg-surface-container-high sm:w-auto"
              href="/contact"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-primary-fixed-dim opacity-20" />
      <div className="absolute bottom-4 left-0 h-1 w-full bg-primary-fixed-dim opacity-10" />
    </section>
  );
}
