<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import Rinku from '$lib/logos/rinku-logo.svg?dataurl';

	import rinkuScreenshotLanding from '$lib/screenshots/rinku-landing.webp';
	import rinkuScreenshotAdmin from '$lib/screenshots/rinku-admin.webp';
	import rinkuScreenshotShortener from '$lib/screenshots/rinku-shortener.webp';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="rinku">
	{#snippet title()}
		<img src={Rinku} alt="Rinku" class="my-4 h-16" />
	{/snippet}
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<img
					src={rinkuScreenshotLanding}
					alt="Rinku app"
					class="transition-all delay-75 duration-300 ease-out hover:scale-200" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<img
					src={rinkuScreenshotShortener}
					alt="Rinku app"
					class="transition-all delay-75 duration-300 ease-out hover:scale-200" />
			</div>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'templ', 'tailwind']} />
	{/snippet}

	{#snippet problem()}
		<p>
			Some of my links are too long to remember easily. I didn't want to use a SaaS url shortener as their links often
			look like spam.
		</p>
	{/snippet}

	{#snippet want()}
		<AlignCenterText
			>A URL shortener that's fast, no frills, and can use one of the shorter domain names I own.
		</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>URL shortener</li>
			<li>Admin panel</li>
		</ul>
		<img src={rinkuScreenshotAdmin} alt="Rinku app" class="border-neutral/20 mt-4 rounded-xl border" />
	{/snippet}
	{#snippet undone()}
		<AlignCenterText>Load balancing? Idk.</AlignCenterText>
	{/snippet}
</ProjectEntry>
