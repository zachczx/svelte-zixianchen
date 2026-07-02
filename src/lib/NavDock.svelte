<script lang="ts">
	import type { Component } from 'svelte';
	import HouseIcon from '~icons/material-symbols/other-houses';
	import AccountIcon from '~icons/material-symbols/account-box';
	import GridIcon from '~icons/material-symbols/grid-view';
	import ArticleIcon from '~icons/material-symbols/article';
	import MailIcon from '~icons/material-symbols/mail';
	import LinkedInIcon from '~icons/uiw/linkedin';
	import GitHubIcon from '~icons/octicon/mark-github-16';

	interface NavDockProps {
		navCurrent: string;
		pathName: string;
	}
	let { navCurrent, pathName }: NavDockProps = $props();

	type NavItem =
		| { kind: 'divider' }
		| {
				kind: 'anchor';
				href: string;
				label: string;
				icon: Component;
				iconClass?: string;
				active:
					| { type: 'hash'; key: string }
					| { type: 'path'; key: string }
					| { type: 'prefix'; key: string }
					| { type: 'prefixOrHash'; key: string; hash: string }
					| { type: 'none' };
		  };

	const items: NavItem[] = [
		{ kind: 'anchor', href: '/#header', label: 'Home', icon: HouseIcon, active: { type: 'hash', key: 'header' } },
		{ kind: 'anchor', href: '/#about', label: 'About', icon: AccountIcon, active: { type: 'hash', key: 'about' } },
		{
			kind: 'anchor',
			href: '/#projects',
			label: 'Projects',
			icon: GridIcon,
			active: { type: 'hash', key: 'projects' },
		},
		{
			kind: 'anchor',
			href: '/blog',
			label: 'Blog',
			icon: ArticleIcon,
			active: { type: 'prefixOrHash', key: '/blog', hash: 'musings' },
		},
		{ kind: 'divider' },
		{ kind: 'anchor', href: '/contact', label: 'Contact', icon: MailIcon, active: { type: 'path', key: '/contact' } },
		{
			kind: 'anchor',
			href: 'https://www.linkedin.com/in/zixianchen/',
			label: 'LinkedIn',
			icon: LinkedInIcon,
			iconClass: 'size-[0.9em]',
			active: { type: 'none' },
		},
		{
			kind: 'anchor',
			href: 'https://github.com/zachczx?tab=repositories',
			label: 'GitHub',
			icon: GitHubIcon,
			active: { type: 'none' },
		},
	];

	function isActive(item: Extract<NavItem, { kind: 'anchor' }>): boolean {
		if (item.active.type === 'hash') return navCurrent === item.active.key;
		if (item.active.type === 'path') return pathName === item.active.key;
		if (item.active.type === 'prefix') return pathName.startsWith(item.active.key);
		if (item.active.type === 'prefixOrHash')
			return pathName.startsWith(item.active.key) || navCurrent === item.active.hash;
		return false;
	}
</script>

{#each items as item}
	{#if item.kind === 'divider'}
		<div class="mx-4 h-10/12 w-0.5 bg-white/30"></div>
	{:else}
		{@const Icon = item.icon}
		{@const active = isActive(item)}
		<a
			href={item.href}
			aria-label={item.label}
			aria-current={active ? 'page' : undefined}
			class="dock group/dock relative bg-transparent no-underline transition-all duration-100 ease-linear hover:no-underline">
			<div
				class={[
					'relative flex items-center justify-center rounded-none border border-white/20 transition-all duration-100 ease-linear group-hover/dock:shadow-lg group-hover/dock:shadow-black/60',
					active ? 'bg-accent' : 'bg-gray-50',
				]}>
				<Icon aria-hidden="true" class={['grayscale-100', active ? 'opacity-100' : 'opacity-75', item.iconClass]} />
				<span
					class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center overflow-hidden rounded-xs py-0.5 font-mono text-xs font-bold whitespace-nowrap text-white/90 group-hover/dock:-top-5 group-hover/dock:flex group-focus-visible/dock:-top-5 group-focus-visible/dock:flex">
					{item.label}
				</span>
			</div>
		</a>
	{/if}
{/each}

<style>
	a {
		--font-scaler: 0.3;
		--dimensions-scaler: 0.35;
		--margin-scaler: 0.2;
	}

	.dock {
		font-size: calc(var(--font-scaler) * 6rem);
		div {
			/* filter: saturate(0.5); */
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
			flex-basis: auto;

			&:hover {
				opacity: 100%;
			}
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.dock:hover {
			font-size: calc(var(--font-scaler) * 9rem);
			div {
				filter: saturate(1);
				height: calc(var(--dimensions-scaler) * 13rem);
				width: calc(var(--dimensions-scaler) * 13rem);
			}
			margin-top: calc(var(--margin-scaler) * -6rem);
		}

		/* Adjacent to hover */
		.dock:hover + .dock,
		.dock:has(+ .dock:hover) {
			font-size: calc(var(--font-scaler) * 8rem);
			/* background-color: fuchsia; */
			div {
				height: calc(var(--dimensions-scaler) * 11rem);
				width: calc(var(--dimensions-scaler) * 11rem);
			}
			margin-top: calc(var(--margin-scaler) * -3.5rem);
		}

		/* Next next - beside adjacent */
		.dock:hover + .dock + .dock,
		.dock:has(+ .dock + .dock:hover) {
			font-size: calc(var(--font-scaler) * 7rem);
			div {
				height: calc(var(--dimensions-scaler) * 10rem);
				width: calc(var(--dimensions-scaler) * 10rem);
			}
			margin-top: calc(var(--margin-scaler) * -2rem);
		}

		/* Next next next */
		.dock:hover + .dock + .dock + .dock,
		.dock:has(+ .dock + .dock + .dock:hover) {
			font-size: calc(var(--font-scaler) * 6rem);
			div {
				height: calc(var(--dimensions-scaler) * 9rem);
				width: calc(var(--dimensions-scaler) * 9rem);
			}
			margin-top: calc(var(--margin-scaler) * -1rem);
		}
	}
</style>
