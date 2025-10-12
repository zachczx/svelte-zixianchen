import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import svg from '@poppanator/sveltekit-svg';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		svg({
			includePaths: ['./static/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
					},
				],
			},
		}),
		visualizer({
			emitFile: true,
			filename: 'stats.html',
		}),
	],
});
