"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        fbq?: (
            command: "init" | "track" | "trackCustom" | "consent",
            eventNameOrPixelId?: string,
            parameters?: Record<string, unknown>
        ) => void;
    }
}

export default function MetaLeadTracker({ price, clientName, phone}: { price: number|string, clientName: string, phone: string}) {

    useEffect(() => {
        if (!window.fbq) return;

        window.fbq("track", "Lead", {
            currency: "RON",
            value: price,
            name: clientName,
            phone: phone,
        });
    }, [price, clientName, phone]);

    return null;
}
