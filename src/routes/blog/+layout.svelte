<script lang="ts">
	import type { Snippet } from 'svelte';
	import ZXC from '$lib/assets/zixianchen-logo.webp?w=200&enhanced';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<meta name="keywords" content="Zixian, blog" />
</svelte:head>

<div class="bg-base-200 relative flex w-full flex-col items-center justify-center overflow-hidden">
	<div id="container" class="z-10 grid min-h-dvh justify-center py-6 xl:w-5xl">
		<div class="lg:max-w-5xl">
			<a href="/" class="flex justify-center pt-8 pb-12" aria-label="logo">
				<enhanced:img src={ZXC} alt="" class="justify-self-center" style="view-transition-name: logo" />
			</a>
			{@render children()}
		</div>
		<div class="mt-auto pt-10 text-center text-xs md:text-sm">© Zixian Chen</div>
	</div>
</div>
