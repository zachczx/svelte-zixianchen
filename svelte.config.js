//import adapter from '@sveltejs/adapter-cloudflare';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['catppuccin-mocha'],
				langs: ['svelte'],
			});
			await highlighter.loadLanguage('svelte');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'catppuccin-mocha' }));
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
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;
