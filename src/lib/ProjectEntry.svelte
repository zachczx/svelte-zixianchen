<script lang="ts">
	import { type Snippet } from 'svelte';
	interface ProjectEntryProps {
		id: string;
		title: Snippet;
		stack?: Snippet;
		problem?: Snippet;
		want?: Snippet;
		built?: Snippet;
		undone?: Snippet;
		imgPrimary?: string;
		imgSecondary?: string;
		children: Snippet;
	}
	let {
		id = '',
		title,
		stack,
		problem,
		want,
		built,
		undone,
		imgPrimary,
		imgSecondary,
		children,
	}: ProjectEntryProps = $props();
</script>

<div {id} class="project grid content-center justify-items-center px-2 py-8 lg:min-h-[90vh] lg:py-20">
	<div class="grid max-w-[1200px] gap-8">
		<div class="flex justify-center">{@render title()}</div>

		{#if stack}
			<div class="flex w-full flex-wrap justify-center gap-4">
				{@render stack()}
			</div>
		{/if}

		<div class="grid grid-cols-2 gap-4">
			{#if imgPrimary}<img src={imgPrimary} alt="App" class="inline-block" />{/if}
			{#if imgSecondary}<img src={imgSecondary} alt="App" class="inline-block" />{/if}
		</div>

		<div class="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-16 lg:text-lg xl:text-xl">
			{#if problem}
				<h3 class="text-3xl text-base-content/70 lg:text-4xl">Problem</h3>
				<div>
					{@render problem()}
				</div>
			{/if}
			{#if want}
				<h3 class="text-3xl text-base-content/70 lg:text-4xl">What I wanted</h3>
				<div>
					{@render want()}
				</div>
			{/if}
			{#if built}
				<h3 class="text-3xl text-base-content/70 lg:text-4xl">What I built</h3>
				<div>{@render built()}</div>
			{/if}
			{#if undone}
				<h3 class="text-3xl text-base-content/70 lg:text-4xl">Not yet done</h3>
				<div>{@render undone()}</div>
			{/if}
		</div>
	</div>
</div>
