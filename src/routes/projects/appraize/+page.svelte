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
			<enhanced:img src={AppraizeScreenshotMain} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={AppraizeScreenshotWide} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={AppraizeScreenshotSaved} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={AppraizeScreenshotLock} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={AppraizeScreenshotUpload} alt="Appraize app" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet problem()}
		HR ranking sessions in Excel were slow. Every change required manual reordering of numbered lists.
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Drag-and-drop ranking tool with session management, CSV bulk import, auto-save, and permission controls. Replaced
			the Excel workflow entirely.
		</p>
		<p>
			First built as Rank-a-Mate with Django/HTMX. Rebuilt to add better permissions, auto-save, and bulk operations.
		</p>
	{/snippet}
</ProjectEntry>
