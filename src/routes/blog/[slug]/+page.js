/** @type {import('./$types').PageLoad} */

/**
 *
 * @param {*} param0
 * @property {Object} post - imported md file
 * @returns {JSON} - post.default is .md content (needs to be accessed by <svelte:component this={data.content} />), post.metadata is .md frontmatter
 */
export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`);
	return { content: post.default, metadata: post.metadata };
}
