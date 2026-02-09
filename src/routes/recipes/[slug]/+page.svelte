<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	console.log('slug', data);
</script>

<h1>{data.slug}</h1>
