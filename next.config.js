/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER, phase } = require('next/constants')
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const isprod = phase === PHASE_DEVELOPMENT_SERVER;

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
  eslint: {
    dirs: ["pages", "components", "utils", "types"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    BASE_URL: isprod
      ? process.env.PROD_URL
      : process.env.DEV_URL,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  },
});


