<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import dashboard from '$lib/screenshots/cubby/dashboard.png?enhanced&w=400';
	import tasks from '$lib/screenshots/cubby/tasks.png?enhanced&w=400';
	import tracker from '$lib/screenshots/cubby/tracker.png?enhanced&w=400';
	import market from '$lib/screenshots/cubby/market.png?enhanced&w=400';
	import marketPrices from '$lib/screenshots/cubby/market-prices.png?enhanced&w=400';
	import gym from '$lib/screenshots/cubby/gym.png?enhanced&w=400';
	import gymWorkout from '$lib/screenshots/cubby/gym-workout.png?enhanced&w=400';
	import stopwatch from '$lib/screenshots/cubby/stopwatch2.png?enhanced&w=400';
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
			<enhanced:img src={dashboard} alt="Cubby dashboard" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={tasks} alt="Cubby tasks" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={tracker} alt="Cubby tracker stats" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={market} alt="Cubby market prices" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img
				src={marketPrices}
				alt="Cubby price history"
				class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={gym} alt="Cubby gym workouts" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img
				src={gymWorkout}
				alt="Cubby workout detail"
				class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={stopwatch} alt="Cubby multi timer" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
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
