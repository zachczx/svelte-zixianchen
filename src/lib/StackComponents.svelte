<script lang="ts">
	import SvgSveltekit from '$lib/logos/Sveltekit.svg?dataurl';
	import SvgGreensock from '$lib/logos/Greensock.svg?dataurl';
	import SvgTailwind from '$lib/logos/Tailwind.svg?dataurl';
	import SvgTailwindSmall from '$lib/logos/tailwindcss-small.svg?dataurl';
	import SvgCloudflare from '$lib/logos/Cloudflare.svg?dataurl';
	import SvgDrizzle from '$lib/logos/Drizzle.svg?dataurl';
	import SvgDrizzlePng from '$lib/logos/Drizzle.png?enhanced&w=40';
	import SvgSvelte from '$lib/logos/Svelte.svg';
	import SvgSortable from '$lib/logos/Sortablejs.png?enhanced&w=40';
	import SvgNginx from '$lib/logos/Nginx.svg?dataurl';
	import SvgCoolify from '$lib/logos/Coolify.svg?dataurl';
	import SvgNodejs from '$lib/logos/Nodejs.svg?dataurl';
	import SvgPostgresql from '$lib/logos/Postgresql.svg?dataurl';
	import SvgTurso from '$lib/logos/Turso.svg?dataurl';
	import SvgHtmx from '$lib/logos/Htmx.svg?dataurl';
	import SvgDjango from '$lib/logos/Django.svg?dataurl';
	import SvgBootstrap from '$lib/logos/Bootstrap.svg?dataurl';
	import SvgGunicorn from '$lib/logos/Gunicorn.svg?dataurl';
	import SvgWordpress from '$lib/logos/Wordpress.svg?dataurl';
	import SvgApacheHttp from '$lib/logos/Apache-http.svg?dataurl';
	import SvgMysql from '$lib/logos/Mysql.svg?dataurl';
	import SvgBunny from '$lib/logos/Bunny.svg?dataurl';
	import SvgAstro from '$lib/logos/Astro.svg?dataurl';
	import SvgCloudflarePages from '$lib/logos/Cloudflare-pages.svg?dataurl';
	import SvgPagefind from '$lib/logos/Pagefind.svg?dataurl';
	import SvgPocketbase from '$lib/logos/pocketbase.svg?dataurl';
	import SvgMeetrics from '$lib/logos/meetrics.svg?dataurl';
	import SvgGolang from '$lib/logos/Golang.svg?dataurl';
	import SvgSqlite from '$lib/logos/sqlite.svg?dataurl';
	import SvgTempl from '$lib/logos/templ.svg?dataurl';
	import SvgStytch from '$lib/logos/Stytch.svg?dataurl';

	interface StackName {
		names: string[];
	}

	let { names = [] }: StackName = $props();

	function getNames(names: string) {
		return names.split(',');
	}

	interface StacksList {
		[index: string]: {
			name: string;
			src: string;
			class: string;
			enhanced?: boolean;
		};
	}
	const stacks: StacksList = {
		go: { name: 'Go', src: SvgGolang, class: 'h-10 scale-125' },
		astro: { name: 'AstroJS', src: SvgAstro, class: 'h-10 scale-125' },
		htmx: { name: 'Htmx', src: SvgHtmx, class: 'h-6' },
		tailwind: { name: 'Tailwind', src: SvgTailwindSmall, class: 'h-10 grow' },
		sqlite: { name: 'Sqlite', src: SvgSqlite, class: 'h-10 grow' },
		templ: { name: 'Templ', src: SvgTempl, class: 'h-4 lg:h-6' },
		sveltekit: { name: 'Sveltekit', src: SvgSveltekit, class: 'h-8' },
		sortable: { name: 'SortableJS', enhanced: true, src: SvgSortable, class: 'h-8' },
		coolify: { name: 'Coolify', src: SvgCoolify, class: 'h-8' },
		postgresql: { name: 'PostgreSQL', src: SvgPostgresql, class: 'h-8' },
		drizzle: { name: 'Drizzle', enhanced: true, src: SvgDrizzlePng, class: 'h-8 rounded-xl' },
		greensock: { name: 'GSAP', src: SvgGreensock, class: 'h-8' },
		pagefind: { name: 'Pagefind', src: SvgPagefind, class: 'h-8' },
		pocketbase: { name: 'PocketBase', src: SvgPocketbase, class: 'h-8' },
		django: { name: 'Django', src: SvgDjango, class: 'h-8' },
		gunicorn: { name: 'Gunicorn', src: SvgGunicorn, class: 'h-8' },
		bootstrap: { name: 'Bootstrap', src: SvgBootstrap, class: 'h-8' },
		wordpress: { name: 'Wordpress', src: SvgWordpress, class: 'h-8' },
		nginx: { name: 'Nginx', src: SvgNginx, class: 'h-8' },
		mysql: { name: 'MySQL', src: SvgMysql, class: 'h-8' },
		bunny: { name: 'BunnyCDN', src: SvgBunny, class: 'h-10 scale-125' },
		stytch: { name: 'Stytch', src: SvgStytch, class: 'h-8' },
	};
</script>

{#each names as name}
	<div class="flex items-center justify-center rounded-3xl border border-neutral/15 bg-white/70 p-4 shadow-md">
		{#if stacks[name].enhanced}
			<enhanced:img
				src={stacks[name].src}
				class={stacks[name].class}
				alt={stacks[name].name}
				title={stacks[name].name} />
		{:else}
			<img src={stacks[name].src} class={stacks[name].class} alt={stacks[name].name} title={stacks[name].name} />
		{/if}
	</div>
{/each}
