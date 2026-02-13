<script lang="ts">
	import Logo from "./logo.svelte";
	// import LogoutButton from "$lib/components/logoutButton.svelte";
	import { twMerge } from "tailwind-merge";
	import ThemeToggle from "./theme-toggle.svelte";

	let { user } = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60"
>
	<nav class="m-auto flex max-w-6xl items-center gap-4 px-6 py-4 text-sm font-semibold">
		<a href="/" class="px-4">
			<Logo class="w-8 min-w-8" />
		</a>

		<div class="w-full">
			<!-- <SearchInput /> -->
			<input
				type="text"
				placeholder="Search..."
				class="w-full rounded border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
			/>
		</div>

		<ThemeToggle />
		{#if user}
			<button id="profile-popover-trigger" popovertarget="profile-popover">
				<!-- <Avatar src={avatarUrl} fallback={initials} /> -->
			</button>
			<div
				id="profile-popover"
				popover
				class={twMerge("rounded border border-border bg-white p-6 shadow-lg", "w-full sm:w-sm")}
			>
				<div class="flex flex-col gap-4">
					<a href="/wesketch">Wesketch</a>
					<a href="/notes">Notes</a>
					<a href="/profile">Profile</a>
					<a href="/ui">UI</a>
					<a href="/recipes/create">Create recipe</a>
					<a href="/recipes/export">Recipes export</a>
					<a href="/notes/export">Notes export (TODO)</a>
					<!-- <LogoutButton {supabase}>Logout</LogoutButton> -->
				</div>
			</div>
		{:else}
			{@render link("/auth/login", "Login")}
		{/if}
	</nav>
</header>

{#snippet link(href: string, text: string)}
	<a class="p-2 text-sm leading-6 font-semibold no-underline hover:text-primary" {href}>
		{text}
	</a>
{/snippet}

<style>
	#profile-popover-trigger {
		anchor-name: --menu-button;
	}

	#profile-popover {
		inset: auto;
		position: absolute;
		position-anchor: --menu-button;
		top: anchor(bottom);

		opacity: 0;

		transition:
			display 0.2s,
			opacity 0.2s;
		transition-behavior: allow-discrete;
	}

	#profile-popover:popover-open {
		opacity: 1;

		@starting-style {
			opacity: 0;
		}
	}

	@media (width >= 48rem) {
		#profile-popover {
			right: anchor(right);
		}
	}
</style>
