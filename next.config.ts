/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    // This allows production builds to successfully complete 
    // even if your project has TypeScript type errors.
    ignoreBuildErrors: true,
  },
}

export default nextConfig