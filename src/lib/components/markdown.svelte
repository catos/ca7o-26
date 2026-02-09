<script lang="ts">
	import { marked, type RendererObject } from 'marked';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		data: string;
	} & HTMLAttributes<HTMLDivElement>;

	let { data, ...rest }: Props = $props();

	// https://marked.js.org/using_pro#renderer
	const renderer: RendererObject = {
		heading({ tokens, depth }): string {
			const text = this.parser.parseInline(tokens);
			const level = depth + 1;

			return `
        <h${level}>
          ${text}
        </h${level}>`;
		},

		// // TODO: make this work with state
		// list(token): string {
		// 	console.log(token, token.items);
		// 	// return "...";
		// 	// return `<ul>${this.parser.parseInline(token.items)}\n</ul>`;
		//   return <List items={token.items} />
		// }

		listitem(item): string {
			return `<li>${this.parser.parseInline(item.tokens)}</li>`;
		}
	};

	marked.use({
		gfm: true,
		renderer
	});
</script>

<div {...rest}>{@html marked(data)}</div>
