import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // @ts-ignore - allowedDevOrigins is supported at runtime by Next.js
  allowedDevOrigins: ["nonsubliminal-organological-coy.ngrok-free.dev"],
};

export default nextConfig;
