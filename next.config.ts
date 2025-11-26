import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**/*",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Configure webpack to handle Prisma in Edge Runtime
    // Note: This warning is safe to ignore when using JWT strategy
    // as PrismaAdapter is only used in OAuth callbacks (Node.js runtime), not in middleware
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
