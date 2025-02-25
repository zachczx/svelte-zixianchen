<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
</script>

<ProjectEntry id="apptitude">
	{#snippet title()}<a href="https://titude.app/" aria-label="Apptitude webapp"
			><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class=""></enhanced:img></a
		>{/snippet}
	{#snippet stack()}
		<StackComponents names={['sveltekit', 'tailwind', 'greensock', 'pagefind']} />
		<!-- <div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Sveltekit} class="h-8" alt="Sveltekit" title="Sveltekit" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" title="Tailwind" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Greensock} class="h-8" alt="Gsap" title="Gsap" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Pagefind} class="h-8" alt="Pagefind" title="Pagefind" />
		</div> -->
	{/snippet}

	{#snippet problem()}How might I help my non-technical teammates access to vast repositories of free-to-access
		knowledge to gain tech-related competencies?{/snippet}

	{#snippet want()}Display lists of tech resources from Youtube, blogs, tutorials, courses, sorted by tech competency.{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Static Website</li>
			<li>Used JS objects to store/read info</li>
			<li>I felt CMS, DB, markdown files were unnecessary overhead</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Adding and making learning plans the front and center to learning</li>
			<li>Tailoring suggested resources based on said learning plan.</li>
		</ul>
	{/snippet}
</ProjectEntry>
