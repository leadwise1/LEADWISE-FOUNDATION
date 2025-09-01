import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows the build to succeed even if there are ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;