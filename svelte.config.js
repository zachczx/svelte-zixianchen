import adapter from '@sveltejs/adapter-cloudflare';
//import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import {
	transformerNotationDiff,
	transformerNotationHighlight,
	transformerCompactLineOptions,
} from '@shikijs/transformers';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang) => {
			let html;
			if (lang === 'text') {
				html = escapeSvelte(
					await codeToHtml(code, {
						lang: 'text',
						theme: 'github-dark-default',
						transformers: [transformerNotationHighlight(), transformerNotationDiff(), transformerCompactLineOptions()],
					}),
				);
			} else {
				html = escapeSvelte(
					await codeToHtml(code, {
						lang: 'js',
						theme: 'github-dark-default',
						transformers: [transformerNotationHighlight(), transformerNotationDiff(), transformerCompactLineOptions()],
					}),
				);
			}
			return `{@html \`${html}\` }`;
		},
	},
};
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
		}),
		prerender: {
			entries: ['*', '/blog/using-brevo-pocketbase-send-emails'], //for previous entry
		},
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;
