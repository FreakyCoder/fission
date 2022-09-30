/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
		path: "https://fission.acs.bg/",
	},
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			path: false,
		};
		return config;
	},
	assetPrefix: "./",
};

module.exports = nextConfig;
