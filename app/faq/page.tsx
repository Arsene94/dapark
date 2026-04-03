import type { Metadata } from "next";

import { FaqPage } from "@/components/landing/sections/faq-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildOrganizationSchema,
  buildPageMetadata,
  getPageSchemas,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("faq");

export default function Page() {
  return (
    <>
      <JsonLd data={[buildOrganizationSchema(), ...getPageSchemas("faq")]} />
        <main><FaqPage /></main>
    </>
  );
}
