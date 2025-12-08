import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows the build to succeed even if there are ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
  output: "export",
  images: {
    unoptimized: true, // <--- THIS IS THE FIX
  },
};

export default nextConfig;
