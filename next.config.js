const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all hostnames over HTTPS
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG image support
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Add CSP for security
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig
