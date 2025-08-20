import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	let posts: BlogPostMetadata[] = [];
	const paths = import.meta.glob('./posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const postMetadata = file.metadata as BlogPostMetadata;
			posts.push(postMetadata);
		}
	}

	posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
	return { posts };
};
