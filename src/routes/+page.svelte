<script lang="ts">
	import { useQuery } from 'convex-svelte';
	import type { PageData } from './$types';
	import { api } from '../convex/_generated/api';
	let { recipes }: PageData = $props();

	const query = useQuery(api.recipes.get, {}, () => ({ initialData: recipes }));
</script>

{#if query.isLoading}
	Loading...
{:else if query.error}
	failed to load: {query.error.toString()}
{:else}
	<section
		class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
	>
		{#each query.data as recipe}
			<a
				href={`/recipes/${recipe.slug}`}
				class="group hover:outline-primary-700 relative flex max-h-64 w-full flex-col overflow-hidden rounded no-underline shadow-lg hover:outline-2"
			>
				<img
					class="h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
					src={recipe.image}
					alt={recipe.title}
				/>
				<h2
					class="text-background from-foreground/10 to-foreground/60 absolute right-0 bottom-0 left-0 mb-0 flex flex-1 items-center justify-center overflow-hidden bg-linear-to-b px-4 py-4 text-center text-xl backdrop-blur-xs transition-opacity duration-500 ease-in-out group-hover:opacity-0"
				>
					{recipe.title}
				</h2>
			</a>
		{/each}
	</section>
{/if}
