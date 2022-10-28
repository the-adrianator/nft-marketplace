/** @type {import('next').NextConfig} */
const dedicatedEndPoint = 'https://nft-bucket.infura-ipfs.io';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [dedicatedEndPoint, 'nft-bucket.infura-ipfs.io'],
  },
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
};

module.exports = nextConfig;
