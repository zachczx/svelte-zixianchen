<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import { descriptions } from '$lib/ProjectDescriptions';
	import DashboardIcon from '~icons/material-symbols/dashboard-2-outline';
	import ProgressIcon from '~icons/material-symbols/progress-activity';
	import ArchiveIcon from '~icons/material-symbols/archive-outline';

	let { data, children } = $props();

	const ongoing = Object.entries(descriptions).filter(([, p]) => !p.archived);
	const archived = Object.entries(descriptions).filter(([, p]) => p.archived);
</script>

<Nav navCurrent="projects" />
<div class="bg-base-200 grid min-h-dvh content-start p-4 lg:grid-cols-[auto_1fr] lg:grid-rows-[1fr_auto]">
	<aside class="text-base-content/70 z-2 row-span-2 hidden content-start border-2 border-red-300/0 px-1 lg:grid">
		<a href="/#projects"
			><h4 class="flex items-center gap-4 px-2 py-2 font-bold">
				<DashboardIcon class="size-[1.3em]" />
				All Projects
			</h4></a>
		<h4 class="mt-8 flex items-center gap-4 px-2 py-2 font-bold">
			<ProgressIcon class="size-[1.3em]" />Ongoing
		</h4>
		<ul class="border-l-4 border-l-transparent ps-0.5 font-medium">
			{#each ongoing as [slug, project]}
				<a href="/projects/{slug}"
					><li
						class="active:bg-neutral/80 hover:bg-neutral/70 my-0.5 rounded-lg py-2 ps-10 pe-6 hover:text-white/90 {data.slug ===
						slug
							? 'bg-neutral/85 text-white/90'
							: ''}">
						{project.name}
					</li></a>
			{/each}
		</ul>
		<h4 class="mt-8 flex items-center gap-4 px-2 py-2 font-bold">
			<ArchiveIcon class="size-[1.3em]" />Archived
		</h4>
		<ul class="ms-4 border-l-4 border-l-transparent ps-0.5 font-medium">
			{#each archived as [slug, project]}
				<a href="/projects/{slug}"
					><li
						class="active:bg-neutral/80 hover:bg-neutral/70 my-0.5 rounded-lg px-6 py-2 hover:text-white/90 {data.slug ===
						slug
							? 'bg-neutral/85 text-white/90'
							: ''}">
						{project.name}
					</li></a>
			{/each}
		</ul>
	</aside>
	<section id="projects" class="lg:ps-1.5">
		{@render children()}
	</section>
	<div class="bg-base-200 lg:col-span-1"><WebsiteFooter /></div>
</div>
