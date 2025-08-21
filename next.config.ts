import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["uc.edu.ph"], // ✅ allow this external host
  },
};

export default nextConfig;
