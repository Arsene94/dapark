import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  compiler: {
    removeConsole: isProduction
      ? {
          exclude: ["error"],
        }
      : false,
    reactRemoveProperties: isProduction
      ? {
          properties: ["^data-testid$"],
        }
      : false,
  },
  experimental: {
    inlineCss: true,
  },
  images: {
    dangerouslyAllowLocalIP: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920],
    formats: ["image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
    maximumRedirects: 0,
    minimumCacheTTL: 604800,
    qualities: [60, 75, 85],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
