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

	// Featured builds get a full row each: screenshot on one side, the pitch on the other.
	// stack mirrors each project page's own stack list, kept short.
	const featured = [
		{
			slug: 'cubby',
			kind: 'mobile',
			pos: 'top',
			stack: 'Go · SvelteKit · Postgres',
			shots: [CubbyDashboard, CubbyGym, CubbyCoffee],
		},
		{ slug: 'abbreviation', img: AbbreviationMain, kind: 'web', pos: 'center', stack: 'Go · htmx · SQLite' },
		{ slug: 'apptitude', img: ApptitudeMain, kind: 'web', pos: 'top', stack: 'SvelteKit · Pocketbase · Pagefind' },
		{ slug: 'btonomics', img: BtonomicsMain, kind: 'web', pos: 'top', stack: 'Astro · Pagefind' },
	];
</script>

{#snippet card(
	p: { slug: string; img?: string; shots?: string[]; kind: string; pos: string; stack: string },
	i: number,
)}
	{@const meta = descriptions[p.slug]}
	{@const domain = meta.url.replace(/^https?:\/\//, '').replace(/\/+$/, '')}
	<a href="/projects/{p.slug}" class="group grid items-stretch gap-7 text-start lg:grid-cols-2 lg:gap-14">
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
			<p class="text-neutral-content/50 mt-auto pt-4 text-xs">{domain}</p>
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
