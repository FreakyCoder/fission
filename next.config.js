/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["fission.acs.bg"],
	},
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			path: false,
		};
		return config;
	},
};

module.exports = nextConfig;
