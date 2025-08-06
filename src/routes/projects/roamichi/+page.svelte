<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	// import Rinku from '$lib/logos/rinku-logo.svg?dataurl';

	// import rinkuScreenshotLanding from '$lib/screenshots/rinku-landing.webp';
	// import rinkuScreenshotAdmin from '$lib/screenshots/rinku-admin.webp?enhanced';
	// import rinkuScreenshotShortener from '$lib/screenshots/rinku-shortener.webp';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="roamichi">
	{#snippet title()}
		<h3 class="font-inter text-5xl font-extrabold text-[#31452e] xl:text-7xl">Roamichi</h3>
	{/snippet}
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<!-- <img
					src={rinkuScreenshotLanding}
					alt="Rinku app"
					class="transition-all delay-75 duration-300 ease-out hover:scale-200" /> -->
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<!-- <img
					src={rinkuScreenshotShortener}
					alt="Rinku app"
					class="transition-all delay-75 duration-300 ease-out hover:scale-200" /> -->
			</div>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['sveltekit', 'drizzle', 'tailwind', 'coolify', 'postgresql']} />
	{/snippet}

	{#snippet problem()}
		<p>
			I kept going back to my emails to find my itineraries & receipts. Also kept going back and forth on Telegram &
			Google Keep, jumping between chats to find saved places.
		</p>
	{/snippet}

	{#snippet want()}
		<AlignCenterText>A holiday management system.</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>CRUD app to track flights, hotels, weather, etc.</li>
			<li>It uses LLMs to auto fill details using itineraries or receipts.</li>
		</ul>
		<!-- <enhanced:img src={rinkuScreenshotAdmin} alt="Rinku app" class="border-neutral/20 mt-4 rounded-xl border" /> -->
	{/snippet}
	{#snippet undone()}
		<AlignCenterText>Notifications.</AlignCenterText>
	{/snippet}
</ProjectEntry>
