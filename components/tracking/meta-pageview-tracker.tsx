"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
    interface Window {
        fbq?: (
            command: "init" | "track" | "trackCustom" | "consent",
            eventNameOrPixelId?: string,
            parameters?: Record<string, unknown>
        ) => void;
    }
}

export default function MetaPageViewTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.fbq) return;
        window.fbq("track", "PageView");
    }, [pathname]);

    return null;
}
