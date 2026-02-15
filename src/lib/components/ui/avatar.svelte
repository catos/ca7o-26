<script lang="ts">
	type Props = {
		src?: string
		fallback: string
	}
	let { src, fallback }: Props = $props()
</script>

<span class="flex h-9 w-9 min-w-9 items-center justify-center rounded-full bg-primary">
	{#if src}
		<img class="rounded-full" {src} alt={fallback} />
	{:else}
		<span class="text-sm font-bold">{fallback}</span>
	{/if}
</span>
