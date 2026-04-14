<script lang="ts">
	import MaterialSymbolsSubdirectoryArrowRightRounded from '~icons/material-symbols/subdirectory-arrow-right-rounded';
	import dayjs from 'dayjs';

	let { data } = $props();
	let content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.metadata.title} | Zixian's Blog</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>
<h1 class="px-3 py-1 text-2xl font-black sm:px-6 xl:px-14 xl:text-5xl">{data.metadata.title}</h1>
<div
	class="text-base-content/62 grid gap-1 px-3 font-mono text-sm font-medium tracking-tight sm:px-6 lg:flex lg:items-center lg:gap-6 xl:px-14">
	<div class="flex items-baseline gap-0.5 lg:items-center">
		<MaterialSymbolsSubdirectoryArrowRightRounded class="size-[0.9em]" /><span
			>{dayjs(data.metadata.date).format('D MMM YYYY')}</span>
	</div>
	{#if data.metadata.date_updated}
		<div class="flex items-baseline gap-0.5 lg:items-center">
			<MaterialSymbolsSubdirectoryArrowRightRounded class="size-[0.9em]" /><span
				>Updated {dayjs(data.metadata.date_updated).format('D MMM YYYY')}</span>
		</div>
	{/if}
	<div class="flex items-baseline gap-0.5 lg:items-center">
		<MaterialSymbolsSubdirectoryArrowRightRounded class="size-[0.9em]" />
		<p>{data.readingTime} min read</p>
	</div>
	<div class="flex items-baseline gap-0.5 lg:items-center">
		<MaterialSymbolsSubdirectoryArrowRightRounded class="size-[0.9em]" /><span>{data.metadata.tags.join(', ')}</span>
	</div>
</div>
<article
	class="prose prose-a:font-semibold prose-a:decoration-1 prose-a:underline-offset-3 prose-a:hover:text-orange-700 prose-blockquote:my-8 prose-blockquote:ms-8 prose-code:font-mono prose-pre:p-0 mt-6 w-screen px-3 sm:px-6 md:max-w-none lg:mt-10 lg:max-w-5xl xl:w-5xl xl:px-14">
	{#if content}
		{@const Component = content}
		<Component />
	{/if}
</article>

<!-- Prevents vite from removing it when tree shaking -->
<span class="line highlighted add remove diff hidden"></span>
<!-- Prevents vite from removing it when tree shaking -->
