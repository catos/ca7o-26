import PocketBase from "pocketbase"

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase("https://pocketbase-rwgwo0g04sss80gwkw0wgkg4.ca7o.com/")
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "")

	try {
		if (
			event.locals.pb.authStore.isValid &&
			(await event.locals.pb.collection("users").authRefresh())
		) {
			event.locals.user = structuredClone(event.locals.pb.authStore.model)
			event.locals.user!.isSuperUser = event.locals.pb.authStore.isSuperUser
		}
	} catch {
		event.locals.pb.authStore.clear()
		event.locals.user = null
	}

	const response = await resolve(event)

	// TODO: secure before deploying -> { secure: false }
	response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }))

	return response
}
