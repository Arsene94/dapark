import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { LongTermParkingPage } from "@/components/landing/sections/long-term-parking-page";
import { buildPageMetadata, getPageSchemas } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("longTermParkingOtopeni");

export default function Page() {
  return (
    <>
      <JsonLd data={getPageSchemas("longTermParkingOtopeni")} />
      <LongTermParkingPage />
    </>
  );
}
