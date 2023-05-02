/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // Match any image URL from yelpcdn.com
        protocol: "https",
        hostname: "**.yelpcdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
