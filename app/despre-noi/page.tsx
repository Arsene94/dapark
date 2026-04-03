import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { AboutPage } from "@/components/landing/sections/about-page";
import { buildPageMetadata, getPageSchemas } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("about");

export default function Page() {
  return (
    <>
      <JsonLd data={getPageSchemas("about")} />
        <main><AboutPage /></main>
    </>
  );
}
