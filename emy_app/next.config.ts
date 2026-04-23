import type { NextConfig } from "next";
import path from 'path'
module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
}
const withPWAInit= require ("next-pwa")

const withPWA=withPWAInit({
  dest:"public",
  register:true,
  disable:process.env.NODE_ENV==="development",

  fallbacks:{
    document:"/offline",
  },
  runtimeCaching:[
    {
      urlPattern:/^https?.*/,
      handler:"NetworkFirst",
      options:{
        cacheName:"https-cache",
        expiration:{
          maxEntries:200,
        },
      },
    },
  ]
});

const nextConfig: NextConfig = {
  reactStrictMode:true,
  /* config options here */
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }];
  },
};

export default nextConfig;
