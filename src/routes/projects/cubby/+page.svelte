<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import dashboard from '$lib/screenshots/cubby-dashboard.png?enhanced&w=400';
	import tracker from '$lib/screenshots/cubby-tracker.png?enhanced&w=400';
	import stopwatch from '$lib/screenshots/cubby-stopwatch.png?enhanced&w=400';
	import stats from '$lib/screenshots/cubby-stats.png?enhanced&w=400';
	import calendar from '$lib/screenshots/cubby-calendar.png?enhanced&w=400';
	import CubbyLogo from '$lib/assets/cubby-logo.webp';
</script>

<ProjectEntry id="towelie">
	{#snippet title()}
		<img src={CubbyLogo} alt="Cubby" class="my-4 h-30" />
	{/snippet}

	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="overflow-hidden rounded-xl">
				<enhanced:img src={dashboard} alt="Cubby Dashboard" class="border-neutral/20 rounded-xl border" />
			</div>
			<div class="overflow-hidden rounded-xl">
				<enhanced:img src={tracker} alt="Cubby tracker" class="border-neutral/20 rounded-xl border" />
			</div>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'pocketbase', 'coolify']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-3 gap-4">
			<enhanced:img src={dashboard} alt="Cubby app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={tracker} alt="Cubby" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={stats} alt="Cubby" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={calendar} alt="Cubby" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={stopwatch} alt="Cubby" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		<AlignCenterText>I wanted to track when I last washed my towels, sprayed kid's nose, bathed doggo.</AlignCenterText>
	{/snippet}

	{#snippet want()}<AlignCenterText
			>CRUD webapp to let me track all my home admin schedules. Towels, nasal sprays, bedsheets, vitamin gummies, doggo
			baths, Nexgard.</AlignCenterText>
	{/snippet}

	{#snippet built()}<AlignCenterText
			>Progressive web app + CapacitorJS Android app, with pocketbase backend.</AlignCenterText>
	{/snippet}

	{#snippet undone()}<AlignCenterText>Streaks. Push notifications.</AlignCenterText>
	{/snippet}

	{#snippet takeaway()}
		<p>Push notifications are not easy for pocketbase.</p>
	{/snippet}
</ProjectEntry>
