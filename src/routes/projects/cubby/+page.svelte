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

<ProjectEntry id="cubby">
	{#snippet title()}
		<img src={CubbyLogo} alt="Cubby" class="my-4 h-30" />
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'sveltekit', 'postgresql']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid gap-4 lg:grid-cols-2">
			<enhanced:img src={dashboard} alt="Cubby app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={tracker} alt="Cubby" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={stats} alt="Cubby" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={calendar} alt="Cubby" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={stopwatch} alt="Cubby" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		<AlignCenterText
			>Started because I couldn't remember when I last changed the towels. Then I wanted to track cleaning sprays, then
			other irregular home tasks. Then gym workouts crept in, then grocery prices. It kept growing because I kept
			finding things I wanted to track.</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<AlignCenterText
			>A cross-platform app (web + Android via Capacitor) that grew from a simple task tracker into a home admin tool.
			Now has overdue detection, gym routines with stats, receipt scanning for price tracking, shopping lists, and
			family sharing. Go API with PostgreSQL.</AlignCenterText>
	{/snippet}
</ProjectEntry>
