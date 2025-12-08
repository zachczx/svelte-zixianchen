<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import AbbreviationMain from '$lib/screenshots/abbreviation-main.webp?enhanced';
	import AbbreviationAll from '$lib/screenshots/abbreviation-all.webp?enhanced';
	import AbbreviationSearch from '$lib/screenshots/abbreviation-search.webp?enhanced';
</script>

<ProjectEntry id="abbreviation">
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

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={AbbreviationMain} alt="Abbreviation app" class="rounded-xl" />
			<enhanced:img src={AbbreviationAll} alt="Abbreviation app" class="rounded-xl" />
			<enhanced:img src={AbbreviationSearch} alt="Abbreviation app" class="rounded-xl" />
		</div>
	{/snippet}

	{#snippet problem()}
		New employees waste time looking up acronyms. Existing PDFs are scattered across the intranet and hard to search.
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Fast search app for organizational abbreviations using full-text search with fuzzy matching (Jaro-Winkler and
			Metaphone). Explored multiple algorithms (Levenshtein, Soundex, Aho-Corasick) to optimize for typos and phonetic
			similarity.
		</p>
		<p class="mb-4">
			Tested Valkey for caching expensive queries but found SQLite faster for this scale. Looked into Minhash and Bloom
			filters for potential scaling, though the current dataset doesn't need them yet.
		</p>
		<p>Includes admin tools to identify and merge duplicate entries.</p>
	{/snippet}
</ProjectEntry>

<style>
</style>
