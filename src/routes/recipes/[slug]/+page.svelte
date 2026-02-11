<script lang="ts">
	import Markdown from '$lib/components/markdown.svelte';
	import { HeartIcon, PrinterIcon, StarIcon } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { recipe } = $derived(data);
	$inspect(recipe);
</script>

{#if recipe}
	<div class="flex flex-col gap-4 md:gap-6">
		<section class="relative">
			<a
				class="bg-background absolute top-2 right-2 rounded-full p-2 font-bold no-underline opacity-60"
				href={`/recipes/${recipe.slug}/edit`}
			>
				<!-- <CookingPot /> -->
			</a>

			<img class="max-h-64 w-full object-cover sm:max-h-96" src={recipe.image} alt={recipe.title} />
		</section>

		<section class="flex flex-col">
			<h1 class="m-0 px-4 text-center font-semibold">{recipe.title}</h1>
		</section>

		{#if recipe.description}
			<section>
				<Markdown data={recipe.description} />
			</section>
		{/if}

		<section class="flex justify-center gap-4">
			<span><StarIcon /></span>
			<span><HeartIcon /></span>
			<span><PrinterIcon /></span>
		</section>

		<div class="flex flex-col gap-4 sm:flex-row">
			<section class="min-h-64 rounded-md sm:w-1/2 md:w-5/12">
				<h2 class="text-muted text-base uppercase">Ingrendienser</h2>
				<Markdown class="list-disc" data={recipe.ingredients} />
			</section>

			<section class="min-h-64 rounded-md sm:w-1/2 md:w-7/12">
				<h2 class="text-muted text-base uppercase">Fremgangsmåte</h2>
				<Markdown data={recipe.instructions} />
			</section>
		</div>
	</div>
{/if}
