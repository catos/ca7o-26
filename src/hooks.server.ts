import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/lol')) {
		return new Response('Hello from the /lol endpoint!');
	}

	const response = await resolve(event);
	return response;
};
