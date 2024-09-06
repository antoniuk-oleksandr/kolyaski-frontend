/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['tsx'],
  images: {
    domains: ['images.prom.ua'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
