import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Component } from 'svelte';

interface MdsvexModule {
	default: Component;
	metadata: BlogPostMetadata;
}

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const posts = import.meta.glob<MdsvexModule>('../posts/*.md', { eager: true });
	const postPath = `../posts/${slug}.md`;
	if (!(postPath in posts)) error(404, 'post not found!');

	const post = posts[postPath];

	return { content: post.default, metadata: post.metadata };
};

export const entries: EntryGenerator = () => {
	const posts = import.meta.glob('../posts/*.md', { eager: true });

	return Object.keys(posts)
		.map((path) => {
			const slug = path.split('/').pop()?.replace('.md', '');
			return slug ? { slug } : undefined;
		})
		.filter((item): item is { slug: string } => item !== undefined);
};
