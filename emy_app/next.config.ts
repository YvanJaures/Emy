import type { NextConfig } from "next";
import path from 'path'
module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
}
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
