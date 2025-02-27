<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
</script>

<ProjectEntry id="btonomics">
	{#snippet title()}
		<a href="https://btonomics.com"
			><h3 class="pb-4 text-center font-serif text-5xl font-bold text-[#38bdf8] lg:text-7xl">BTOnomics</h3></a
		>{/snippet}
	{#snippet stack()}
		<StackComponents names={['astro', 'tailwind', 'pagefind']} />
	{/snippet}

	{#snippet problem()}I lost interest in Wordpress and shared hosting. PHP, plugins/themes, huge MySQL database felt too
		legacy. Wordpress still felt bloated on a VPS, compared to what I felt was achievable with e.g. Astro, Hugo, Gatsby,
		Eleventy.
	{/snippet}

	{#snippet want()}
		I wanted to rebuild BTOnomics with AstroJS. I saw all the praises and wanted to try it out. I'm happy with Astro.
		It's indeed good for content-first sites. It's fast. I also like native markdown support, view transitions, shipping
		HTML/CSS first.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Migrated to AstroJS as a static site.</li>
			<li>Used ChatGPT to convert WordPress html/shortcode to markdown.</li>
			<li>Recently did some rewriting to convert to Astro 5's Content Layer API.</li>
			<li>Added QOL stuff like tag filtering and text search.</li>
		</ul>
	{/snippet}

	{#snippet undone()}Didn't recreate Wordpress' social features, especially comments. But I don't want/need it, neither
		does the blog.{/snippet}
</ProjectEntry>
