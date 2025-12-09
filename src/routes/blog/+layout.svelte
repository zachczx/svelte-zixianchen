<script lang="ts">
	import type { Snippet } from 'svelte';
	import ZXC from '$lib/assets/zixianchen-logo.webp?w=200&enhanced';

	let { children }: { children: Snippet } = $props();
	let ghostColor = $state('');
	const ghostAddClassMainRight = ['translate-x-4', 'text-red-900'];
	const ghostAddClassBlogLeft = ['-translate-x-4', 'text-orange-400'];
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
			<!-- 
			<div class="text-base-content/60 mb-12 flex items-center justify-center gap-12">
				<a href="/" class="font-bold hover:text-orange-400"> Home</a>
				<a href="/blog" class="font-bold hover:text-orange-400">Blog</a>
			</div> -->

			{@render children()}
		</div>
		<div class="mt-auto pt-10 text-center text-xs md:text-sm">© Zixian Chen</div>
	</div>
</div>
