import type { Metadata } from "next";

import { ReservationSuccessPage } from "@/components/landing/sections/reservation-success-page";

export const metadata: Metadata = {
  title: "Confirmare Rezervare - DaCars",
  description: "Pagina de confirmare a rezervării DaCars.",
};

export default function Page() {
  return <main><ReservationSuccessPage /></main>;
}
