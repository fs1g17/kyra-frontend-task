/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      // Fallback rewrites - only apply if no local routes match
      fallback: [
        {
          source: "/api/:path*",
          destination: `http://localhost:3000/api/:path*`,
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kyra-images.kyra.com",
      },
    ],
  },
};

export default nextConfig;
