<script>
	import ProjectShell from '$lib/ProjectShell.svelte';
	import AbbreviationHome from '$lib/screenshots/abbreviation/home.png?enhanced&w=1600';
	import AbbreviationSearch from '$lib/screenshots/abbreviation/search.png?enhanced&w=1600';
	import AbbreviationExplore from '$lib/screenshots/abbreviation/explore.png?enhanced&w=1600';
	import AbbreviationExploreHistory from '$lib/screenshots/abbreviation/explore2.png?enhanced&w=1600';

	const stack = [
		{ role: 'Frontend', tools: 'htmx, Templ' },
		{ role: 'Backend', tools: 'Go, embedded JSON' },
		{ role: 'Analytics', tools: 'PostgreSQL' },
	];
</script>

<ProjectShell
	name="Abbreviation"
	accent="#475569"
	accentInk="#1e293b"
	eyebrow="Singapore Government terminology"
	headline="The glossary I wish I had when I started work."
	sub="It began as a list of acronyms and gradually grew into a searchable reference for 3,100+ abbreviations, service names and other terms used across the Singapore Government."
	url="https://abbreviation.zixian.dev"
	{stack}>
	{#snippet wordmark()}
		<h2 class="text-4xl font-extrabold tracking-tighter text-[#475569] lg:text-5xl">Abbreviation</h2>
	{/snippet}

	{#snippet hero()}
		<div class="border-neutral/20 aspect-2/1 overflow-hidden border-2 shadow-sm">
			<enhanced:img
				src={AbbreviationHome}
				alt="Abbreviation landing page for searching Singapore Government terminology"
				class="h-full w-full object-cover object-center" />
		</div>
	{/snippet}

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">It started with onboarding</p>
		<div class="text-base-content/85 mt-4 grid max-w-3xl gap-4 leading-relaxed">
			<p class="text-2xl leading-snug font-bold">
				When I joined, documents and conversations were full of abbreviations I did not know.
			</p>
			<p>
				Colleagues described the same experience, and internal employee surveys also pointed to unfamiliar terminology
				as a particular pain point during onboarding.
			</p>
			<p>
				The available references were scattered across PDFs, Word documents and intranet pages, so I started collecting
				the terms in one place. It remained a personal project, but eventually became useful enough to be linked from an
				internal onboarding guide.
			</p>
		</div>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">The list grew</p>
		<div class="text-base-content/85 mt-4 grid max-w-3xl gap-4 leading-relaxed">
			<p>
				I began with a couple of small compilations that other people had put together, then kept adding terms as I
				encountered them. Those starting lists now make up a relatively small part of the catalog, which later grew
				through manual additions and LLM-assisted research.
			</p>
			<p>
				Gahmen loves acronyms, and not always the tidy kind made from the first letter of every word. Like GeBIZ
				compresses “Government Electronic Business”, or HRPS. Branded names such as ServiceSG, LifeSG and FormSG belong
				to the same working vocabulary even though they follow a different naming pattern.
			</p>
			<p>
				The project gradually became a glossary of Singapore Government terminology rather than a conventional acronym
				list.
			</p>
		</div>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">Making rough searches work</p>
		<div class="text-base-content/85 mt-4 grid max-w-3xl gap-4 leading-relaxed">
			<p>
				Exact search became less useful as the list grew. Someone might remember a few letters, part of a phrase or
				roughly how a name sounded, so I wanted the search to cope with that.
			</p>
			<p>
				I tried several matching approaches and eventually kept Jaro-Winkler and Metaphone because they behaved
				reasonably on this dataset. Exact matches still lead, while fuzzy and phonetic matching make incomplete or
				misspelled searches more useful.
			</p>
		</div>
		<enhanced:img
			src={AbbreviationSearch}
			alt="Five meanings of DC grouped across five Singapore Government domains"
			class="border-neutral/20 mt-5 block w-full border-2 shadow-sm" />
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">Something else to do with the data</p>
		<div class="text-base-content/85 mt-4 grid max-w-3xl gap-4 leading-relaxed">
			<p>
				Once the entries had subject areas, statuses and relationships, it seemed a waste to expose them only through a
				search box. I added Explore to group the data in a few useful ways: terms with several meanings, abbreviations
				used across different fields, similar-looking names and older terms alongside their replacements.
			</p>
			<p>
				It is mostly another way to browse data I already had, but it has made the project feel more like a glossary
				than a lookup box.
			</p>
		</div>
		<div class="mt-5 grid gap-5">
			<enhanced:img
				src={AbbreviationExplore}
				alt="Explore view grouping similar-looking Singapore Government abbreviations"
				class="border-neutral/20 block w-full border-2 shadow-sm" />
			<enhanced:img
				src={AbbreviationExploreHistory}
				alt="Explore view connecting former Singapore Government names with their successors"
				class="border-neutral/20 block w-full border-2 shadow-sm" />
		</div>
	</section>

	<section class="border-neutral/10 border-t py-12">
		<p class="text-xs tracking-wide" style="color: var(--accent-ink)">Using LLMs to help with curation</p>
		<div class="text-base-content/85 mt-4 grid max-w-3xl gap-4 leading-relaxed">
			<p>
				Adding terms and filling in their context by hand had become slow. LLM agents made it practical to search for
				possible additions and draft metadata such as descriptions, subject areas, lifecycle status and sources.
			</p>
			<p>
				New and enriched entries go through an agent review pass followed by a scan from me. Source and verification
				fields help me keep track of entries that have been checked against an official reference.
			</p>
			<p>
				The live search remains deterministic and runs over the embedded catalog. The AI agentic work supports the
				research and maintenance process around it.
			</p>
		</div>
	</section>
</ProjectShell>
