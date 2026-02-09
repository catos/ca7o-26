<script lang="ts">
	import Logo from './logo.svelte';
	// import LogoutButton from "$lib/components/logoutButton.svelte";
	import { twMerge } from 'tailwind-merge';

	let { user } = $props();
</script>

<header
	class="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm"
>
	<nav class="m-auto flex max-w-6xl items-center gap-4 px-6 py-2 text-sm font-semibold">
		<a href="/" class="px-4">
			<Logo class="w-8 min-w-8" />
		</a>

		<div class="w-full">
			<!-- <SearchInput /> -->
			<input
				type="text"
				placeholder="Search..."
				class="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			/>
		</div>

		<div class="flex items-center justify-end gap-2 md:gap-4">
			{#if user}
				<button id="profile-popover-trigger" popovertarget="profile-popover">
					<!-- <Avatar src={avatarUrl} fallback={initials} /> -->
				</button>
				<div
					id="profile-popover"
					popover
					class={twMerge('border-border rounded border bg-white p-6 shadow-lg', 'w-full sm:w-sm')}
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
				{@render link('/auth/login', 'Login')}
			{/if}
		</div>
	</nav>
</header>

{#snippet link(href: string, text: string)}
	<a class="hover:text-primary px-2 py-4 text-sm leading-6 font-semibold no-underline" {href}>
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
