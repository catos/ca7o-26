<script lang="ts">
	import "@fontsource/inter/400.css"
	import "@fontsource/inter/600.css"
	import "@fontsource/inter/700.css"

	import "$lib/styles/layout.css"
	import favicon from "$lib/assets/favicon.svg"
	import { env } from "$env/dynamic/public"
	import Header from "$lib/components/header.svelte"
	import type { LayoutProps } from "./$types"

	const { data, children }: LayoutProps = $props()
	const { user } = $derived(data)
	$inspect(user)
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header {user} />
<main class="p-4">
	{@render children()}
</main>
