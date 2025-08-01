import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/landing-4" : "",
  assetPrefix: isProd ? "/landing-4/" : "",
  experimental: {
    turbo: {},
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
