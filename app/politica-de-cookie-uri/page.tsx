import type { Metadata } from "next";

import { CookiePolicyPage } from "@/components/landing/sections/cookie-policy-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildOrganizationSchema,
  buildPageMetadata,
  getPageSchemas,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("cookiePolicy");

export default function Page() {
  return (
    <>
      <JsonLd
        data={[buildOrganizationSchema(), ...getPageSchemas("cookiePolicy")]}
      />
      <CookiePolicyPage />
    </>
  );
}
