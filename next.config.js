/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	// Add basePath
	basePath: "/faculty-project",
	// Optional: Add a trailing slash to all paths `/about` -> `/about/`
	// trailingSlash: true,
	// Optional: Change the output directory `out` -> `dist`
	// distDir: 'dist',
}

module.exports = nextConfig
