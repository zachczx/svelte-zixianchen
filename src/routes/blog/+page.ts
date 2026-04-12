import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	let posts: BlogPostMetadata[] = [];
	const paths = import.meta.glob('./posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		if (file && typeof file === 'object' && 'metadata' in file) {
			const postMetadata = file.metadata as BlogPostMetadata;
			posts.push(postMetadata);
		}
	}

	posts = posts
		.filter((post) => post.published)
		.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
	return { posts };
};
