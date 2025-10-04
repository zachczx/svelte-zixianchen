import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import {
	transformerNotationDiff,
	transformerNotationHighlight,
	transformerCompactLineOptions,
} from '@shikijs/transformers';

const mdsvexOptions = {
	extensions: ['.md'],
	smartypants: true,
	highlight: {
		highlighter: async (code, lang) => {
			let html;
			if (lang === 'text') {
				html = escapeSvelte(
					await codeToHtml(code, {
						lang: 'text',
						theme: 'github-dark-default',
						transformers: [
							transformerNotationHighlight({ matchAlgorithm: 'v3' }),
							transformerNotationDiff({ matchAlgorithm: 'v3' }),
							transformerCompactLineOptions(),
						],
					}),
				);
			} else {
				html = escapeSvelte(
					await codeToHtml(code, {
						lang: 'js',
						theme: 'github-dark-default',
						transformers: [
							transformerNotationHighlight({ matchAlgorithm: 'v3' }),
							transformerNotationDiff({ matchAlgorithm: 'v3' }),
							transformerCompactLineOptions(),
						],
					}),
				);
			}
			return `{@html \`${html}\` }`;
		},
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	adapter: adapter({ pages: 'build' }),
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;
