import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps the flagship screenshots crisp on the device mockups
    qualities: [75, 90],
  },
};

export default nextConfig;
