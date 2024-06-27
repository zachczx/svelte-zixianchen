export async function load({ params }) {
	const post = await import(`/src/posts/${params.slug}.md`);
	return { content: post.default, metadata: post.metadata };
}
