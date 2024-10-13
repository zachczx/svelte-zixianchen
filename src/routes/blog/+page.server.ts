import type { PageServerLoad } from './$types';

export async function load() {
	let posts: string[] = [];
	const paths = import.meta.glob('./posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		// Hide specific posts
		if (slug === 'using-brevo-pocketbase-send-emails') {
			continue;
		}

		console.log(slug);
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<string, 'slug'>;
			const post = { ...metadata, slug };
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
	return { posts };
}
