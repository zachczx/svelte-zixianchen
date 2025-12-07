<script lang="ts">
	export let navCurrent: string;

	import { page } from '$app/stores';
	import NavDock from '$lib/NavDock.svelte';
</script>

<nav class="z-1 grid h-fit w-full justify-center px-4 transition-all duration-300 ease-out xl:fixed xl:bottom-2">
	<div
		style="view-transition-name: navdock;"
		class="hidden h-20 w-fit min-w-120 items-center justify-center justify-self-center rounded border border-gray-400 bg-gray-900 px-2 shadow-sm backdrop-blur-md transition-all duration-300 ease-out xl:relative xl:flex">
		<NavDock {navCurrent} pathName={$page.url.pathname} />
	</div>
	<div class="hidden items-center justify-end space-x-6 xl:flex"></div>
</nav>
