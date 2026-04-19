import { NextResponse } from "next/server";

import { storedReservationSchema } from "@/lib/reservation-session";

const WHATSAPP_GRAPH_VERSION =
  process.env.WHATSAPP_BOOKING_GRAPH_VERSION || "v22.0";
const WHATSAPP_TEMPLATE_NAME =
  process.env.WHATSAPP_BOOKING_TEMPLATE_NAME || "dapark_new_booking";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const reservation = storedReservationSchema.parse(json);

    const token = process.env.WHATSAPP_BOOKING_TOKEN || "";
    const phoneNumberId = process.env.WHATSAPP_BOOKING_PHONE_NUMBER_ID || "";
    const recipient = process.env.WHATSAPP_BOOKING_RECIPIENT || "";

    if (!token || !phoneNumberId || !recipient) {
      console.warn("WhatsApp notification skipped due to missing configuration.", {
        phoneNumberId: Boolean(phoneNumberId),
        recipient: Boolean(recipient),
        token: Boolean(token),
      });

      return NextResponse.json({ skipped: true }, { status: 202 });
    }

    const endpoint = `https://graph.facebook.com/${WHATSAPP_GRAPH_VERSION}/${phoneNumberId}/messages`;
    const response = await fetch(endpoint, {
      body: JSON.stringify(buildPayload(reservation, recipient)),
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      const errorBody = await response.text();

      console.warn("WhatsApp notification failed to send.", {
        body: errorBody,
        confirmationId: reservation.confirmationId,
        status: response.status,
      });

      return NextResponse.json(
        { error: "notification_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ sent: true });
  } catch (error) {
    console.error("WhatsApp notification encountered an exception.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }
}

function buildPayload(
  reservation: ReturnType<typeof storedReservationSchema.parse>,
  recipient: string,
) {
  return {
    messaging_product: "whatsapp",
    template: {
      components: [
        {
          parameters: [
            { text: reservation.numarInmatriculare, type: "text" },
            { text: reservation.nume, type: "text" },
            { text: "-", type: "text" },
            { text: reservation.numarPersoane, type: "text" },
            { text: formatWhatsappDateTime(reservation.dataSosire), type: "text" },
            { text: formatWhatsappDateTime(reservation.dataPlecare), type: "text" },
            { text: String(reservation.dayCount), type: "text" },
            { text: reservation.priceLabel, type: "text" },
            { text: reservation.telefon, type: "text" },
          ],
          type: "body",
        },
      ],
      language: {
        code: "ro",
      },
      name: WHATSAPP_TEMPLATE_NAME,
    },
    to: recipient,
    type: "template",
  };
}

function formatWhatsappDateTime(value: string) {
  return new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
