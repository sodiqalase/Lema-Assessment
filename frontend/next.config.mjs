// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    pageExtensions: ["tsx", "jsx", "ts"], // allow files that don't export a component in the pages dir
    reactStrictMode: true,
};

export default nextConfig;
