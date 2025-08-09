/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Static file serving configuration
  trailingSlash: false,
  
  // Asset prefix for static files
  assetPrefix: '',
  
  // Configure static file handling
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*',
      },
    ];
  },
  
  // Ensure proper static file serving
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
