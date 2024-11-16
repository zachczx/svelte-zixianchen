/** @type {import('./$types').PageLoad} */

import { redirect } from '@sveltejs/kit';

/**
 *
 * @param {*} param0
 * @property {Object} post - imported md file
 * @returns {JSON} - post.default is .md content (needs to be accessed by <svelte:component this={data.content} />), post.metadata is .md frontmatter
 */
export async function load({ params }) {
	if (params.slug === 'using-brevo-pocketbase-send-emails') {
		return redirect(301, '/blog/using-resend-com-smtp-saas-provider-pocketbase-emails');
	}

	const post = await import(`../posts/${params.slug}.md`);

	return { content: post.default, metadata: post.metadata };
}
