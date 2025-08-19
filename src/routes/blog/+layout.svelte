<script lang="ts">
	import Particles from '$lib/magic-ui/Particles.svelte';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
	let ghostColor = $state('');
	const ghostAddClassMainRight = ['translate-x-4', 'text-red-900'];
	const ghostAddClassBlogLeft = ['-translate-x-4', 'text-orange-400'];
</script>

<svelte:head>
	<meta name="keywords" content="Zixian, blog" />
</svelte:head>

<div
	class="bg-base-200 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
	<div id="container" class="bg-base-100 z-10 grid min-h-dvh justify-center p-6 xl:w-[1024px]">
		<div class="lg:max-w-[1024px]">
			<div class="text-base-content/60 mb-12 flex items-center justify-center gap-12">
				<a href="/" class="font-bold hover:text-orange-400">
					<!-- <svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						class="material-symbols:arrow-back-rounded"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" /></svg> -->
					Home</a>
				<a href="/blog" class="font-bold hover:text-orange-400">Blog</a>
			</div>
			<div class="flex items-center justify-center gap-4 text-center text-4xl lg:text-6xl xl:gap-8 xl:text-8xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					class="hugeicons:code text-orange-400"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M8 12h.009m3.986 0h.01m3.986 0H16m2 9c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3"
						color="currentColor" /></svg
				><a
					href="/blog/"
					class="inline-block bg-linear-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text pb-2 font-extrabold text-transparent xl:pb-4"
					>Zixian's blog</a>
			</div>
			<div class="mb-12 grid content-center justify-center px-4 text-center">
				I write about simple things I learned or tried.
			</div>

			{@render children()}
		</div>
		<div class="mt-auto pt-10 text-center text-xs md:text-sm">© Zixian Chen</div>
	</div>
	<!-- <Particles className="absolute inset-0" refresh={true} size="3" color="#fb923c" /> -->
</div>

<style>
	* {
		font-family: 'Plus Jakarta Sans Variable', sans-serif;
	}
</style>
