import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const posts = import.meta.glob('../posts/*.md', { eager: true });
	const postPath = `../posts/${slug}.md`;
	if (!(postPath in posts)) error(404, 'post not found!');

	const post = posts[postPath];

	return { content: post.default, metadata: post.metadata };
};
