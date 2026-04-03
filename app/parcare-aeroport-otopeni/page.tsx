import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { OtopeniAirportPage } from "@/components/landing/sections/otopeni-airport-page";
import { buildPageMetadata, getPageSchemas } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("otopeniAirportParking");

export default function Page() {
  return (
    <>
      <JsonLd data={getPageSchemas("otopeniAirportParking")} />
      <OtopeniAirportPage />
    </>
  );
}
