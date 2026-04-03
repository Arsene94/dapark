const DEFAULT_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return DEFAULT_SITE_URL;
  }

  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

function normalizeOptionalUrl(value?: string) {
  if (!value) {
    return null;
  }

  return normalizeSiteUrl(value);
}

function parseStringList(value?: string) {
  return value
    ?.split(",")
    .map((entry) => entry.trim())
    .filter(Boolean) ?? [];
}

function parseNumber(value?: string) {
  if (!value) {
    return null;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : null;
}

export const siteConfig = {
  address: {
    country: "RO",
    locality: "Otopeni",
    postalCode: "075100",
    region: "Ilfov",
    streetAddress: "Șoseaua București-Ploiești 9",
  },
  businessName: "DaCars Parking Otopeni",
  defaultDescription:
    "Parcare pe termen lung lângă Aeroportul Otopeni, cu transfer rapid, supraveghere 24/7 și rezervare simplă.",
  defaultIcon:
    "/dapark-icon.png",
  defaultOgImage:
    "/images/park-night-shift.png",
  email: "office@dacars.ro",
  geo: {
    latitude: parseNumber(process.env.NEXT_PUBLIC_PARKING_LATITUDE),
    longitude: parseNumber(process.env.NEXT_PUBLIC_PARKING_LONGITUDE),
  },
  googleMapsUrl: normalizeOptionalUrl(process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL),
  ogLocale: "ro_RO",
  openingHours: {
    closes: "23:59",
    opens: "00:00",
  },
  phoneDisplay: "+40 723 817 551",
  phoneHref: "+40723817551",
  sameAs: parseStringList(process.env.NEXT_PUBLIC_SAME_AS),
  siteName: "DaCars",
  siteLogo:
    "/dacars-logo.svg",
  siteUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL,
  ),
  socialFacebookUrl: normalizeOptionalUrl(
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
  ),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
