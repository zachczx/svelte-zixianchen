<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import Meetrics from '$lib/logos/meetrics.svg?dataurl';
	import meetricsScreenshotMain from '$lib/screenshots/meetrics-main.webp?enhanced';
	import meetricsScreenshotAdd2 from '$lib/screenshots/meetrics-filled.webp?enhanced';
</script>

<ProjectEntry id="meetrics">
	{#snippet title()}
		<img src={Meetrics} alt="Meetrics" class="h-16" />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={meetricsScreenshotMain} alt="Meetrics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={meetricsScreenshotAdd2} alt="Meetrics" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind']} />
	{/snippet}

	{#snippet problem()}
		<p>
			Meetings can feel free because there's no visible cost. Everyone would be more thoughtful about scheduling if they
			realized each one costs at least $1,000!
		</p>
	{/snippet}

	{#snippet built()}
		<p>Meeting cost calculator based on attendee count and seniority levels. Live calculation as you adjust inputs.</p>
	{/snippet}
</ProjectEntry>
