<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import AbbreviationScreenShotHeader from '$lib/screenshots/abbreviation-header.webp?enhanced';
	import AbbreviationScreenShot1 from '$lib/screenshots/abbreviation-1.webp?enhanced';
	import AbbreviationScreenShot2 from '$lib/screenshots/abbreviation-2.webp?enhanced';
	import AbbreviationScreenShot3 from '$lib/screenshots/abbreviation-3.webp?enhanced';
	import AbbreviationScreenShot4 from '$lib/screenshots/abbreviation-4.webp?enhanced';
</script>

<ProjectEntry id="abbreviation">
	{#snippet header()}
		<!-- <enhanced:img src={AbbreviationScreenShotHeader} alt="Abbreviation app" class="object-fit" /> -->
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={AbbreviationScreenShot3}
					alt="Abbreviation app"
					class="rounded-xl transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={AbbreviationScreenShot4}
					alt="Abbreviation app"
					class="rounded-xl transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}
	{#snippet title()}
		<h3 class="text-center text-5xl font-bold tracking-tighter text-[#0069ff] lg:text-7xl">
			Abbreviati<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				class="-mx-[0.2em] inline"
				viewBox="0 0 24 24"
				><g fill="none"
					><path
						fill="#0069ff"
						fill-opacity=".25"
						fill-rule="evenodd"
						d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14M10.087 7.38A5 5 0 0 1 12 7a.5.5 0 0 0 0-1a6 6 0 0 0-6 6a.5.5 0 0 0 1 0a5 5 0 0 1 3.087-4.62"
						clip-rule="evenodd" /><path stroke="#0069ff" stroke-linecap="round" d="M20.5 20.5L17 17" /><circle
						cx="11"
						cy="11"
						r="8.5"
						stroke="#0069ff" /></g
				></svg
			>n
		</h3>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'htmx', 'tailwind', 'sqlite', 'templ']} />
	{/snippet}

	<!-- {#snippet screenshots()}
		<div class="grid grid-cols-2 gap-4">
			<enhanced:img src={AbbreviationScreenShot1} alt="Abbreviation app" class="rounded-xl" />
			<enhanced:img src={AbbreviationScreenShot2} alt="Abbreviation app" class="rounded-xl" />
		</div>
	{/snippet} -->

	{#snippet problem()}
		<p class="mb-4">
			Newer employees in large organizations waste time looking up acronyms and abbreviations. There're a few PDFs with
			acronyms lying around on the Intranet, but they are hard to find and difficult to use.
		</p>
		<p class="mb-4">
			As a result, new hires can feel lost and less engaged while adjusting to a new environment. They can ask a
			colleague, but many don't, because it can feel like you're bothering others.
		</p>
	{/snippet}

	{#snippet want()}
		I wanted to build a lightweight search app for abbreviations. There were already a few JS side projects by
		individual civil servants, but I wanted to make a faster one with Go.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>A search app and database of abbreviations & acronyms in Go.</li>
			<li>Focused on being minimal, fast, and usable.</li>
			<li>Uses full-text search and fuzzy matching (Jaro-Winkler and Metaphone [Phonetic]).</li>

			<li>Experimented with Levenshtein, Jaccard, Aho Corasick, Jaccard, Beider-Morse, Soundex.</li>
			<li>Implemented backend admin features for identifying duplicate entries.</li>
			<li>
				Interesting to learn Go, Docker, Makefile, Templ and tooling outside of JS meta frameworks (Air, Tailwind,
				Esbuild, Prettier).
			</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Users say a tagging feature will be useful, but is too much work for now.</li>
			<li>
				Semantic-based search would be fun to implement (e.g., searching CEO of ministry should ideally return
				Minister/PS)
			</li>
			<li>If this scales way bigger (or maybe just for fun) - trying Minhash and Bloom filters</li>
			<li>
				Adding Valkey makes it slower than just using SQLite, but I'd love to continue trying ways to cache expensive
				results/queries.
			</li>
		</ul>
	{/snippet}
</ProjectEntry>

<style>
</style>
