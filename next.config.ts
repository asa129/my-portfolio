import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["qiita-user-contents.imgix.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qiita-user-contents.imgix.net",
      },
    ],
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
