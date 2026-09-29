import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com",
      },
    ],
  },
  allowedDevOrigins: ["192.168.0.21"],
};

export default nextConfig;