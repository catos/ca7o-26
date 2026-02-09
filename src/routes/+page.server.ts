import type { PageServerLoad } from './$types';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { api } from '../convex/_generated/api';
import { ConvexHttpClient } from 'convex/browser';

export const load: PageServerLoad = async () => {
	const client = new ConvexHttpClient(PUBLIC_CONVEX_URL);

	return {
		recipes: await client.query(api.recipes.get)
	};
};
