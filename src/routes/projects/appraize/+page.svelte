<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';

	import AppraizeScreenshotLock from '$lib/screenshots/appraize-lock.webp?enhanced';
	import AppraizeScreenshotMain from '$lib/screenshots/appraize-main.webp?enhanced';
	import AppraizeScreenshotResults from '$lib/screenshots/appraize-results.webp?enhanced';
	import AppraizeScreenshotResults2 from '$lib/screenshots/appraize-results-2.webp?enhanced';
	import AppraizeScreenshotSaved from '$lib/screenshots/appraize-saved.webp?enhanced';
	import AppraizeScreenshotUpload from '$lib/screenshots/appraize-upload.webp?enhanced';
	import AppraizeScreenshotWide from '$lib/screenshots/appraize-wide.webp?enhanced';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="appraize">
	{#snippet header()}
		<!-- <enhanced:img src={AbbreviationScreenShotHeader} alt="Abbreviation app" class="object-fit" /> -->
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={AppraizeScreenshotMain}
					alt="Appraize app"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={AppraizeScreenshotWide}
					alt="Appraize app"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}
	{#snippet title()}
		<a href="https://appraize.zixian.dev/"
			><h3 class="mb-1 text-center font-sans text-5xl font-black tracking-tighter text-[#A94A4A] lg:text-7xl">
				Appraize
			</h3></a>
	{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'sortable', 'drizzle', 'tailwind', 'coolify', 'postgresql']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={AppraizeScreenshotSaved} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={AppraizeScreenshotLock} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={AppraizeScreenshotUpload} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}How might we speed up ranking sessions, which need manual selection to form a numbered list "1, 2,
		3..." on Excel. Every change to the list required manual reordering.{/snippet}

	{#snippet want()}<AlignCenterText>Speed up ranking sessions via drag & drop.</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Drag & drop of officers and additional info</li>
			<li>Sessions, with dashboard, filters, & charts</li>
			<li>CRUD - Create, Read, Update, Delete - sessions & entries</li>
			<li>Permission setting to manage other users' access</li>
			<li>QOL stuff - auto sort, auto save progress, CSV upload for bulk adding</li>
			<li>Typical form actions, validation</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<AlignCenterText>Responsive design. It can't go below ~1200px width without looking awful.</AlignCenterText>
	{/snippet}
</ProjectEntry>
