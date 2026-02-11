import type { PageServerLoad } from './$types';
import { api } from '../../../convex/_generated/api';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { ConvexHttpClient } from 'convex/browser';

export const load: PageServerLoad = async ({ params }) => {
	const client = new ConvexHttpClient(PUBLIC_CONVEX_URL);
	console.log('### load recipe with slug', params.slug);

	// return await client.query(api.recipes.getBySlug, { slug: params.slug });
	const recipe = await client.query(api.recipes.getBySlug, { slug: params.slug });
	console.log('### recipe', recipe);
	return { recipe };
};
