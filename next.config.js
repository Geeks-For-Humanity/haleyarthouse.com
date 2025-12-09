/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  output: 'export',
  basePath: '/haleyarthouse.com',
  assetPrefix: '/haleyarthouse.com/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
});
