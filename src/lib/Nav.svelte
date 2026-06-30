<script lang="ts">
	import { page } from '$app/state';
	import NavDock from '$lib/NavDock.svelte';

	let { navCurrent }: { navCurrent: string } = $props();

	type ActiveRule =
		| { type: 'hash'; key: string }
		| { type: 'path'; key: string }
		| { type: 'prefix'; key: string }
		| { type: 'prefixOrHash'; key: string; hash: string };

	const links: { href: string; label: string; active: ActiveRule }[] = [
		{ href: '/', label: 'Home', active: { type: 'hash', key: 'header' } },
		{ href: '/#about', label: 'About', active: { type: 'hash', key: 'about' } },
		{ href: '/#projects', label: 'Projects', active: { type: 'hash', key: 'projects' } },
		{ href: '/blog', label: 'Blog', active: { type: 'prefixOrHash', key: '/blog', hash: 'musings' } },
		{ href: '/contact', label: 'Contact', active: { type: 'path', key: '/contact' } },
	];

	function isActive(rule: ActiveRule): boolean {
		if (rule.type === 'hash') return navCurrent === rule.key;
		if (rule.type === 'path') return page.url.pathname === rule.key;
		if (rule.type === 'prefixOrHash') return page.url.pathname.startsWith(rule.key) || navCurrent === rule.hash;
		return page.url.pathname.startsWith(rule.key);
	}
</script>

<nav class="z-50 grid h-fit w-full justify-center px-4 transition-all duration-300 ease-out xl:fixed xl:bottom-2">
	<div
		style="view-transition-name: navdock;"
		class="hidden h-20 w-fit min-w-120 items-center justify-center justify-self-center rounded border border-gray-400 bg-gray-900 px-2 shadow-sm backdrop-blur-md transition-all duration-300 ease-out xl:relative xl:flex">
		<NavDock {navCurrent} pathName={page.url.pathname} />
	</div>
</nav>

<!-- Stoic pole: a plain mono bar on narrow screens, where the playful dock is hidden. -->
<nav
	aria-label="Site"
	class="border-base-content/10 bg-base-100/95 fixed inset-x-0 bottom-0 z-50 flex flex-wrap justify-center gap-x-5 gap-y-1 border-t px-4 py-3 font-mono text-xs tracking-wide uppercase backdrop-blur xl:hidden">
	{#each links as link}
		{@const active = isActive(link.active)}
		<a
			href={link.href}
			aria-current={active ? 'page' : undefined}
			class={[
				'decoration-accent decoration-2 underline-offset-4 transition-colors',
				active ? 'text-base-content underline' : 'text-base-content/60 hover:text-base-content',
			]}>
			{link.label}
		</a>
	{/each}
</nav>
