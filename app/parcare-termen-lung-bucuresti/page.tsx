import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { BucharestLongTermParkingPage } from "@/components/landing/sections/bucharest-long-term-parking-page";
import { buildPageMetadata, getPageSchemas } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("bucharestLongTermParking");

export default function Page() {
  return (
    <>
      <JsonLd data={getPageSchemas("bucharestLongTermParking")} />
      <BucharestLongTermParkingPage />
    </>
  );
}
