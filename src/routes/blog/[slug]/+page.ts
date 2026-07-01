import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Component } from 'svelte';

interface MdsvexModule {
	default: Component;
	metadata: BlogPostMetadata;
}

function extractHeadings(content: string): { text: string; slug: string; level: number }[] {
	const cleanContent = content.replace(/^---[\s\S]*?---/, '');
	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	const headings: { text: string; slug: string; level: number }[] = [];
	let match;
	while ((match = headingRegex.exec(cleanContent)) !== null) {
		const level = match[1].length;
		const text = match[2].replace(/[`*_~[\]]/g, '').trim();
		const slug = text
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-');
		headings.push({ text, slug, level });
	}
	return headings;
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
	if (!post.metadata.published) error(404, 'post not found!');

	const rawContent = postsRaw[postPath];
	const readingTime = calculateReadingTime(rawContent);
	const headings = extractHeadings(rawContent);

	return { content: post.default, metadata: post.metadata, readingTime, headings };
};

export const entries: EntryGenerator = () => {
	const posts = import.meta.glob<MdsvexModule>('../posts/*.md', { eager: true });

	return Object.keys(posts)
		.filter((path) => posts[path].metadata.published)
		.map((path) => {
			const slug = path.split('/').pop()?.replace('.md', '');
			return slug ? { slug } : undefined;
		})
		.filter((item): item is { slug: string } => item !== undefined);
};
