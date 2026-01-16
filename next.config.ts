import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sdn03kapuk",
  assetPrefix: "/sdn03kapuk",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
