import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'], // ← this is the fix
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.storyblok.com",
      },
      
    ],
  }
};

export default nextConfig;
