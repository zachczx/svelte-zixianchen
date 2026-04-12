<script lang="ts">
	import { page } from '$app/state';
	import NavDock from '$lib/NavDock.svelte';

	let { navCurrent }: { navCurrent: string } = $props();
</script>

<nav class="z-1 grid h-fit w-full justify-center px-4 transition-all duration-300 ease-out xl:fixed xl:bottom-2">
	<div
		style="view-transition-name: navdock;"
		class="hidden h-20 w-fit min-w-120 items-center justify-center justify-self-center rounded border border-gray-400 bg-gray-900 px-2 shadow-sm backdrop-blur-md transition-all duration-300 ease-out xl:relative xl:flex">
		<NavDock {navCurrent} pathName={page.url.pathname} />
	</div>
</nav>
