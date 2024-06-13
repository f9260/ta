/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});


const nextConfig = {
  basePath: '/guide'
  images: {
    unoptimized: true,
  },

};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
