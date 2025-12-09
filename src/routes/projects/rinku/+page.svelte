<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import Rinku from '$lib/logos/rinku-logo.svg?dataurl';

	import rinkuScreenshotLanding from '$lib/screenshots/rinku-landing.webp';
	import rinkuScreenshotAdmin from '$lib/screenshots/rinku-admin.webp?enhanced';
	import rinkuScreenshotShortener from '$lib/screenshots/rinku-shortener.webp';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="rinku">
	{#snippet title()}
		<img src={Rinku} alt="Rinku" class="my-4 h-16" />
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'templ', 'tailwind']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={rinkuScreenshotLanding} alt="Rinku" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={rinkuScreenshotShortener} alt="Rinku" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		<p>
			SaaS URL shorteners create spammy-looking links. Wanted a simple shortener using my own domain for more trusted,
			branded links.
		</p>
	{/snippet}

	{#snippet built()}
		<p>URL shortener with admin panel. Uses custom domain to avoid the spam-link look of bit.ly, tinyurl, etc.</p>
	{/snippet}
</ProjectEntry>
