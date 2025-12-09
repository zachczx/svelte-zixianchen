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
		<StackComponents names={['sveltekit', 'tailwind', 'pocketbase', 'coolify']} />
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
			>Calendar apps assume regular schedules. I needed to track a variety of irregular home tasks, and then see when
			I'm overdue</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<AlignCenterText
			>A PWA with gap detection, calendar view, frequency tracking. Backend with PocketBase.</AlignCenterText>
	{/snippet}

	{#snippet undone()}<AlignCenterText>Considering: streak visualizations, push notifications.</AlignCenterText>
	{/snippet}
</ProjectEntry>
