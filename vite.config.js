import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/DynieM.github.io/",
	plugins: [react()],
	build: {
		// Specify asset handling options
		assetsInlineLimit: 4096, // This option controls whether assets should be inlined as base64 strings or emitted as separate files based on their size.

		// Example configuration for handling images
		rollupOptions: {
			output: {
				assetFileNames: "assets/[name].[ext]", // Output directory for assets
			},
		},
	},
});
