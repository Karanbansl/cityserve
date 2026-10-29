/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // The Patiala CSV is read from disk at runtime (src/lib/dataset.ts).
  // Make sure Vercel bundles it with every server route.
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./data/**/*"],
      "/api/directory": ["./data/**/*"],
    },
  },
};

module.exports = nextConfig;
