import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "cs.upcebu.edu.ph",
      },
      {
        protocol: "https",
        hostname: "windsgate.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
