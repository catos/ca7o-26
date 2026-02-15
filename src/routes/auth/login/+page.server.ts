import { error, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = (async ({ locals }) => {
	return {
		user: locals.user
	}
}) satisfies PageServerLoad

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData()
		console.log(formData)
		const username = formData.get("username") as string
		const password = formData.get("password") as string

		try {
			await locals.pb.collection("users").authWithPassword(username, password)
			if (!locals.pb.authStore.model.verified) {
				locals.pb.authStore.clear()
				return {
					notVerified: true
				}
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			error(500, err.message)
		}

		redirect(303, "/")
	},
	logout: async ({ locals }) => {
		locals.pb.authStore.clear()
		redirect(303, "/")
	}
}
