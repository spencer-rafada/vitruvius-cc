/** @type {import('next').NextConfig} */
let nextConfig

if (process.env.NODE_ENV === 'production') {
  nextConfig = {
    // configuration for production
    images: {
      unoptimized: false,
    },
  }
} else {
  nextConfig = {
    // configuration for development
    output: 'export',
    images: {
      unoptimized: false,
    },
  }
}

module.exports = nextConfig
