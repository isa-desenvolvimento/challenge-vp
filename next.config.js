/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  reactStrictMode: true,
  env: {
    URI: 'http://localhost:3000/api/graphql',
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
