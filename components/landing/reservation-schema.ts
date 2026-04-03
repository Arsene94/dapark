import { z } from "zod";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)]?)([\s-]?[0-9])+$/,
);

function parseReservationDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

export function getReservationDayCount(
  arrivalDate: string,
  departureDate: string,
) {
  const arrival = parseReservationDate(arrivalDate);
  const departure = parseReservationDate(departureDate);

  if (!arrival || !departure) {
    return null;
  }

  const differenceInMs = departure.getTime() - arrival.getTime();

  if (differenceInMs <= 0) {
    return null;
  }

  return Math.max(1, Math.ceil(differenceInMs / DAY_IN_MS));
}

const reservationDateSchema = z
  .string()
  .min(1, "Câmpul este obligatoriu")
  .refine((value) => parseReservationDate(value) !== null, "Data nu este validă");

export const reservationSchema = z
  .object({
    nume: z
      .string()
      .trim()
      .min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
    numarPersoane: z
      .string()
      .min(1, "Numărul de persoane este obligatoriu")
      .refine((value) => {
        const parsedValue = Number(value);

        return Number.isInteger(parsedValue) && parsedValue >= 1 && parsedValue <= 8;
      }, "Selectează un număr de persoane între 1 și 8"),
    telefon: z
      .string()
      .trim()
      .regex(phoneRegex, "Numărul de telefon nu este valid"),
    numarInmatriculare: z
      .string()
      .trim()
      .min(5, "Numărul de înmatriculare este obligatoriu")
      .max(12, "Numărul de înmatriculare nu este valid"),
    dataSosire: reservationDateSchema.refine((value) => {
      const arrival = parseReservationDate(value);

      return arrival ? arrival.getTime() >= Date.now() : false;
    }, "Data de sosire nu poate fi în trecut"),
    dataPlecare: reservationDateSchema,
  })
  .superRefine((values, ctx) => {
    const arrival = parseReservationDate(values.dataSosire);
    const departure = parseReservationDate(values.dataPlecare);

    if (!arrival || !departure) {
      return;
    }

    if (departure.getTime() <= arrival.getTime()) {
      ctx.addIssue({
        code: "custom",
        message: "Data de plecare trebuie să fie după sosire",
        path: ["dataPlecare"],
      });
    }
  });

export type ReservationFormValues = z.infer<typeof reservationSchema>;
