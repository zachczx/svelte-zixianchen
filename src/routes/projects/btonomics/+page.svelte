<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';

	import btonomicsScreenshotMain from '$lib/screenshots/btonomics-main.webp?enhanced';
	import btonomicsScreenshotPost from '$lib/screenshots/btonomics-post.webp?enhanced';
	import btonomicsScreenshotPost2 from '$lib/screenshots/btonomics-post2.webp?enhanced';
	import btonomicsScreenshotPost3 from '$lib/screenshots/btonomics-post3.webp?enhanced';
	import btonomicsScreenshotSearch from '$lib/screenshots/btonomics-search.webp?enhanced';
</script>

<ProjectEntry id="btonomics">
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={btonomicsScreenshotMain}
					alt="Appraize app"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={btonomicsScreenshotPost}
					alt="Appraize app"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}
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

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={btonomicsScreenshotMain} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={btonomicsScreenshotPost2} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={btonomicsScreenshotPost3} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={btonomicsScreenshotSearch} alt="Btonomics" class="border-neutral/20 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet want()}
		<p class="mb-4">
			I wanted to rebuild BTOnomics with AstroJS. I wanted to try a framework that's great for content-heavy sites.
		</p>
		<p>
			I'm happy with Astro. It's indeed good for content-first sites. It's fast. I also like native markdown support,
			view transitions, shipping HTML/CSS first.
		</p>
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
