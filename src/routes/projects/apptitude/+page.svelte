<script>
	import ProjectShell from '$lib/ProjectShell.svelte';
	import apptitudeLogo from '$lib/assets/apptitude-logo.webp?enhanced&w=320';
	import apptitudeMain from '$lib/screenshots/apptitude/main.png?enhanced&w=1100&quality=90';
	import apptitudeLearn from '$lib/screenshots/apptitude/learn.png?enhanced&w=1000&quality=90';

	const stack = [
		{ role: 'App', tools: 'SvelteKit · Svelte 5' },
		{ role: 'Data', tools: 'Postgres · Kysely' },
		{ role: 'Search', tools: 'Meilisearch' },
	];
</script>

<ProjectShell
	name="Apptitude"
	accent="#EA580C"
	accentInk="#C2410C"
	eyebrow="For officers making technology decisions"
	headline="Tech savvy, not tech heavy."
	sub="Practical decision support and plain-English technology education for officers and leaders who govern, fund, or inherit digital systems. Apptitude helps them pressure-test a proposal, find the evidence that matters, and learn enough to ask sharper questions."
	url="https://titude.app/"
	{stack}>
	{#snippet wordmark()}
		<enhanced:img src={apptitudeLogo} alt="Apptitude" class="h-9 w-auto" />
	{/snippet}

	{#snippet hero()}
		<enhanced:img
			src={apptitudeMain}
			alt="Apptitude landing, Building technical intuition"
			class="border-neutral/20 block w-full border-2 shadow-sm" />
	{/snippet}

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">Problem</p>
		<p class="mt-3 max-w-3xl text-2xl leading-snug font-bold">
			Officers and leaders are accountable for decisions about systems, vendors, and public money, but the material
			available to them is often either too technical, too generic, or framed by the people selling the solution.
		</p>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">What I built</p>
		<div class="text-base-content/85 mt-4 grid max-w-2xl gap-4 leading-relaxed">
			<p>
				Apptitude starts with the situation an officer is facing. Guided Consults turn proposals, renewals, troubled
				projects, and AI claims into concrete evidence requests, pause conditions, and next steps.
			</p>
			<p>
				Learn modules build the technical intuition behind those decisions in plain English. Accounts keep progress,
				bookmarks, and personal notes together, while full-text search makes the growing library easy to navigate.
			</p>
		</div>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">A look inside</p>
		<enhanced:img
			src={apptitudeLearn}
			alt="Apptitude knowledge base, concepts explained in plain English"
			class="border-neutral/20 mt-5 block w-full border-2 shadow-sm" />
	</section>
</ProjectShell>
