<script lang="ts">
	import type { PageProps } from "./$types"

	let { data }: PageProps = $props()
</script>

<div class="container mx-auto max-w-lg py-12">
	<h1>Login</h1>
	<p>Please enter your credentials to log in.</p>
	{#if !data.user}
		<form action="?/login" method="post" class="flex flex-col gap-4">
			<label>
				<span>Username</span>
				<input type="text" name="username" placeholder="Username" />
			</label>
			<label>
				<span>Password</span>
				<input type="password" name="password" placeholder="Password" />
			</label>
			<button class="btn-filled" type="submit">Login</button>
		</form>
	{/if}

	{#if data.user}
		<p>Welcome, {data.user.name}!</p>

		<form action="?/logout" method="post">
			<button class="btn-filled" type="submit">Logout</button>
		</form>
	{/if}
</div>
