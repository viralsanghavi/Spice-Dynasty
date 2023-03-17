/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
