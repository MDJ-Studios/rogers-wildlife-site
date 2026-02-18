/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.paypalobjects.com",
      },
      {
        hostname: "us-east-1-shared-usea1-02.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
