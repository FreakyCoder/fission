const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

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
	assetPrefix: PHASE_DEVELOPMENT_SERVER ? undefined : "./",
};

module.exports = nextConfig;
