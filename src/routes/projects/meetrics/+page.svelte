<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import Meetrics from '$lib/logos/meetrics.svg?dataurl';

	import meetricsScreenshotMain from '$lib/screenshots/meetrics-main.webp?enhanced';
	import meetricsScreenshotAdd2 from '$lib/screenshots/meetrics-filled.webp?enhanced';
</script>

<ProjectEntry id="meetrics">
	{#snippet title()}
		<a href="https://meetrics.zixian.dev" class="group inline-block">
			<img src={Meetrics} alt="Meetrics" class="h-16" />
		</a>
	{/snippet}
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<enhanced:img src={meetricsScreenshotMain} alt="Meetrics app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={meetricsScreenshotAdd2} alt="Meetrics app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind']} />
	{/snippet}

	{#snippet problem()}<p>
			Meetings can be redundant and too long, because people don't have a quantifiable figure for the meeting's costs.
		</p>
		<p>Everyone would be careful with setting up meetings if they realized each one costs at least $1,000!</p>
	{/snippet}

	{#snippet want()}
		A meeting cost calculator based on number of attendees and their seniority.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Several input fields tied to reactive variables for easy calculation</li>
			<li>This could've been built with any stack tbh</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<li>Integration with a HR system to fetch employee ranks, but it's overly complex and unrealistic.</li>
	{/snippet}
</ProjectEntry>
