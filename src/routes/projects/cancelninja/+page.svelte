<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import cancelNinjaScreenshotMain from '$lib/screenshots/cancelninja-main.webp?enhanced';
	import cancelNinjaScreenshotAdd2 from '$lib/screenshots/cancelninja-add2.webp?enhanced';
	import cancelNinjaScreenshotAdd3 from '$lib/screenshots/cancelninja-add3.webp?enhanced';
	import cancelNinjaScreenshotCalendar from '$lib/screenshots/cancelninja-calendar.webp?enhanced';
	import cancelNinjaScreenshotDashboard from '$lib/screenshots/cancelninja-dashboard.webp?enhanced';
	import cancelNinjaScreenshotDoc from '$lib/screenshots/cancelninja-doc.webp?enhanced';
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

	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<enhanced:img src={cancelNinjaScreenshotMain} alt="CancelNinja app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={cancelNinjaScreenshotAdd2} alt="CancelNinja app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'pocketbase', 'coolify']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={cancelNinjaScreenshotAdd3} alt="CancelNinja app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img
				src={cancelNinjaScreenshotCalendar}
				alt="CancelNinja app"
				class="border-neutral/20 rounded-xl border" />
			<enhanced:img
				src={cancelNinjaScreenshotDashboard}
				alt="CancelNinja"
				class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={cancelNinjaScreenshotDoc} alt="CancelNinja" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		<AlignCenterText>Counter dirty tricks that makes people keep subscriptions they don't want.</AlignCenterText>
	{/snippet}

	{#snippet want()}<AlignCenterText
			>Subscription tracker that alerts me about known dark patterns and companies' dirty tricks.</AlignCenterText>
	{/snippet}

	{#snippet built()}<AlignCenterText>CRUD webapp, with authentication, user stuff, and calendar view.</AlignCenterText>
	{/snippet}

	{#snippet undone()}<AlignCenterText
			>Probably OCR or natural language processing for greater automation.</AlignCenterText>
	{/snippet}

	{#snippet takeaway()}
		<p></p>
		<p></p>
		<p></p>

		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>It wasn't a big enough problem tbh. I didn't lose enough money to make this worth using much.</li>
			<li>
				This needs integration into the SaaS products, else the additional effort is only worth it if you save a lot of
				money
			</li>
			<li>
				It was fun to build a calendar from scratch, I enjoyed the result of not using external libraries for
				everything.
			</li>
			<li>
				I enjoyed the simplicity of having everything backend from Pocketbase, but I absolutely dislike bcrypt's delay
				and just overall sluggish feel as a user.
			</li>
		</ul>
	{/snippet}
</ProjectEntry>
