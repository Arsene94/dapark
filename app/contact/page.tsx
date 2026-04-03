import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { ContactPage } from "@/components/landing/sections/contact-page";
import { buildPageMetadata, getPageSchemas } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("contact");

export default function Page() {
  return (
    <>
      <JsonLd data={getPageSchemas("contact")} />
        <main><ContactPage /></main>
    </>
  );
}
