<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
	import apptitudeScreenshotWatch from '$lib/screenshots/apptitude-watch.webp?enhanced';
	import apptitudeScreenshotGuides from '$lib/screenshots/apptitude-guides.webp?enhanced';
	import apptitudeScreenshotLearn from '$lib/screenshots/apptitude-learn.webp?enhanced';
	import apptitudeScreenshotMain from '$lib/screenshots/apptitude-main.webp?enhanced';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="apptitude">
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<enhanced:img src={apptitudeScreenshotMain} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotGuides} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}
	{#snippet title()}
		<enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="brightness-[0.85] saturate-150" />{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'greensock', 'pagefind']} />
	{/snippet}

	{#snippet problem()}
		<AlignCenterText>I needed an easy way for teammates to find and access resources to learn tech.</AlignCenterText>
	{/snippet}

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
			<enhanced:img src={apptitudeScreenshotLearn} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={apptitudeScreenshotWatch} alt="Apptitude" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Adding and making learning plans the front and center to learning</li>
			<li>Tailoring suggested resources based on said learning plan.</li>
		</ul>
	{/snippet}
</ProjectEntry>
