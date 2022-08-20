/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:"",
  },
  // basePath:"/restoApp",
  // assetPrefix:"/restoApp",
}

module.exports = nextConfig
