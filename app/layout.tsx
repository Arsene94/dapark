import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/seo/json-ld";
import { buildParkingFacilitySchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";
import {GoogleTagManager} from "@next/third-parties/google";
import MetaPageViewTracker from "@/components/tracking/meta-pageview-tracker";
import {Suspense} from "react";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  description: siteConfig.defaultDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    locale: siteConfig.ogLocale,
    siteName: siteConfig.siteName,
    type: "website",
  },
  title: "DaCars - Parcare Termen Lung Aeroport Otopeni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full scroll-smooth" lang="ro">
    <GoogleTagManager gtmId="AW-18065415899" />
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '920633074095459');
              fbq('track', 'PageView');
            `}
    </Script>

    <Script id="meta-pixel" strategy="afterInteractive">
      {`
              !function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('D792E3BC77U4BVKGGK1G');
  ttq.page();
}(window, document, 'ttq');
            `}
    </Script>
    <noscript>
      <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=920633074095459&ev=PageView&noscript=1"/>
    </noscript>
    <Suspense fallback={null}>
      <MetaPageViewTracker />
    </Suspense>
      <body
        className={`${manrope.variable} ${plusJakartaSans.variable} flex min-h-full flex-col bg-surface font-body text-on-surface antialiased`}
      >
        <JsonLd data={buildParkingFacilitySchema()} />
        {children}
      </body>
    </html>
  );
}
