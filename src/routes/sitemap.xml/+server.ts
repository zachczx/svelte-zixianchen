// /src/routes/sitemap.xml/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';

export const prerender = true; // optional

interface PostArray {
	[index: string]: {
		metadata: {
			title: string;
			description?: string;
			date: Date;
			date_updated?: Date;
			tags: string;
			published: boolean;
			slug: string;
		};
		default: string[];
	};
}

export const GET: RequestHandler = async () => {
	// Get data for parameterized routes however you need to; this is only an example.
	let blogSlugs: string[] = [];
	let blogTags: string[] = [];
	try {
		const posts: PostArray = import.meta.glob('../blog/posts/*.md', { eager: true });
		const keys: string[] = Object.keys(posts);
		for (let i = 0; i < Object.keys(posts).length; i++) {
			console.log(posts[keys[i]].metadata.tags);
			blogSlugs.push(posts[keys[i] as keyof typeof posts].metadata.slug);
			blogTags.push(posts[keys[i] as keyof typeof posts].metadata.tags);

			console.log(blogTags);
		}
	} catch (err) {
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
		additionalPaths: ['/#about', '/#career', '/#projects'],
	});
};
