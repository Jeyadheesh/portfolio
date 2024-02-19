/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["github.com", "fonts.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5173",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "ebuddy2004.netlify.com",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "api.github.com",
        port: "",
        pathname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
