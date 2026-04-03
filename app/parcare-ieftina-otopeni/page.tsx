import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { CheapOtopeniParkingPage } from "@/components/landing/sections/cheap-otopeni-parking-page";
import { buildPageMetadata, getPageSchemas } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("cheapOtopeniParking");

export default function Page() {
  return (
    <>
      <JsonLd data={getPageSchemas("cheapOtopeniParking")} />
      <CheapOtopeniParkingPage />
    </>
  );
}
