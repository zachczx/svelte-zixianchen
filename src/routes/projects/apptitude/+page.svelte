<script>
	import ProjectShell from '$lib/ProjectShell.svelte';
	import apptitudeLogo from '$lib/assets/apptitude-logo.webp?enhanced&w=320';
	import apptitudeMain from '$lib/screenshots/apptitude/main.png?enhanced&w=1100&quality=90';
	import apptitudeLearn from '$lib/screenshots/apptitude/learn.png?enhanced&w=1000&quality=90';

	const stack = [
		{ role: 'Frontend', tools: 'SvelteKit' },
		{ role: 'Backend', tools: 'Pocketbase' },
		{ role: 'Search', tools: 'Pagefind' },
	];
</script>

<ProjectShell
	name="Apptitude"
	accent="#EA580C"
	accentInk="#C2410C"
	eyebrow="Tech knowledge for decision-makers"
	headline="Building technical intuition, minus the jargon."
	sub="A personal collection of mental models and notes on software in Government, written for the people who decide on tech but don't write the code. Plain-English concepts, plus opinionated playbooks for scoping and strategy."
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
			Teammates never knew where to start learning tech, and the good material was scattered across YouTube, blogs, and
			courses with no way to browse by level or topic.
		</p>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">How it works</p>
		<div class="text-base-content/85 mt-4 grid max-w-2xl gap-4 leading-relaxed">
			<p>
				A curated directory organised by competency, Learn How and Think Why, and by audience, Doers and Leaders, with
				client-side search so anything is a few keystrokes away.
			</p>
			<p>
				I deliberately skipped a CMS, a database, and Markdown files. The data lives in plain JS objects, which is
				simpler to update and has no build-step overhead for what is really a curated list.
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
