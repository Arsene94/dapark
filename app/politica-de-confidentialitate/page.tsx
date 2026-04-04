import type { Metadata } from "next";

import { PrivacyPolicyPage } from "@/components/landing/sections/privacy-policy-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildOrganizationSchema,
  buildPageMetadata,
  getPageSchemas,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("privacyPolicy");

export default function Page() {
  return (
    <>
      <JsonLd
        data={[buildOrganizationSchema(), ...getPageSchemas("privacyPolicy")]}
      />
      <PrivacyPolicyPage />
    </>
  );
}
