/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'i.ytimg.com',
      'avatars.githubusercontent.com',
      'redlinks.space',
    ],
  },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
};

module.exports = nextConfig;
