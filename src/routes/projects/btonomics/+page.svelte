<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import btonomicsMain from '$lib/screenshots/btonomics/main.png?enhanced';
	import btonomicsPost from '$lib/screenshots/btonomics/post.png?enhanced';
	import btonomicsSearch from '$lib/screenshots/btonomics/search.png?enhanced';
	import btonomicsTopics from '$lib/screenshots/btonomics/topics.png?enhanced';
</script>

<ProjectEntry id="btonomics">
	{#snippet title()}
		<a href="https://btonomics.com"
			><h3 class="pb-4 text-center font-serif text-5xl font-bold text-[#6b7e56] lg:text-7xl">BTOnomics</h3></a
		>{/snippet}
	{#snippet stack()}
		<StackComponents names={['astro', 'pagefind']} />
	{/snippet}

	{#snippet problem()}
		WordPress felt bloated for a simple blog. Outgrew shared hosting. PHP, MySQL, plugins were too much overhead and
		outdated.
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img
				src={btonomicsMain}
				alt="BTOnomics landing"
				class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img
				src={btonomicsTopics}
				alt="BTOnomics topics"
				class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img src={btonomicsPost} alt="BTOnomics post" class="border-neutral/20 rounded-xl border-2 shadow-xl" />
			<enhanced:img
				src={btonomicsSearch}
				alt="BTOnomics search"
				class="border-neutral/20 rounded-xl border-2 shadow-xl" />
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
