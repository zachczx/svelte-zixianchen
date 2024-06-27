/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`);
	return { content: post.default, metadata: post.metadata };
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [{ slug: 'making-pagefind-work-sveltekit' }];
}

export const prerender = true;
