/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        port: '', // Leave empty for default ports (80 for HTTP, 443 for HTTPS)
        pathname: '/images/media/drink/**', // Allows any path on the hostname
      },
    ],
  },
};

export default nextConfig;
