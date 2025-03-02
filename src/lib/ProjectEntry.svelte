<script lang="ts">
	import { type Snippet } from 'svelte';
	import { descriptions, type ProjectDescriptions } from './ProjectDescriptions';
	interface ProjectEntryProps {
		id: string;
		header: Snippet;
		title: Snippet;
		screenshots: Snippet;
		stack?: Snippet;
		problem?: Snippet;
		want?: Snippet;
		built?: Snippet;
		undone?: Snippet;
		more?: Snippet;
		takeaway?: Snippet;
		children?: Snippet;
	}
	let {
		id = '',
		header,
		title,
		screenshots,
		stack,
		problem,
		want,
		built,
		undone,
		more,
		takeaway,
		children,
	}: ProjectEntryProps = $props();

	let subtitle = $state('');
	let tldr = $state('');
	let url = $state('');

	if (id) {
		for (const project in descriptions) {
			if (project === id) {
				subtitle = descriptions[project].subtitle;
				url = descriptions[project].url;
				if (descriptions[project].tldr) {
					tldr = descriptions[project].tldr;
				}
			}
		}
	}
</script>

<div {id} class="project grid content-center justify-items-center px-2 lg:min-h-[90vh] lg:px-8 lg:pb-32">
	<div class="grid content-center justify-items-center text-center">
		<a href={url}>{@render title()}</a>
		<p class="text-base-content/70 italic">{subtitle}</p>
	</div>
	{#if header}
		<div class="py-8">
			{@render header()}
		</div>
	{/if}
	<div class="bg-base-200 grid max-w-[1000px] pt-24">
		<div class="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-x-16 lg:gap-y-24">
			{#if tldr}
				<h3 class="text-4xl font-bold">TL;DR</h3>
				<div>
					{tldr}
				</div>
			{/if}
			{#if problem}
				<h3 class="text-4xl font-bold">Problem</h3>
				<div>
					{@render problem()}
				</div>
			{/if}
			{#if want}
				<h3 class="text-4xl font-bold">Idea</h3>
				<div>
					{@render want()}
				</div>
			{/if}
			{#if stack}
				<h3 class="text-4xl font-bold">Stack</h3>
				<div class="flex flex-wrap gap-4">
					{@render stack()}
				</div>
			{/if}
			{#if screenshots}
				<h3 class="text-4xl font-bold">Look</h3>
				<div>{@render screenshots()}</div>
			{/if}
			{#if built}
				<h3 class="text-4xl font-bold">What I built</h3>
				<div>{@render built()}</div>
			{/if}
			{#if undone}
				<h3 class="text-4xl font-bold">Not yet done</h3>
				<div>{@render undone()}</div>
			{/if}
			{#if more}
				<h3 class="text-4xl font-bold">See</h3>
				<div>{@render more()}</div>
			{/if}
			{#if takeaway}
				<h3 class="text-4xl font-bold">Takeaway</h3>
				<div>{@render takeaway()}</div>
			{/if}
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
</div>
