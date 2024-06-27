export async function load({ params }) {
	let posts = [];
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		console.log(slug);
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			const post = { ...metadata, slug };
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
	return { posts };
}
