/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api-gateway:8080/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
