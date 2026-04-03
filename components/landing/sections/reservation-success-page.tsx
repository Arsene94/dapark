"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";

import { useRouter } from "next/navigation";

import type { ContactDetail } from "@/components/landing/data";
import { parkingMapEmbedUrl } from "@/components/landing/data";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import { ContactItem } from "@/components/landing/ui/contact-item";
import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { SectionHeader } from "@/components/landing/ui/section-header";
import {
  loadStoredReservationSnapshot,
  parseStoredReservation,
} from "@/lib/reservation-session";
import { siteConfig } from "@/lib/site-config";

const successContactDetails: ContactDetail[] = [
  {
    icon: "location_on",
    title: "Adresă Parcări",
    description: `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.postalCode}`,
  },
  {
    icon: "phone",
    title: "Contact Dispecerat",
    description: `${siteConfig.phoneDisplay} (Non-stop)`,
    href: `${siteConfig.phoneHref}`
  },
];

const nextSteps = [
  {
    description:
      "Vino la adresa indicată cu 15 minute înainte de ora dorită la terminal.",
    title: "Predarea Mașinii",
  },
  {
    description:
      "Shuttle-ul nostru te preia imediat și te lasă la terminalul de plecări.",
    title: "Transfer Rapid (5 min)",
  },
  {
    description:
      "La întoarcere ne suni după ce ai ridicat bagajele și revenim după tine.",
    title: "Preluare la Întoarcere",
  },
] as const;

export function ReservationSuccessPage() {
  const router = useRouter();
  const reservationSnapshot = useSyncExternalStore(
    subscribeToReservationStorage,
    loadStoredReservationSnapshot,
    () => null,
  );
  const reservation = useMemo(
    () => parseStoredReservation(reservationSnapshot),
    [reservationSnapshot],
  );

  useEffect(() => {
    if (!reservation) {
      router.replace("/");
    }
  }, [reservation, router]);

  if (!reservation) {
    return null;
  }

  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-on-background">
        <Container className="px-0">
          <section className="mb-16 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed">
              <MaterialIcon
                className="text-4xl text-on-primary-container"
                name="check_circle"
              />
            </div>
            <SectionHeader
              centered
              className="space-y-3"
              description="Rezervarea ta a fost salvată cu succes. Detaliile sunt disponibile mai jos și rămân accesibile la refresh în sesiunea curentă."
              descriptionClassName="text-lg"
              title="Rezervarea ta este confirmată!"
              titleClassName="text-4xl font-extrabold tracking-tight text-on-background md:text-5xl"
            />
          </section>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary">
                      Număr Confirmare
                    </span>
                    <div className="text-3xl font-extrabold tracking-tighter text-on-background">
                      {reservation.confirmationId}
                    </div>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      Înregistrată la {formatReservationDate(reservation.createdAt)}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-lg bg-surface-container-low px-5 py-3">
                    <span className="rounded-full bg-primary-fixed px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-on-primary-container">
                      {reservation.dayCount}{" "}
                      {reservation.dayCount === 1 ? "zi" : "zile"}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-[0.12em] text-berkeley-blue">
                      {reservation.priceLabel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
                <h2 className="mb-6 font-headline text-2xl font-bold text-on-background">
                  Detalii rezervare
                </h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <ReservationDetail
                    label="Nume"
                    value={reservation.nume}
                  />
                  <ReservationDetail
                    label="Număr înmatriculare"
                    value={reservation.numarInmatriculare.toUpperCase()}
                  />
                  <ReservationDetail
                    label="Număr persoane"
                    value={`${reservation.numarPersoane} ${
                      reservation.numarPersoane === "1" ? "persoană" : "persoane"
                    }`}
                  />
                  <ReservationDetail
                    label="Telefon"
                    value={reservation.telefon}
                  />
                  <ReservationDetail
                    label="Dată sosire"
                    value={formatReservationDate(reservation.dataSosire)}
                  />
                  <ReservationDetail
                    label="Dată plecare"
                    value={formatReservationDate(reservation.dataPlecare)}
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-surface-container-low">
                <div className="p-8">
                  <h2 className="mb-6 font-headline text-2xl font-bold text-on-background">
                    Cum ajungi la noi
                  </h2>
                  <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {successContactDetails.map((item) => (
                      <ContactItem key={item.title} {...item} />
                    ))}
                  </div>
                  <div className="overflow-hidden rounded-lg bg-surface-dim">
                    <iframe
                      allowFullScreen
                      className="h-[400px] w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={parkingMapEmbedUrl}
                      title="Hartă interactivă Google Maps cu locația parcării DaCars"
                    />
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8 lg:col-span-4">
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
                <h3 className="mb-6 font-headline text-xl font-bold text-on-background">
                  Rezumat rapid
                </h3>
                <div className="space-y-4">
                  <SummaryRow
                    label="Sosire"
                    value={formatReservationDate(reservation.dataSosire)}
                  />
                  <SummaryRow
                    label="Plecare"
                    value={formatReservationDate(reservation.dataPlecare)}
                  />
                  <SummaryRow
                    label="Durată"
                    value={`${reservation.dayCount} ${
                      reservation.dayCount === 1 ? "zi" : "zile"
                    }`}
                  />
                  <SummaryRow
                    highlight
                    label="Preț"
                    value={reservation.priceLabel}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
                <h3 className="mb-6 font-headline text-xl font-bold text-on-background">
                  Ce urmează?
                </h3>
                <div className="relative">
                  <div className="absolute bottom-0 left-[19px] top-0 w-0.5 border-l-2 border-dashed border-primary-fixed/50 bg-primary-fixed" />
                  <div className="space-y-10">
                    {nextSteps.map((step, index) => (
                      <div key={step.title} className="relative flex gap-6">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-bold text-on-background">
                            {step.title}
                          </p>
                          <p className="mt-1 text-sm text-on-surface-variant">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4 text-center shadow-sm">
                <p className="mb-4 text-sm text-on-surface-variant">
                  Ai nevoie de ajutor cu rezervarea?
                </p>
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container-high py-4 text-sm font-bold transition-colors hover:bg-surface-container-highest"
                  href={`tel:${siteConfig.phoneHref}`}
                >
                  <MaterialIcon className="text-lg" name="phone" />
                  Contactează Suport
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}

function ReservationDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-1 rounded-lg bg-surface-container-low p-4">
      <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant">
        {label}
      </p>
      <p className="text-sm font-semibold text-on-background">{value}</p>
    </div>
  );
}

function SummaryRow({
  highlight = false,
  label,
  value,
}: {
  highlight?: boolean;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 pb-4 last:border-b-0 last:pb-0">
      <span className="text-sm text-on-surface-variant">{label}</span>
      <span
        className={
          highlight
            ? "text-right text-sm font-bold text-jade-green"
            : "text-right text-sm font-semibold text-on-background"
        }
      >
        {value}
      </span>
    </div>
  );
}

function formatReservationDate(value: string) {
  return new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function subscribeToReservationStorage(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleStorage = () => onStoreChange();

  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}
