<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import RoamichiLogo from '$lib/logos/roamichi-logo.svg?dataurl';

	import roamichiScreenshotCalendar from '$lib/screenshots/roamichi-calendar.webp?w=400&enhanced';
	import roamichiScreenshotCreate from '$lib/screenshots/roamichi-create.webp?w=400&enhanced';
	import roamichiScreenshotCreate2 from '$lib/screenshots/roamichi-create2.webp?w=400&enhanced';
	import roamichiScreenshotCreate3 from '$lib/screenshots/roamichi-create3.webp?w=400&enhanced';
	import roamichiScreenshotCreate4 from '$lib/screenshots/roamichi-create4.webp?w=400&enhanced';
	import roamichiScreenshotExplore from '$lib/screenshots/roamichi-explore.webp?w=400&enhanced';
	import roamichiScreenshotExplore2 from '$lib/screenshots/roamichi-explore2.webp?w=400&enhanced';
	import roamichiScreenshotExplore3 from '$lib/screenshots/roamichi-explore3.webp?w=400&enhanced';
	import roamichiScreenshotFlight from '$lib/screenshots/roamichi-flight.webp?w=400&enhanced';
	import roamichiScreenshotFlight2 from '$lib/screenshots/roamichi-flight2.webp?w=400&enhanced';
	import roamichiScreenshotMain from '$lib/screenshots/roamichi-main.webp?w=400&enhanced';
	import roamichiScreenshotPack from '$lib/screenshots/roamichi-pack.webp?w=400&enhanced';
	import roamichiScreenshotTrip from '$lib/screenshots/roamichi-trip.webp?w=400&enhanced';
	import roamichiScreenshotTrip2 from '$lib/screenshots/roamichi-trip2.webp?w=400&enhanced';
	import AlignCenterText from '$lib/AlignCenterText.svelte';

	const ss = [
		roamichiScreenshotMain,
		// roamichiScreenshotTrip,
		roamichiScreenshotTrip2,
		roamichiScreenshotCreate,
		roamichiScreenshotCreate2,
		// roamichiScreenshotCreate3,
		// roamichiScreenshotCreate4,
		// roamichiScreenshotFlight,
		roamichiScreenshotFlight2,

		roamichiScreenshotExplore,
		roamichiScreenshotExplore2,
		// roamichiScreenshotExplore3,
		// roamichiScreenshotCalendar,
		roamichiScreenshotPack,
	];
</script>

<ProjectEntry id="roamichi">
	{#snippet title()}
		<div class="flex items-center gap-4 lg:gap-4">
			<img src={RoamichiLogo} alt="Roamichi" class="my-4 h-12 lg:h-14" />
			<h3 class="font-inter text-5xl font-extrabold text-[#31452e] xl:text-6xl">Roamichi</h3>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'drizzle', 'tailwind', 'coolify', 'postgresql']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid gap-4 lg:grid-cols-2">
			{#each ss as ss}
				<enhanced:img src={ss} alt="Roamichi app" class="border-neutral/20 rounded-xl border" />
			{/each}
		</div>
	{/snippet}

	{#snippet problem()}
		<p>
			Travel info scattered across email itineraries, Telegram chats, and Google Keep. No single place to see flights,
			hotels, and saved destinations for a trip.
		</p>
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Trip management app that tracks flights, hotels, weather, and destinations. Uses LLMs to parse itineraries and
			receipts, so a user uploads a confirmation email and it auto-fills flight times, booking references, hotel
			addresses.
		</p>

		<p>
			Built custom location service that consolidates geo data from multiple sources (cities, countries, coordinates,
			population). Go backend following idiomatic project structure. PWA with Android app via CapacitorJS.
		</p>
	{/snippet}
</ProjectEntry>
