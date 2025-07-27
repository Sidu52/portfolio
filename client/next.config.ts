import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
   target: 'serverless',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
