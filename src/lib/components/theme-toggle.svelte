<script lang="ts">
	import { Moon, Sun } from "lucide-svelte";
	import { onMount } from "svelte";

	type Theme = "light" | "dark";
	let theme: Theme = "light";

	// Check localStorage and system preference
	onMount(() => {
		let initial: Theme = "light";

		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			initial = "dark";
		}

		const stored = localStorage.getItem("theme");
		if (stored !== null) {
			initial = stored as Theme;
		}

		theme = initial;
		document.documentElement.setAttribute("data-theme", initial);
	});

	function toggleTheme() {
		const next = theme === "light" ? "dark" : "light";
		theme = next;
		localStorage.setItem("theme", next);
		document.documentElement.setAttribute("data-theme", next);
	}
</script>

<button on:click={toggleTheme} class="btn-icon" aria-label="Toggle theme">
	{#if theme === "dark"}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>
