/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["assets.genztechies.com"]
    },
    env: {
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "12345"
    }
};

module.exports = nextConfig;
