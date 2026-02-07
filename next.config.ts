import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*",
      },
    ];
  },

  images: {
    domains: [
      "images.unsplash.com",
      "fe-pub.s3.ap-southeast-1.amazonaws.com",
      "i.pravatar.cc",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
