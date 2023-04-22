/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.istockphoto.com",
      "thumbs.dreamstime.com",
      "cdn.fstoppers.com",
      "*.com",
      "cdn.shopify.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fbom3-1.fna.fbcdn.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
