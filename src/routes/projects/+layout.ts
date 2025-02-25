import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params, url }) => {
	const pathName = url.pathname.split('/');
	const slug = pathName[pathName.length - 1];

	return { slug };
};
