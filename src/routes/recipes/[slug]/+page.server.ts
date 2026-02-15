import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params, locals }) => {
	const recipe = await locals.pb.collection("recipes").getFirstListItem(`slug="${params.slug}"`)

	return {
		recipe
	}
}
