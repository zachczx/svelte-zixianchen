import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Component } from 'svelte';

interface MdsvexModule {
	default: Component;
	metadata: BlogPostMetadata;
}

function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	// Remove frontmatter
	const cleanContent = content.replace(/^---[\s\S]*?---/, '');
	// Basic word count splitting by whitespace
	const words = cleanContent.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const posts = import.meta.glob<MdsvexModule>('../posts/*.md', { eager: true });
	const postsRaw = import.meta.glob<string>('../posts/*.md', {
		eager: true,
		query: '?raw',
		import: 'default',
	});

	const postPath = `../posts/${slug}.md`;
	if (!(postPath in posts)) error(404, 'post not found!');

	const post = posts[postPath];
	const rawContent = postsRaw[postPath];
	const readingTime = calculateReadingTime(rawContent);

	return { content: post.default, metadata: post.metadata, readingTime };
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
