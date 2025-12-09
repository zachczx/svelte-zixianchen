<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import cancelNinjaScreenshotMain from '$lib/screenshots/cancelninja-main.webp?enhanced';
	import cancelNinjaScreenshotDashboard from '$lib/screenshots/cancelninja-dashboard.webp?enhanced';
	import cancelNinjaScreenshotDashboard2 from '$lib/screenshots/cancelninja-dashboard2.webp?enhanced';
	import cancelNinjaScreenshotAdd from '$lib/screenshots/cancelninja-add.webp?enhanced';
	import cancelNinjaScreenshotCalendar from '$lib/screenshots/cancelninja-calendar.webp?enhanced';
	import cancelNinjaScreenshotExplore from '$lib/screenshots/cancelninja-explore.webp?enhanced';
	import cancelNinjaScreenshotExplore2 from '$lib/screenshots/cancelninja-explore2.webp?enhanced';
</script>

<ProjectEntry id="cancelninja">
	{#snippet title()}
		<h3 class="text-base-content text-5xl font-extrabold tracking-tighter lg:text-7xl">
			Cancel Ninj<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				class="-ms-1 inline rotate-45 group-hover:text-[#3b82f6]"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="m395.13 313l89.869-100.857H388.08c-45.748 0-82.824-37.063-82.824-82.824l-.297-33.208l-100.857-77.147v96.917c0 45.751-37.06 82.824-82.822 82.824l-9.844.298L27.001 299.86h96.92c45.75 0 82.822 37.062 82.822 82.824l.298 20.484l100.854 89.868v-96.913c0-45.749 37.062-82.823 82.824-82.823zM256 306.669c-27.99 0-50.666-22.685-50.666-50.665c0-27.99 22.679-50.671 50.665-50.671c27.99 0 50.67 22.682 50.67 50.671c0 27.98-22.683 50.665-50.67 50.665z" /></svg>
		</h3>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'pocketbase', 'coolify']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={cancelNinjaScreenshotMain} alt="CancelNinja app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img
				src={cancelNinjaScreenshotDashboard}
				alt="CancelNinja"
				class="border-neutral/20 rounded-xl border" />
			<enhanced:img
				src={cancelNinjaScreenshotDashboard2}
				alt="CancelNinja"
				class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={cancelNinjaScreenshotAdd} alt="CancelNinja" class="border-neutral/20 rounded-xl border" />
			<enhanced:img
				src={cancelNinjaScreenshotCalendar}
				alt="CancelNinja app"
				class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={cancelNinjaScreenshotExplore} alt="CancelNinja" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={cancelNinjaScreenshotExplore2} alt="CancelNinja" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		<AlignCenterText
			>Subscription services use dark patterns to keep people paying for things they don't use. Cancellation flows are
			deliberately confusing.
		</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<AlignCenterText>
			<p class="mb-4">
				Subscription tracker with calendar view and alerts. Built custom calendar component instead of using libraries.
				Neobrutal UI as a design experiment.
			</p>
			<p>
				Realized after building that the problem wasn't painful enough - unless you're losing significant money monthly,
				the tracking overhead isn't worth it. Would need direct integration with SaaS products to reduce friction, but
				that defeats the "counter dark patterns" purpose.
			</p>
		</AlignCenterText>
	{/snippet}
</ProjectEntry>
