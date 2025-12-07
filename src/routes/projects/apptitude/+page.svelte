<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
	import apptitudeScreenshotWatch from '$lib/screenshots/apptitude-watch.webp?enhanced';
	import apptitudeScreenshotGuides from '$lib/screenshots/apptitude-guides.webp?enhanced';
	import apptitudeScreenshotMain2 from '$lib/screenshots/apptitude-main-2.webp?enhanced';
	import apptitudeScreenshotMain3 from '$lib/screenshots/apptitude-main-3.webp?enhanced';
	import apptitudeScreenshotMain from '$lib/screenshots/apptitude-main.webp?enhanced';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="apptitude">
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={apptitudeScreenshotMain}
					alt="Apptitude"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={apptitudeScreenshotGuides}
					alt="Apptitude"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}
	{#snippet title()}
		<enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="brightness-[0.85] saturate-150" />{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'greensock', 'pagefind']} />
	{/snippet}

	{#snippet problem()}
		<AlignCenterText>
			Teammates didn't know where to start learning tech. Or wasted time searching. No single place (e.g. YouTube,
			blogs, courses) to find all the materials. And couldn't browse by skill level or topic.
		</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Curated directory of tech learning resources, organized by competency level (Learn How / Think Why) and audience
			(Doers / Leaders). Static site with client-side search.
		</p>
		<p>
			Deliberately skipped CMS, database, and markdown files. Data lives in JS objects—simpler to update, no build step
			complexity for what's essentially a curated list.
		</p>
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={apptitudeScreenshotMain2} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotMain3} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotWatch} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotGuides} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}
</ProjectEntry>
