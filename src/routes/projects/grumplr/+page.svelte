<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import grumplrScreenshotMain from '$lib/screenshots/grumplr-main.webp?enhanced';
	import grumplrScreenshotPost from '$lib/screenshots/grumplr-post.webp?enhanced';
	import grumplrScreenshotMainFiltered from '$lib/screenshots/grumplr-main-filtered.webp?enhanced';
	import grumplrScreenshotLivePost from '$lib/screenshots/grumplr-live-post.webp?enhanced';
	import grumplrScreenshotTagLag from '$lib/screenshots/grumplr-live-post.webp?enhanced';
	import grumplrScreenshotProfile from '$lib/screenshots/grumplr-profile.webp?enhanced';
</script>

<ProjectEntry id="grumplr">
	{#snippet title()}
		<h3 class="font-inter text-5xl font-bold tracking-tighter text-[#1b510f] lg:text-7xl">Grumplr</h3>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'htmx', 'templ', 'postgresql', 'keycloak', 'tailwind']} />
	{/snippet}

	{#snippet problem()}
		Wanted to learn Go web fundamentals: writing SQL by hand, vanilla JS, authentication flows. Decided to build a
		bulletin board as the learning vehicle.
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={grumplrScreenshotMain} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotPost} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotMainFiltered} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotLivePost} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotTagLag} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotProfile} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Bulletin board with threaded discussions, tags, live chat (Server-Sent Events), Keycloak auth (self-hosted), user
			profiles, and full-text search.
		</p>
		<p>Wrote SQL instead of using an ORM, mostly used Go stdlib.</p>
	{/snippet}
</ProjectEntry>
