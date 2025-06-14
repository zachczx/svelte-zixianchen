<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import towelieScreenshotMain from '$lib/screenshots/towelie-main-1.webp?enhanced';
	import towelieScreenshotMain2 from '$lib/screenshots/towelie-main-2.webp?enhanced';
	import Towelie from '$lib/logos/towelie-logo.svg?dataurl';
</script>

<ProjectEntry id="towelie">
	{#snippet title()}
		<img src={Towelie} alt="Towelie" class="my-4 h-16" />
	{/snippet}

	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={towelieScreenshotMain}
					alt="Towelie"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={towelieScreenshotMain2}
					alt="Towelie"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'betterAuth', 'drizzle', 'coolify']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={towelieScreenshotMain} alt="Towelie app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={towelieScreenshotMain2} alt="Towelie" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		<AlignCenterText>I wanted to track when I last washed my towels.</AlignCenterText>
	{/snippet}

	{#snippet want()}<AlignCenterText>CRUD webapp to let me record everytime I washed my towel.</AlignCenterText>
	{/snippet}

	{#snippet built()}<AlignCenterText>JS webapp with create and read functions, with self-hosted auth.</AlignCenterText>
	{/snippet}

	{#snippet undone()}<AlignCenterText>Nothing.</AlignCenterText>
	{/snippet}

	{#snippet takeaway()}
		<p>
			This is over-engineered. Like my wife critiqued, I could've just designated 1 or 2 days a week as the towel
			washing days.
		</p>
	{/snippet}
</ProjectEntry>
