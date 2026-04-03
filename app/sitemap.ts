import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site-config";

const staticRoutes = [
  { changeFrequency: "weekly" as const, path: "/", priority: 1 },
  { changeFrequency: "monthly" as const, path: "/despre-noi", priority: 0.7 },
  { changeFrequency: "monthly" as const, path: "/faq", priority: 0.75 },
  { changeFrequency: "monthly" as const, path: "/contact", priority: 0.7 },
  {
    changeFrequency: "weekly" as const,
    path: "/parcare-aeroport-otopeni",
    priority: 0.95,
  },
  {
    changeFrequency: "weekly" as const,
    path: "/long-term-parking-otopeni",
    priority: 0.9,
  },
  {
    changeFrequency: "weekly" as const,
    path: "/parcare-ieftina-otopeni",
    priority: 0.9,
  },
  {
    changeFrequency: "weekly" as const,
    path: "/parcare-termen-lung-bucuresti",
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    changeFrequency: route.changeFrequency,
    lastModified,
    priority: route.priority,
    url: absoluteUrl(route.path),
  }));
}
