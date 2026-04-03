import type { Metadata } from "next";

import { faqPageSchemaItems } from "@/components/landing/data";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export type FaqItem = {
  answer: string;
  question: string;
};

type PageSchemaType = "AboutPage" | "ContactPage" | "WebPage";

type SeoPageKey =
  | "about"
  | "bucharestLongTermParking"
  | "cheapOtopeniParking"
  | "contact"
  | "faq"
  | "home"
  | "longTermParkingOtopeni"
  | "otopeniAirportParking";

type SeoPageConfig = {
  areaServed?: string;
  breadcrumbName: string;
  description: string;
  faqDescription?: string;
  faqItems?: FaqItem[];
  faqTitle?: string;
  image: string;
  keywords: string[];
  language: string;
  path: string;
  schemaType: PageSchemaType;
  schemaName?: string;
  serviceName?: string;
  serviceType?: string;
  title: string;
};

const commonParkingFaqs: FaqItem[] = [
  {
    answer:
      "Parcarea este situată la câteva minute de Aeroportul Otopeni, iar transferul către terminal se face rapid, fără complicații.",
    question: "Cât de departe este parcarea de Aeroportul Otopeni?",
  },
  {
    answer:
      "Da, parcarea este monitorizată video 24/7 și are acces controlat pentru un nivel ridicat de siguranță.",
    question: "Aveți supraveghere video?",
  },
  {
    answer:
      "Da, transferul către aeroport este inclus conform serviciului prezentat pe site.",
    question: "Transferul către aeroport este inclus?",
  },
  {
    answer:
      "Da, serviciul este gândit atât pentru perioade scurte, cât și pentru parcare pe termen lung.",
    question: "Pot lăsa mașina pentru mai multe zile?",
  },
  {
    answer:
      "Da, este recomandat să rezervi din timp, mai ales în perioadele aglomerate.",
    question: "Este necesară rezervarea în avans?",
  },
];

export const seoPageConfigs: Record<SeoPageKey, SeoPageConfig> = {
  about: {
    breadcrumbName: "Despre noi",
    description:
      "Află cum vede DaCars parcarea pe termen lung: simplă, sigură și făcută cu respect pentru timpul și mașina ta.",
    image:
      "/images/human-team.png",
    keywords: [
      "despre noi parcare otopeni",
      "parcare termen lung otopeni",
      "parking otopeni despre dacars",
    ],
    language: "ro-RO",
    path: "/despre-noi",
    schemaName: "Despre noi",
    schemaType: "AboutPage",
    title: "Despre Noi – DaCars Parking Otopeni",
  },
  bucharestLongTermParking: {
    areaServed: "București și Otopeni",
    breadcrumbName: "Parcare pe Termen Lung București",
    description:
      "Parcare pe termen lung în București, aproape de Aeroportul Otopeni, cu acces rapid, locuri sigure și transfer inclus.",
    faqDescription:
      "Am răspuns la cele mai frecvente întrebări despre parcare pe termen lung aproape de București și transferul către aeroport.",
    faqItems: commonParkingFaqs,
    faqTitle: "Întrebări frecvente despre parcare pe termen lung în București",
    image:
      "/images/empty-park.png",
    keywords: [
      "parcare termen lung otopeni",
      "parcare pe termen lung bucurești",
      "parcare aproape de aeroport otopeni cu transfer",
    ],
    language: "ro-RO",
    path: "/parcare-termen-lung-bucuresti",
    schemaName: "Parcare pe Termen Lung București – Aproape de Aeroport",
    schemaType: "WebPage",
    serviceName: "Parcare pe termen lung București",
    serviceType: "Long-term parking service",
    title: "Parcare pe Termen Lung București – Aproape de Aeroport | DaCars",
  },
  cheapOtopeniParking: {
    areaServed: "Otopeni, București",
    breadcrumbName: "Parcare Ieftină Otopeni",
    description:
      "Parcare ieftină lângă Aeroportul Otopeni, cu servicii complete, transfer gratuit și siguranță 24/7.",
    faqDescription:
      "Aici găsești răspunsuri clare despre prețuri, transfer și siguranță pentru o parcare ieftină lângă aeroport.",
    faqItems: commonParkingFaqs,
    faqTitle: "Întrebări frecvente despre parcarea ieftină din Otopeni",
    image:
      "/images/parcare-otopeni-green.png",
    keywords: [
      "parcare ieftină aeroport bucurești",
      "parcare ieftină otopeni",
      "parcare aeroport otopeni preț 7 zile",
    ],
    language: "ro-RO",
    path: "/parcare-ieftina-otopeni",
    schemaName: "Parcare Ieftină Otopeni – Preț Mic, Servicii Complete",
    schemaType: "WebPage",
    serviceName: "Parcare ieftină Otopeni",
    serviceType: "Budget airport parking",
    title: "Parcare Ieftină Otopeni – Preț Mic, Servicii Complete | DaCars",
  },
  contact: {
    breadcrumbName: "Contact",
    description:
      "Date de contact pentru rezervări și informații despre parcarea DaCars de lângă Aeroportul Otopeni.",
    image: siteConfig.defaultOgImage,
    keywords: [
      "contact parcare otopeni",
      "telefon parcare aeroport otopeni",
      "adresă parcare otopeni",
    ],
    language: "ro-RO",
    path: "/contact",
    schemaName: "Contact",
    schemaType: "ContactPage",
    title: "Contact – DaCars Parking Otopeni",
  },
  faq: {
    breadcrumbName: "FAQ",
    description:
      "Întrebări frecvente despre rezervare, transfer, locație și siguranța parcării DaCars de lângă Aeroportul Otopeni.",
    faqDescription:
      "Răspunsuri clare despre rezervări, plată, transfer, localizare și siguranța mașinii tale în parcarea DaCars.",
    faqItems: faqPageSchemaItems,
    faqTitle: "Întrebări frecvente despre parcarea DaCars",
    image: siteConfig.defaultOgImage,
    keywords: [
      "faq parcare aeroport otopeni",
      "întrebări frecvente parcare otopeni",
      "parcare aproape de aeroport otopeni cu transfer",
    ],
    language: "ro-RO",
    path: "/faq",
    schemaName: "Întrebări Frecvente – DaCars Parking Otopeni",
    schemaType: "WebPage",
    title: "Întrebări Frecvente – DaCars Parking Otopeni",
  },
  home: {
    breadcrumbName: "Acasă",
    description:
      "Parcare aeroport Otopeni cu transfer gratuit, securitate 24/7 și rezervare rapidă. Soluție sigură pentru parcare pe termen lung aproape de aeroport.",
    image: siteConfig.defaultOgImage,
    keywords: [
      "parcare aeroport otopeni",
      "parcare termen lung otopeni",
      "parcare aproape de aeroport otopeni cu transfer",
      "parcare sigură aeroport bucurești recenzii",
    ],
    language: "ro-RO",
    path: "/",
    schemaName: "Parcare Aeroport Otopeni – Long Term Parking Sigur și Ieftin",
    schemaType: "WebPage",
    title:
      "Parcare Aeroport Otopeni – Long Term Parking Sigur și Ieftin | DaCars",
  },
  longTermParkingOtopeni: {
    areaServed: "Otopeni, București",
    breadcrumbName: "Long Term Parking Otopeni",
    description:
      "Long term parking lângă Aeroportul Otopeni pentru călătorii lungi, cu siguranță, transfer rapid și acces simplu la terminal.",
    faqDescription:
      "Răspunsuri utile despre long term parking la Otopeni, costuri, rezervare și siguranța mașinii cât timp ești plecat.",
    faqItems: commonParkingFaqs,
    faqTitle: "Întrebări frecvente despre long term parking la Otopeni",
    image:
      "/images/few-cars-park.png",
    keywords: [
      "long term parking bucharest airport",
      "parcare termen lung otopeni",
      "parcare sigură aeroport bucurești recenzii",
    ],
    language: "ro-RO",
    path: "/long-term-parking-otopeni",
    schemaName: "Long Term Parking Otopeni – Parcare pe Termen Lung",
    schemaType: "WebPage",
    serviceName: "Long term parking Otopeni",
    serviceType: "Long-term airport parking",
    title:
      "Long Term Parking Bucharest Airport – Parcare pe Termen Lung | DaCars",
  },
  otopeniAirportParking: {
    areaServed: "Otopeni, București",
    breadcrumbName: "Parcare Aeroport Otopeni",
    description:
      "Parcare lângă Aeroportul Otopeni cu supraveghere 24/7, acces rapid și transfer către terminal.",
    faqDescription:
      "Găsești aici răspunsuri despre rezervare, siguranță, distanța față de terminal și transferul inclus.",
    faqItems: commonParkingFaqs,
    faqTitle: "Întrebări frecvente despre parcarea de lângă Aeroportul Otopeni",
    image:
      "/images/parcare-otopeni-animated.png",
    keywords: [
      "parcare aeroport otopeni",
      "parcare aeroport otopeni preț 7 zile",
      "parcare aproape de aeroport otopeni cu transfer",
    ],
    language: "ro-RO",
    path: "/parcare-aeroport-otopeni",
    schemaName: "Parcare Aeroport Otopeni – Sigură, Rapidă și Accesibilă",
    schemaType: "WebPage",
    serviceName: "Parcare aeroport Otopeni",
    serviceType: "Airport parking",
    title: "Parcare Aeroport Otopeni – Sigură, Rapidă și Accesibilă | DaCars",
  },
};

export function buildPageMetadata(key: SeoPageKey): Metadata {
  const page = seoPageConfigs[key];

  return {
    alternates: {
      canonical: page.path,
    },
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      description: page.description,
      images: [
        {
          alt: page.title,
          height: 630,
          url: page.image,
          width: 1200,
        },
      ],
      locale: siteConfig.ogLocale,
      siteName: siteConfig.siteName,
      title: page.title,
      type: "website",
      url: page.path,
    },
    title: page.title,
    twitter: {
      card: "summary_large_image",
      description: page.description,
      images: [page.image],
      title: page.title,
    },
  };
}

export function buildParkingFacilitySchema() {
  const sameAs = [
    ...(siteConfig.socialFacebookUrl ? [siteConfig.socialFacebookUrl] : []),
    ...(siteConfig.googleMapsUrl ? [siteConfig.googleMapsUrl] : []),
    ...siteConfig.sameAs,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ParkingFacility",
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      streetAddress: siteConfig.address.streetAddress,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Supraveghere video 24/7",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Transfer către aeroport",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Acces controlat",
        value: true,
      },
    ],
    areaServed: [
      { "@type": "City", name: "Otopeni" },
      { "@type": "City", name: "București" },
    ],
    description: siteConfig.defaultDescription,
    email: siteConfig.email,
    ...(siteConfig.geo.latitude !== null && siteConfig.geo.longitude !== null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
        }
      : {}),
    image: siteConfig.defaultOgImage,
    logo: absoluteUrl("/favicon.ico"),
    name: siteConfig.businessName,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        closes: siteConfig.openingHours.closes,
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.openingHours.opens,
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
    telephone: siteConfig.phoneDisplay,
    url: siteConfig.siteUrl,
  };
}

export function buildOrganizationSchema() {
  const sameAs = [
    ...(siteConfig.socialFacebookUrl ? [siteConfig.socialFacebookUrl] : []),
    ...(siteConfig.googleMapsUrl ? [siteConfig.googleMapsUrl] : []),
    ...siteConfig.sameAs,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    description: siteConfig.defaultDescription,
    email: siteConfig.email,
    image: siteConfig.defaultOgImage,
    logo: absoluteUrl("/favicon.ico"),
    name: siteConfig.businessName,
    ...(sameAs.length ? { sameAs } : {}),
    telephone: siteConfig.phoneDisplay,
    url: siteConfig.siteUrl,
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: absoluteUrl(item.path),
      name: item.name,
      position: index + 1,
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
      name: item.question,
    })),
  };
}

export function buildPageSchema(key: SeoPageKey) {
  const page = seoPageConfigs[key];

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    description: page.description,
    inLanguage: page.language,
    name: page.schemaName ?? page.title,
    url: absoluteUrl(page.path),
  };

  if (page.serviceName && page.serviceType && page.areaServed) {
    schema.about = {
      "@type": "Service",
      areaServed: {
        "@type": "Place",
        name: page.areaServed,
      },
      name: page.serviceName,
      provider: {
        "@type": "ParkingFacility",
        name: siteConfig.businessName,
      },
      serviceType: page.serviceType,
    };
  }

  return schema;
}

export function getPageSchemas(key: SeoPageKey) {
  const page = seoPageConfigs[key];
  const schemas = [
    buildPageSchema(key),
    buildBreadcrumbSchema([
      { name: "Acasă", path: "/" },
      { name: page.breadcrumbName, path: page.path },
    ]),
  ];

  if (page.faqItems?.length) {
    schemas.push(buildFaqSchema(page.faqItems));
  }

  return schemas;
}
