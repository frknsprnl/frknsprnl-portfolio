/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fast Refresh optimizations for Windows
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Aggressive polling for file changes (Windows file system)
      config.watchOptions = {
        poll: 800, // Check for changes every 800ms
        aggregateTimeout: 200, // Shorter delay before rebuilding
        ignored: ['**/node_modules/**', '**/.git/**'],
      }
      
      // Enable HMR
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          moduleIds: 'named',
        }
      }
    }
    return config
  },
}

module.exports = nextConfig

