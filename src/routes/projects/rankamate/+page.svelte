<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=200';
</script>

<ProjectEntry id="rankamate">
	{#snippet title()}<a href="https://rankamate.zixian.dev/" aria-label="Rank-a-Mate webapp"
			><enhanced:img src={rankamateLogo} alt="Rank-a-Mate"></enhanced:img></a
		>{/snippet}
	{#snippet stack()}
		<StackComponents names={['django', 'htmx', 'sortable', 'nginx', 'gunicorn', 'bootstrap', 'postgresql']} />
	{/snippet}

	{#snippet problem()}Rank-a-Mate was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.{/snippet}

	{#snippet want()}
		Same problem statement - How might we speed up ranking sessions, which need manual selection to form a numbered list
		"1, 2, 3..." on Excel. Every change to the list required manual reordering.
	{/snippet}

	{#snippet built()}Speed up ranking sessions via drag & drop.{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Basic CRUD webapp with drag & drop of officers and session-based workflow</li>
			<li>Allowed addition of supplementary info (grades, dept)</li>
			<li>Sliders to adjust quotas for each grade</li>
			<li>Backend DB via Django</li>
		</ul>
	{/snippet}
</ProjectEntry>
