<script lang="ts">
	import { XIcon } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-8">
	<h1>UI Components</h1>
	<section class="rounded border p-8">
		<h1>The Typography Chronicles</h1>
		<p>
			Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
			his throne. One day, his advisors came to him with a problem: the kingdom was running out of
			money.
		</p>
		<h2>The King&apos;s Plan</h2>
		<p>
			The king thought long and hard, and finally came up with{' '}
			<a href="/ui#">a brilliant plan</a>
			: he would tax the jokes in the kingdom.
		</p>
		<blockquote>
			&quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that
			they should pay for the privilege.&quot;
		</blockquote>
		<h3>The Joke Tax</h3>
		<p>
			The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:
		</p>

		<p>
			As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was
			one person who refused to let the king&apos;s foolishness get him down: a court jester named
			Jokester.
		</p>
		<h3 class="text-muted">Muted text</h3>
		<p class="text-muted">
			Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
			the place: under the king&apos;s pillow, in his soup, even in the royal toilet. The king was
			furious, but he couldn&apos;t seem to stop Jokester.
		</p>
		<p>
			And then, one day, the people of the kingdom discovered that the jokes left by Jokester were
			so funny that they couldn&apos;t help but laugh. And once they started laughing, they
			couldn&apos;t stop.
		</p>
		<h3>The People&apos;s Rebellion</h3>
		<p>
			The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns
			again, and soon the entire kingdom was in on the joke.
		</p>

		<p>
			The king, seeing how much happier his subjects were, realized the error of his ways and
			repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.
		</p>
		<p class="leading-7 not-first:mt-6">
			The moral of the story is: never underestimate the power of a good laugh and always be careful
			of bad ideas.
		</p>
	</section>

	<section class="flex flex-col gap-4 rounded border p-8">
		<h2 class="mt-0">Buttons</h2>
		<div class="flex flex-wrap gap-4">
			<button class="btn-filled">Filled</button>
			<button class="btn-outlined">Outlined</button>
			<button class="btn-icon">
				<XIcon />
			</button>
			<button class="btn-link">Link</button>
			<button class="btn-destructive">Destructive</button>
		</div>
	</section>

	<section class="flex flex-col gap-4 rounded border p-8">
		<h2 class="mt-0">Forms</h2>
		<div>
			<label for="title">Title</label>
			<input id="title" name="title" type="text" required placeholder="A short descriptive title" />
		</div>
		<div>
			<label for="text">Text</label>
			<textarea id="text" name="text" required class="h-64" placeholder="A descriptive text"
			></textarea>
		</div>
	</section>

	<section class="flex flex-col gap-4 rounded border p-8">
		<h2 class="mt-0">Palette</h2>
		<div class="flex flex-wrap gap-4">
			<div class="flex-1 bg-primary p-4 text-center text-white">Primary</div>
			<!-- <div class="bg-secondary flex-1 p-4 text-center text-white">Secondary</div>
			<div class="bg-muted flex-1 p-4 text-center text-white">Muted</div>
			<div class="bg-accent flex-1 p-4 text-center text-white">Accent</div> -->
			<div class="flex-1 bg-error p-4 text-center text-white">Error</div>
		</div>
	</section>

	<section class="flex flex-col gap-4 rounded border p-8">
		<h2 class="mt-0">Lists (TODO)</h2>
		<ul class="ml-6 flex list-disc flex-col gap-2">
			<li>1st level of puns: 5 gold coins</li>
			<li>2nd level of jokes: 10 gold coins</li>
			<li>3rd level of one-liners : 20 gold coins</li>
		</ul>
	</section>

	<section class="flex flex-col gap-4 rounded border p-8">
		<h2>Tables (TODO)</h2>
		<table>
			<thead>
				<tr>
					<th> King&apos;s Treasury </th>
					<th> People&apos;s happiness </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> Empty </td>
					<td> Overflowing </td>
				</tr>
				<tr>
					<td> Modest </td>
					<td> Satisfied </td>
				</tr>
				<tr>
					<td> Full </td>
					<td> Ecstatic </td>
				</tr>
			</tbody>
		</table>
	</section>
</div>
