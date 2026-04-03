import Link from "next/link";

import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function LongTermParkingFlexibilitySection() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 gap-16 px-6 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-headline text-3xl font-extrabold text-secondary">
            Flexibilitate totală
          </h2>
          <p className="mb-8 leading-relaxed text-on-surface-variant">
            Zbor întârziat? Revii mai devreme? Nu e problemă. Sistemul este
            flexibil și adaptat situațiilor reale. Nu percepem taxe ascunse
            pentru modificări de ultim moment.
          </p>
          <div className="rounded-xl border-l-4 border-primary bg-surface-container p-8">
            <p className="text-lg font-bold italic text-secondary">
              &quot;Cea mai rapidă experiență de parcare. Am rezervat în timp ce
              eram în taxi spre locație!&quot;
            </p>
            <p className="mt-4 text-sm text-on-surface-variant">
              Andrei M., călător frecvent
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-2xl bg-surface-container-high p-10 text-center">
          <div className="bg-primary-gradient mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg shadow-primary/20">
            <MaterialIcon className="text-3xl text-white" name="bolt" />
          </div>
          <h2 className="mb-4 font-headline text-3xl font-extrabold text-secondary">
            Rezervare rapidă
          </h2>
          <p className="mb-8 text-on-surface-variant">
            Rezervarea durează sub 1 minut. Fără cont complicat. Fără pași
            inutili.
          </p>
          <Link
            className="bg-primary-gradient flex w-full items-center justify-center gap-3 rounded-lg py-5 font-headline text-xl font-bold text-white transition-all hover:opacity-90"
            href="/"
          >
            Rezervă Acum Locul Tău
            <MaterialIcon name="calendar_month" />
          </Link>
          <p className="mt-6 flex items-center gap-2 text-sm text-on-surface-variant">
            <MaterialIcon className="text-base text-primary" name="check_circle" />
            Confirmare instantanee a rezervării
          </p>
        </div>
      </Container>
    </section>
  );
}
