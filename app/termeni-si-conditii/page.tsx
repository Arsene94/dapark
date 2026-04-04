import type { Metadata } from "next";

import { TermsConditionsPage } from "@/components/landing/sections/terms-conditions-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildOrganizationSchema,
  buildPageMetadata,
  getPageSchemas,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("termsConditions");

export default function Page() {
  return (
    <>
      <JsonLd
        data={[buildOrganizationSchema(), ...getPageSchemas("termsConditions")]}
      />
      <TermsConditionsPage />
    </>
  );
}
