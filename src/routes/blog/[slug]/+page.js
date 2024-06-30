/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`);
	return { content: post.default, metadata: post.metadata };
}

export const prerender = true;
