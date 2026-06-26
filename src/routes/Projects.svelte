<script lang="ts">
	import { descriptions } from '$lib/ProjectDescriptions';
	import AbbreviationMain from '$lib/screenshots/abbreviation/main-cropped.webp';
	import ApptitudeMain from '$lib/screenshots/apptitude/main.png';
	import BtonomicsMain from '$lib/screenshots/btonomics/main.png';
	import CubbyDashboard from '$lib/screenshots/cubby/dashboard.webp';

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
</script>

{#snippet card(href: string, bg: string, pos: string, name: string, caption: string)}
	<a
		{href}
		aria-label={name}
		title={caption}
		class="group block w-full overflow-hidden border border-white/10 transition-colors hover:border-white/30"
		style="background:url({bg}); background-size: cover; background-position: {pos};">
	</a>
{/snippet}

<main class="grid w-full justify-self-center text-center">
	<h3 class="mb-2 text-start text-4xl font-bold">Projects</h3>
	<div id="project-grid" class="grid w-full justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
		{@render card('/projects/cubby', CubbyDashboard, 'center top', 'Cubby', 'A personal ERP the household runs on')}
		{@render card(
			'/projects/abbreviation',
			AbbreviationMain,
			'center center',
			'Abbreviation',
			'Singapore Govt acronym search',
		)}
		{@render card('/projects/apptitude', ApptitudeMain, 'center center', 'Apptitude', 'Building technical intuition')}
		{@render card(
			'/projects/btonomics',
			BtonomicsMain,
			'center top',
			'BTOnomics',
			'Honest lessons from an HDB renovation',
		)}
	</div>

	<section class="mt-20 w-full text-start lg:mt-28">
		<h3 class="text-4xl font-bold">Graveyard</h3>
		<p class="text-neutral-content/65 mt-3 max-w-xl">Older builds, mostly retired or folded into the ones above.</p>
		<dl class="mt-8 border-t border-white/15">
			{#each archive as a (a.slug)}
				<div class="grid gap-x-6 gap-y-1 border-b border-white/15 py-4 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline">
					<dt class="font-semibold">{a.name}</dt>
					<dd>
						<span class="text-neutral-content/70">{a.subtitle}</span>
						{#if a.stack}
							<span class="text-neutral-content/45 mt-0.5 block font-mono text-xs">{a.stack}</span>
						{/if}
					</dd>
					<dd class="text-neutral-content/65 font-mono text-xs sm:text-right">{a.lineage ?? ''}</dd>
				</div>
			{/each}
		</dl>
	</section>
</main>

<style>
	#project-grid > a {
		aspect-ratio: 1;
		width: 100%;
	}

	@media (min-width: 1024px) {
		#project-grid > a:first-child {
			grid-row: span 2;
			aspect-ratio: auto;
		}
	}
</style>
