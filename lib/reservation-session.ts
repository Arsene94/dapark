import { z } from "zod";

import { getPricingEntryForDays } from "@/components/landing/data";
import {
  reservationSchema,
  getReservationDayCount,
  type ReservationFormValues,
} from "@/components/landing/reservation-schema";

export const RESERVATION_STORAGE_KEY = "dacars:reservation";
export const RESERVATION_SUCCESS_ROUTE = "/rezervare/succes";

export type StoredReservation = ReservationFormValues & {
  confirmationId: string;
  createdAt: string;
  dayCount: number;
  priceLabel: string;
};

export const storedReservationSchema = reservationSchema.extend({
  confirmationId: z.string().min(1),
  createdAt: z.string().min(1),
  dayCount: z.number().int().nonnegative(),
  priceLabel: z.string().min(1),
});

export function buildStoredReservation(
  values: ReservationFormValues,
): StoredReservation {
  const createdAt = new Date();
  const dayCount =
    getReservationDayCount(values.dataSosire, values.dataPlecare) ?? 0;
  const pricingEntry = getPricingEntryForDays(dayCount);

  return {
    ...values,
    confirmationId: generateConfirmationId(createdAt),
    createdAt: createdAt.toISOString(),
    dayCount,
    priceLabel: pricingEntry?.price ?? "Tarif disponibil telefonic",
  };
}

export function saveStoredReservation(reservation: StoredReservation) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(
    RESERVATION_STORAGE_KEY,
    JSON.stringify(reservation),
  );
}

export function loadStoredReservation() {
  return parseStoredReservation(loadStoredReservationSnapshot());
}

export function loadStoredReservationSnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.sessionStorage.getItem(RESERVATION_STORAGE_KEY);
}

export function parseStoredReservation(rawValue: string | null) {
  if (!rawValue) {
    return null;
  }

  try {
    return storedReservationSchema.parse(JSON.parse(rawValue));
  } catch {
    return null;
  }
}

function generateConfirmationId(date: Date) {
  const year = date.getFullYear();
  const serial = getRandomSerial();

  return `DC-${year}-${serial}`;
}

function getRandomSerial() {
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const values = crypto.getRandomValues(new Uint16Array(1));

    return (values[0] % 9000) + 1000;
  }

  return Math.floor(Math.random() * 9000) + 1000;
}
