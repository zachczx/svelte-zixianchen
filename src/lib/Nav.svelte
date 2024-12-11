<script lang="ts">
	export let navCurrent: string;

	import { page } from '$app/stores';
	import NavDock from '$lib/NavDock.svelte';
</script>

<nav
	class="z-30 grid h-fit w-full grid-cols-2 justify-center px-4 transition-all duration-300 ease-out xl:fixed xl:top-2 xl:grid-cols-3">
	<div class="navbar-start col-span-2 -mx-4 w-full xl:hidden">
		<div class="dropdown dropdown-open">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
				</svg>
			</div>
			<button tabindex="0" class="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="/#about">About</a>
				</li>
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="/#career">Career</a>
				</li>
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="/#projects">Projects</a>
				</li>
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="/contact">Contact</a>
				</li>
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="https://www.linkedin.com/in/zixianchen/">LinkedIn</a>
				</li>
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="https://github.com/zachczx?tab=repositories">GitHub</a>
				</li>
				<li class="w-full rounded-lg hover:bg-red-300 focus:bg-red-300 active:bg-red-300">
					<a href="/blog">Blog</a>
				</li></button>
		</div>
		<span class="navLogo font-serif text-2xl font-extrabold text-base-content hover:drop-shadow"
			><a href="/">Zixian Chen</a></span>
	</div>

	<div class="hidden items-center lg:opacity-0 xl:flex">
		<span class="navLogo font-serif text-2xl font-extrabold text-base-content hover:drop-shadow"
			><a href="/">Zixian Chen</a></span>
	</div>
	<div
		class="navMenu hidden h-20 w-fit min-w-[40rem] items-center justify-center justify-self-center rounded-full border border-white/50 bg-black/70 shadow backdrop-blur-md transition-all duration-300 ease-out xl:relative xl:flex">
		<NavDock {navCurrent} pathName={$page.url.pathname} />
	</div>
	<div class="hidden items-center justify-end space-x-6 xl:flex"></div>
</nav>

<style>
	.navLogo {
		view-transition-name: navLogo;
	}

	.navMenu {
		view-transition-name: navMenu;
	}
</style>
