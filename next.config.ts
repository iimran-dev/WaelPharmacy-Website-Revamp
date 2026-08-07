/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/waelpharmacy',
  devIndicators: false,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
};


export default nextConfig;