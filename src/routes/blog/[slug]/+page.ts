import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;
	const post = await import(`../posts/${slug}.md`);

	return { content: post.default, metadata: post.metadata };
};
