<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import apptitudeLogo from '$lib/assets/apptitude-logo.webp?enhanced&w=450';
	import apptitudeMain from '$lib/screenshots/apptitude/main.png?enhanced';
	import apptitudeLearn from '$lib/screenshots/apptitude/learn.png?enhanced';
	import apptitudeLearnResources from '$lib/screenshots/apptitude/learn-resources.png?enhanced';
	import apptitudePlaybook from '$lib/screenshots/apptitude/playbook.png?enhanced';
	import apptitudeAlarms from '$lib/screenshots/apptitude/alarms.png?enhanced';
	import apptitudeDealbreakers from '$lib/screenshots/apptitude/dealbreakers.png?enhanced';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="apptitude">
	{#snippet title()}
		<enhanced:img src={apptitudeLogo} alt="Apptitude Logo" />{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'pagefind']} />
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
			<enhanced:img src={apptitudeMain} alt="Apptitude landing" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={apptitudeLearn} alt="Apptitude docs" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={apptitudeLearnResources} alt="Apptitude resources" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={apptitudePlaybook} alt="Apptitude playbook" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={apptitudeAlarms} alt="Apptitude alarm bells" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={apptitudeDealbreakers} alt="Apptitude dealbreakers" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
		</div>
	{/snippet}
</ProjectEntry>
