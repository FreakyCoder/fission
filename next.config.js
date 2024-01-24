const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
	output: "export",
	reactStrictMode: true,
	images: {
		unoptimized: true,
		path: "https://fission.acs.bg/",
	},
	trailingSlash: true,
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			path: false,
		};
		return config;
	},
	assetPrefix:
		phase === PHASE_DEVELOPMENT_SERVER
			? undefined
			: "https://fission.acs.bg",
});
