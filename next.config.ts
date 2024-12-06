import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "festive-armadillo-309.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "beloved-jaguar-308.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
