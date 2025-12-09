<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import btonomicsScreenshotMain from '$lib/screenshots/btonomics-main.webp?enhanced';
	import btonomicsScreenshotPost from '$lib/screenshots/btonomics-post.webp?enhanced';
	import btonomicsScreenshotPost2 from '$lib/screenshots/btonomics-post2.webp?enhanced';
	import btonomicsScreenshotSearch from '$lib/screenshots/btonomics-search.webp?enhanced';
</script>

<ProjectEntry id="btonomics">
	{#snippet title()}
		<a href="https://btonomics.com"
			><h3 class="pb-4 text-center font-serif text-5xl font-bold text-[#38bdf8] lg:text-7xl">BTOnomics</h3></a
		>{/snippet}
	{#snippet stack()}
		<StackComponents names={['astro', 'tailwind', 'pagefind']} />
	{/snippet}

	{#snippet problem()}
		WordPress felt bloated for a simple blog. Outgrew shared hosting. PHP, MySQL, plugins were too much overhead and
		outdated.
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={btonomicsScreenshotMain} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={btonomicsScreenshotPost} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={btonomicsScreenshotPost2} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={btonomicsScreenshotSearch} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Started as WordPress blog in 2018, rebuilt with AstroJS as static site for performance. Full-text search, tag
			filtering. ChatGPT converted WordPress shortcodes to markdown. Recently migrated to Astro 5's Content Layer API.
		</p>
		<p>
			Deliberately skipped WordPress's social features like comments, user accounts. The blog doesn't need engagement
			infrastructure, since I just wanted to write for people who wanted the content, not a social platform.
		</p>
	{/snippet}
</ProjectEntry>
