"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";

import {
  getPricingEntryForDays,
  passengerCountOptions,
} from "@/components/landing/data";
import {
  getReservationDayCount,
  reservationSchema,
  type ReservationFormValues,
} from "@/components/landing/reservation-schema";
import { FormField } from "@/components/landing/ui/form-field";
import { Input } from "@/components/landing/ui/input";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { PrimaryButton } from "@/components/landing/ui/primary-button";
import { Select } from "@/components/landing/ui/select";
import { cn } from "@/lib/cn";
import {
  buildStoredReservation,
  RESERVATION_SUCCESS_ROUTE,
  saveStoredReservation,
} from "@/lib/reservation-session";

export function BookingWidget() {
  const [currentDateTime] = useState(() => formatDateTimeLocal(new Date()));
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<ReservationFormValues>({
    defaultValues: {
      dataPlecare: "",
      dataSosire: "",
      numarInmatriculare: "",
      numarPersoane: "1",
      nume: "",
      telefon: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(reservationSchema),
  });

  const [arrivalDate = "", departureDate = ""] = useWatch({
    control,
    name: ["dataSosire", "dataPlecare"],
  });
  const pricingState = getPricingState(arrivalDate, departureDate);
  const departureMin = arrivalDate || currentDateTime;
  const isProcessing = isSubmitting || isPending;

  return (
    <form
      className="rounded-lg border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-sm"
      noValidate
      onSubmit={handleSubmit(async (values) => {
        const reservation = buildStoredReservation(values);

        saveStoredReservation(reservation);

        try {
          await fetch("/api/booking-notification", {
            body: JSON.stringify(reservation),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        } catch {
          // Keep the booking flow uninterrupted even if notification delivery fails.
        }

        startTransition(() => {
          router.push(RESERVATION_SUCCESS_ROUTE);
        });
      })}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <FormField
          error={errors.dataSosire?.message}
          htmlFor="arrival-date"
          label="Dată sosire"
        >
          <Input
            aria-invalid={Boolean(errors.dataSosire)}
            className={getFieldClassName(Boolean(errors.dataSosire))}
            id="arrival-date"
            min={currentDateTime}
            type="datetime-local"
            {...register("dataSosire")}
          />
        </FormField>
        <FormField
          error={errors.dataPlecare?.message}
          htmlFor="departure-date"
          label="Dată plecare"
        >
          <Input
            aria-invalid={Boolean(errors.dataPlecare)}
            className={getFieldClassName(Boolean(errors.dataPlecare))}
            id="departure-date"
            min={departureMin}
            type="datetime-local"
            {...register("dataPlecare")}
          />
        </FormField>
        <FormField
          error={errors.numarInmatriculare?.message}
          htmlFor="plate-number"
          label="Număr înmatriculare"
        >
          <Input
            aria-invalid={Boolean(errors.numarInmatriculare)}
            className={getFieldClassName(Boolean(errors.numarInmatriculare))}
            id="plate-number"
            placeholder="AA 00 BBB"
            type="text"
            {...register("numarInmatriculare")}
          />
        </FormField>
        <FormField error={errors.nume?.message} htmlFor="full-name" label="Nume">
          <Input
            aria-invalid={Boolean(errors.nume)}
            className={getFieldClassName(Boolean(errors.nume))}
            id="full-name"
            placeholder="Popescu Cristian"
            type="text"
            {...register("nume")}
          />
        </FormField>
        <FormField
          error={errors.telefon?.message}
          htmlFor="phone"
          label="Telefon"
        >
          <Input
            aria-invalid={Boolean(errors.telefon)}
            className={getFieldClassName(Boolean(errors.telefon))}
            id="phone"
            placeholder="0712345678"
            type="tel"
            {...register("telefon")}
          />
        </FormField>

        <FormField
            error={errors.numarPersoane?.message}
            htmlFor="passenger-count"
            label="Număr persoane"
        >
          <Select
              aria-invalid={Boolean(errors.numarPersoane)}
              className={getFieldClassName(Boolean(errors.numarPersoane))}
              id="passenger-count"
              options={passengerCountOptions}
              {...register("numarPersoane")}
          />
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          className={cn(
            "mt-6 flex min-h-14 w-full items-center justify-center rounded-lg border px-4 py-4 text-center",
            pricingState.variant === "price"
              ? "border-jade-green/15 bg-surface-container-low"
              : "border-outline-variant/10 bg-surface-container-lowest",
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {pricingState.badge ? (
              <span className="rounded-full bg-primary-fixed px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-on-primary-container">
                {pricingState.badge}
              </span>
            ) : null}
            <span
              className={cn(
                "text-sm uppercase",
                pricingState.variant === "price"
                  ? "font-bold tracking-[0.14em] text-berkeley-blue"
                  : "font-semibold tracking-[0.08em] text-on-surface-variant",
              )}
            >
              {pricingState.message}
            </span>
          </div>
        </div>
        <PrimaryButton
          className="mt-6 flex w-full items-center justify-center gap-2 py-4 uppercase tracking-wider transition-opacity hover:opacity-90"
          disabled={isProcessing}
          type="submit"
        >
          {isProcessing ? "Se procesează" : "Rezervă"}
          <MaterialIcon name="arrow_forward" />
        </PrimaryButton>
      </div>
    </form>
  );
}

function getFieldClassName(hasError: boolean) {
  return hasError
    ? "bg-error-container/40 ring-1 ring-error/25 focus:ring-error"
    : undefined;
}

function formatDateTimeLocal(date: Date) {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);

  return localDate.toISOString().slice(0, 16);
}

function getPricingState(arrivalDate: string, departureDate: string) {
  if (!arrivalDate || !departureDate) {
    return {
      badge: null,
      message: "Selectează perioada pentru a afla prețul",
      variant: "info" as const,
    };
  }

  const dayCount = getReservationDayCount(arrivalDate, departureDate);

  if (!dayCount) {
    return {
      badge: null,
      message: "Perioadă invalidă",
      variant: "info" as const,
    };
  }

  const pricingEntry = getPricingEntryForDays(dayCount);
  const badge = `${dayCount} ${dayCount === 1 ? "zi" : "zile"}`;

  if (!pricingEntry) {
    return {
      badge,
      message: "tarif disponibil telefonic",
      variant: "price" as const,
    };
  }

  return {
    badge,
    message: pricingEntry.price,
    variant: "price" as const,
  };
}
