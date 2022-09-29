/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["assets.genztechies.com"]
    },
    reactStrictMode: true,
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL || "http://localhost:4000"
    }
};

module.exports = nextConfig;
