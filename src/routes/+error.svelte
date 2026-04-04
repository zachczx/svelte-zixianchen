<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} | Zixian Chen</title>
</svelte:head>

<div class="bg-base-200 grid min-h-dvh place-items-center px-4">
	<div class="grid justify-items-center gap-4 text-center">
		<h1 class="text-9xl font-extrabold">{page.status}</h1>
		<p class="text-base-content/60 text-xl">{page.error?.message}</p>
		<a
			href="/"
			class="bg-neutral mt-8 inline-block rounded-full px-6 py-3 font-medium text-white transition-opacity hover:opacity-80">
			Go Home
		</a>
	</div>
</div>
