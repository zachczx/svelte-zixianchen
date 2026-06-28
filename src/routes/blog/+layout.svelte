<script lang="ts">
	import type { Snippet } from 'svelte';
	import Nav from '$lib/Nav.svelte';
	import { codeSnippets } from '../code-snippets';

	let { children }: { children: Snippet } = $props();

	const codeText = codeSnippets.filter((s) => s !== '').join(' ');
</script>

<svelte:head>
	<meta name="keywords" content="Zixian, blog" />
</svelte:head>

<div class="bg-base-200 relative flex w-full flex-col items-center justify-center overflow-hidden">
	<div id="container" class="z-10 grid min-h-dvh w-full max-w-3xl justify-center py-6">
		<div class="w-full min-w-0">
			<a href="/" class="flex justify-center pt-8 pb-12 hover:opacity-80 transition-opacity" aria-label="logo">
				<div
					class="code-z size-16 lg:size-20 overflow-hidden bg-slate-900"
					style="view-transition-name: logo"
					aria-hidden="true">
					<div class="code-fill font-mono">{codeText}</div>
				</div>
			</a>
			{@render children()}
		</div>
		<div class="mt-auto pt-10 text-center text-xs md:text-sm">© Zixian Chen</div>
	</div>
</div>

<!-- Playful pole: the colorful magnifying dock, floating over the quiet page on wide screens. -->
<Nav navCurrent="" />

<style>
	.code-z {
		clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 25% 80%, 100% 80%, 100% 100%, 0% 100%, 0% 80%, 75% 20%, 0% 20%);
	}

	.code-fill {
		font-size: 0.4em;
		line-height: 1.3;
		word-break: break-all;
		width: 100%;
		height: 100%;
		color: var(--color-primary-content);
	}
</style>
