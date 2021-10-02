/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  eslint: {
    dirs: ["pages", "components", "utils", "types"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    BASE_URL:
      process.env.NODE_ENV === "development"
        ? process.env.DEV_URL
        : process.env.PROD_URL,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  },
});


