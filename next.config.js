/** @type {import('next').NextConfig} */
let nextConfig

if (process.env.NODE_ENV === 'production') {
  nextConfig = {
    // configuration for production
    images: {
      unoptimized: true,
    },
  }
} else {
  nextConfig = {
    // configuration for development
    output: 'export',
    images: {
      unoptimized: true,
    },
  }
}

module.exports = nextConfig
