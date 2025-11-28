/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', 
  // images: {
  //   loader: 'custom',
  //   loaderFile: './imageLoader.js',
  // },
  reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;