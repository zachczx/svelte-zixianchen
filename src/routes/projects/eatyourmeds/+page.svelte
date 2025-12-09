<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
</script>

<ProjectEntry id="eatyourmeds">
	{#snippet title()}
		<div class="avatar flex justify-center">
			<div class="w-48 rounded-full">
				<a href="https://eatyourmeds.zixian.dev/" aria-label="Eat Your Meds webapp"
					><enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!"></enhanced:img></a>
			</div>
		</div>
	{/snippet}
	{#snippet stack()}
		<StackComponents names={['django', 'htmx', 'nginx', 'gunicorn', 'bootstrap', 'postgresql']} />
	{/snippet}

	{#snippet problem()}
		<AlignCenterText>
			Coordinating medicine dosing schedules between parents - tracking timings, calculating doses, keeping records in
			sync.
		</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Django webapp for tracking medication schedules with user auth and coordination between parents. HTMX for
			interactions, date pickers for scheduling.
		</p>

		<p>
			Ultimately realized LLMs handle this better - can calculate doses, suggest schedules, and adapt to changes
			conversationally without needing a custom app.
		</p>
	{/snippet}
</ProjectEntry>
