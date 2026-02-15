// See https://svelte.dev/docs/kit/types#app.d.ts

import type { AuthModel } from "pocketbase"

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase
			user: AuthModel | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
