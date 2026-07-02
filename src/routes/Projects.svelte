<script lang="ts">
	import { descriptions } from '$lib/ProjectDescriptions';
	import AbbreviationMain from '$lib/screenshots/abbreviation/main-cropped.webp?enhanced';
	import ApptitudeMain from '$lib/screenshots/apptitude/main.png?enhanced';
	import BtonomicsMain from '$lib/screenshots/btonomics/main.webp?enhanced';
	import CubbyDashboard from '$lib/screenshots/cubby/dashboard.webp?enhanced';
	import CubbyGym from '$lib/screenshots/cubby/gym-workout.webp?enhanced';
	import CubbyCoffee from '$lib/screenshots/cubby/coffee.webp?enhanced';

	// Retired builds, ordered so the ones that fed today's projects read first.
	const archiveOrder = [
		'cancelninja',
		'roamichi',
		'eatyourmeds',
		'rankamate',
		'btonomics-wordpress',
		'appraize',
		'grumplr',
		'meetrics',
		'rinku',
		'wronged',
	];
	const archive = archiveOrder.map((slug) => ({ slug, ...descriptions[slug] }));

	type ProjectFact = {
		label: string;
		value: string;
	};

	type FeaturedProject = {
		slug: string;
		img?: string;
		shots?: string[];
		kind: string;
		pos: string;
		stack: string;
		facts: ProjectFact[];
	};

	// Featured builds get a full row each: screenshot on one side, the pitch on the other.
	// stack mirrors each project page's own stack list, kept short.
	const featured: FeaturedProject[] = [
		{
			slug: 'cubby',
			kind: 'mobile',
			pos: 'top',
			stack: 'Go · SvelteKit · Postgres',
			shots: [CubbyDashboard, CubbyGym, CubbyCoffee],
			facts: [
				{ label: 'Status', value: 'Active household app' },
				{ label: 'Problem', value: 'Daily routines scattered across memory, chat, and calendars' },
				{ label: 'Outcome', value: 'One dashboard for tasks, limits, bills, health, travel, and home logs' },
			],
		},
		{
			slug: 'abbreviation',
			img: AbbreviationMain,
			kind: 'web',
			pos: 'center',
			stack: 'Go · htmx · SQLite',
			facts: [
				{ label: 'Status', value: 'Live search tool' },
				{ label: 'Problem', value: 'Singapore Government acronyms are hard to find and easy to mistype' },
				{ label: 'Outcome', value: 'Fast fuzzy and phonetic lookup for rough searches' },
			],
		},
		{
			slug: 'apptitude',
			img: ApptitudeMain,
			kind: 'web',
			pos: 'top',
			stack: 'SvelteKit · Pocketbase · Pagefind',
			facts: [
				{ label: 'Status', value: 'Live knowledge base' },
				{ label: 'Problem', value: 'Tech learning resources scattered by topic, level, and audience' },
				{ label: 'Outcome', value: 'Curated paths for doers, leaders, concepts, and playbooks' },
			],
		},
		{
			slug: 'btonomics',
			img: BtonomicsMain,
			kind: 'web',
			pos: 'top',
			stack: 'Astro · Pagefind',
			facts: [
				{ label: 'Status', value: 'Static blog rebuild' },
				{ label: 'Problem', value: 'WordPress overhead for a focused renovation archive' },
				{ label: 'Outcome', value: 'Fast searchable HDB renovation notes by topic' },
			],
		},
	];
</script>

{#snippet card(p: FeaturedProject, i: number)}
	{@const meta = descriptions[p.slug]}
	{@const domain = meta.url.replace(/^https?:\/\//, '').replace(/\/+$/, '')}
	<a
		href="/projects/{p.slug}"
		class="group focus-visible:outline-accent grid items-stretch gap-7 text-start focus-visible:outline-2 focus-visible:outline-offset-6 lg:grid-cols-2 lg:gap-14">
		<div>
			{#if p.kind === 'mobile'}
				<!-- phone specimen: a trio of screens -->
				<div
					class="flex items-end justify-center gap-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
					{#each p.shots ?? [] as shot, n (n)}
						<div class="w-[30%] border border-white/10">
							<enhanced:img
								src={shot}
								alt="{meta.name} screenshot {n + 1}"
								loading="lazy"
								class="block h-auto w-full object-cover" />
						</div>
					{/each}
				</div>
			{:else}
				<!-- web specimen: hairline-framed screenshot -->
				<div class="overflow-hidden border border-white/10 transition-colors group-hover:border-white/25">
					<enhanced:img
						src={p.img}
						alt="{meta.name} screenshot"
						loading="lazy"
						class="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
						style="object-position: {p.pos};" />
				</div>
			{/if}
		</div>
		<div class="flex flex-col">
			<div class="flex items-baseline gap-4">
				<span class="text-neutral-content/55 text-sm">{String(i + 1).padStart(2, '0')}</span>
				<h4
					class="decoration-accent decoration-4 underline-offset-4 text-2xl font-bold tracking-tight transition-colors group-hover:underline lg:text-4xl">
					{meta.name}
				</h4>
			</div>
			<p class="text-neutral-content/75 mt-3 max-w-md text-sm leading-relaxed lg:text-base">{meta.subtitle}</p>
			<p class="text-neutral-content/45 mt-2 text-xs">{p.stack}</p>
			<dl class="mt-5 grid gap-2 border-y border-white/10 py-4">
				{#each p.facts as fact (fact.label)}
					<div class="grid gap-x-4 gap-y-0.5 sm:grid-cols-[5rem_1fr]">
						<dt class="text-neutral-content/40 font-mono text-[0.65rem] tracking-[0.16em] uppercase">
							{fact.label}
						</dt>
						<dd class="text-neutral-content/72 text-sm leading-relaxed">{fact.value}</dd>
					</div>
				{/each}
			</dl>
			<div class="text-neutral-content/60 mt-auto flex items-center justify-between gap-4 pt-4 text-xs">
				<span>{domain}</span>
				<span class="text-neutral-content/75 font-mono">Read case study ❯</span>
			</div>
		</div>
	</a>
{/snippet}

<section aria-label="Projects" class="grid w-full justify-self-center text-center">
	<div id="project-list" class="grid w-full gap-y-20 text-start lg:gap-y-28">
		{#each featured as p, i (p.slug)}
			{@render card(p, i)}
		{/each}
	</div>

	<section class="mt-20 w-full text-start lg:mt-28">
		<h3 class="text-4xl font-bold">Graveyard</h3>
		<p class="text-neutral-content/65 mt-3 max-w-xl text-sm lg:text-base">
			Retired projects, prototypes, and older builds that fed into current ones.
		</p>
		<dl class="mt-8 border-t border-white/15">
			{#each archive as a (a.slug)}
				<div class="grid gap-x-6 gap-y-1 border-b border-white/15 py-4 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline">
					<dt class="text-sm font-semibold lg:text-base">{a.name}</dt>
					<dd>
						<span class="text-neutral-content/70 text-sm lg:text-base">{a.subtitle}</span>
						{#if a.stack}
							<span class="text-neutral-content/45 mt-0.5 block text-xs">{a.stack}</span>
						{/if}
					</dd>
					<dd class="text-neutral-content/65 text-xs sm:text-right">{a.lineage ?? ''}</dd>
				</div>
			{/each}
		</dl>
	</section>
</section>
