<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';

	import '$lib/styles/layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { env } from '$env/dynamic/public';
	import { setupConvex } from 'convex-svelte';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
	setupConvex(env.PUBLIC_CONVEX_URL!);

	const user = null; // TODO: get user from auth
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header {user} />
<main class="p-4">
    {@render children()}
</main>
