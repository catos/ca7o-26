import { useQuery } from 'convex-svelte';
import type { PageLoad } from './$types';
import { api } from '../../../convex/_generated/api';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	console.log('slug', slug);

	// const query = useQuery(api.recipes.getById, { id: slug });

	return {
		slug
	};
};
