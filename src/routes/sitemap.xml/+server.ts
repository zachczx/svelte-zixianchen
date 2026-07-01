// /src/routes/sitemap.xml/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';

export const prerender = true; // optional

interface PostModule {
	metadata: BlogPostMetadata;
	default: string[];
}

export const GET: RequestHandler = async () => {
	const blogSlugs: string[] = [];
	try {
		const posts: Record<string, PostModule> = import.meta.glob('../blog/posts/*.md', { eager: true });
		for (const path in posts) {
			if (posts[path].metadata.published && posts[path].metadata.listed !== false) {
				blogSlugs.push(posts[path].metadata.slug);
			}
		}
	} catch {
		throw error(500, 'Could not load data for param values.');
	}

	return await sitemap.response({
		origin: 'https://zixianchen.com',
		excludeRoutePatterns: [
			'^/dashboard.*', // i.e. routes starting with `/dashboard`
			'.*\\[page=integer\\].*', // i.e. routes containing `[page=integer]`–e.g. `/blog/2`
			'.*\\(authenticated\\).*', // i.e. routes within a group
		],
		paramValues: {
			'/blog/[slug]': blogSlugs, // e.g. ['hello-world', 'another-post']
		},
	});
};
