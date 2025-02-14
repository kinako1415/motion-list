import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["japanhouse.illinois.edu"], // 外部画像のホストを許可
  },
};

module.exports = nextConfig;

export default nextConfig;
