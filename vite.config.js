import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import svg from '@poppanator/sveltekit-svg';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		visualizer({
			emitFile: true,
			filename: 'stats.html',
		}),
	],
});
