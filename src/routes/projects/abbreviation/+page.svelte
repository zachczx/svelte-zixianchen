<script>
	import ProjectShell from '$lib/ProjectShell.svelte';
	import AbbreviationMain from '$lib/screenshots/abbreviation/main-cropped.webp?enhanced&w=1100&quality=90';
	import AbbreviationList from '$lib/screenshots/abbreviation/list.png?enhanced&w=1000&quality=90';

	const stack = [
		{ role: 'Frontend', tools: 'htmx, Templ' },
		{ role: 'Backend', tools: 'Go, SQLite' },
	];
</script>

<ProjectShell
	name="Abbreviation"
	accent="#0069ff"
	accentInk="#0052CC"
	eyebrow="Singapore Government acronym search"
	headline="The acronym search that forgives your typos."
	sub="Thousands of Singapore Government abbreviations in one fast lookup, with fuzzy and phonetic matching so a rough guess still lands on the right entry."
	url="https://abbreviation.zixian.dev"
	{stack}>
	{#snippet wordmark()}
		<h2 class="text-4xl font-extrabold tracking-tighter text-[#0069ff] lg:text-5xl">
			Abbreviati<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				class="mx-[-0.2em] inline"
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
		</h2>
	{/snippet}

	{#snippet hero()}
		<div class="border-neutral/20 aspect-2/1 overflow-hidden border-2 shadow-sm">
			<enhanced:img
				src={AbbreviationMain}
				alt="Abbreviation landing, a search box over Singapore Government acronyms"
				class="h-full w-full object-cover object-center" />
		</div>
	{/snippet}

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">Problem</p>
		<p class="mt-3 max-w-3xl text-2xl leading-snug font-bold">
			New officers lose real time hunting acronyms, and the reference PDFs are scattered across the intranet and barely
			searchable.
		</p>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">How it works</p>
		<div class="text-base-content/85 mt-4 grid max-w-2xl gap-4 leading-relaxed">
			<p>
				Full-text search with fuzzy matching, Jaro-Winkler for typos and Metaphone for phonetic near-misses. I worked
				through Levenshtein, Soundex, and Aho-Corasick before settling on the pair that handled real searches best.
			</p>
			<p>
				I tested Valkey for caching the expensive queries, but SQLite turned out faster at this scale, so it stayed. I
				also looked at MinHash and Bloom filters for scaling, though the dataset doesn't need it yet.
			</p>
			<p>Admin tools find and merge the duplicate entries that creep in over time.</p>
		</div>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">A look inside</p>
		<enhanced:img
			src={AbbreviationList}
			alt="Abbreviation results list showing Singapore Government acronyms"
			class="border-neutral/20 mt-5 block w-full max-w-3xl border-2 shadow-sm" />
	</section>
</ProjectShell>
