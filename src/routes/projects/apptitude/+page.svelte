<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
	import apptitudeScreenshotWatch from '$lib/screenshots/apptitude-watch.webp?enhanced';
	import apptitudeScreenshotGuides from '$lib/screenshots/apptitude-guides.webp?enhanced';
	import apptitudeScreenshotLearn from '$lib/screenshots/apptitude-learn.webp?enhanced';
	import apptitudeScreenshotMain from '$lib/screenshots/apptitude-main.webp?enhanced';
</script>

<ProjectEntry id="apptitude">
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<enhanced:img src={apptitudeScreenshotMain} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotGuides} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}
	{#snippet title()}
		<a href="https://titude.app/" aria-label="Apptitude webapp"
			><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="brightness-[0.85] saturate-150"></enhanced:img></a
		>{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'greensock', 'pagefind']} />
	{/snippet}

	{#snippet problem()}<span class="inline-block pt-2"
			>I needed an easy way for teammates to find and access resources to learn tech.</span
		>{/snippet}

	{#snippet want()}Display lists of tech resources from Youtube, blogs, tutorials, courses, sorted by tech competency.{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Static Website</li>
			<li>Used JS objects to store/read info</li>
			<li>Skipped CMS, DB, markdown files - it felt good!</li>
		</ul>
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={apptitudeScreenshotLearn} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotWatch} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Adding and making learning plans the front and center to learning</li>
			<li>Tailoring suggested resources based on said learning plan.</li>
		</ul>
	{/snippet}
</ProjectEntry>
