<script lang="ts">
	let { data } = $props();
	import dayjs from 'dayjs';

	let content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.metadata.title} | Zixian's Blog</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>
<h1 class="px-3 py-1 text-2xl font-medium sm:px-6 xl:px-14 xl:text-5xl">{data.metadata.title}</h1>
<div class="text-medium text-base-content/60 flex items-center gap-4 px-3 sm:px-6 xl:px-14">
	<span>{dayjs(data.metadata.date).format('D MMM YYYY')}</span>
	•
	{#if data.metadata.date_updated}
		<span class="ms-2">(Updated: {dayjs(data.metadata.date_updated).format('D MMM YYYY')})</span>•
	{/if}

	<p>{data.readingTime} min read</p>
</div>
<article
	class="prose prose-a:font-semibold prose-a:text-orange-600 prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-orange-400 prose-blockquote:my-8 prose-blockquote:ms-8 prose-code:font-['Fira_Code_Variable'] prose-pre:p-0 mt-6 w-screen px-3 sm:px-6 md:max-w-none lg:mt-10 lg:max-w-5xl xl:w-5xl xl:px-14">
	{#if content}
		{@const Component = content}
		<Component />
	{/if}
</article>
<div class="text-base-content/50 flex items-center gap-4 px-3 pt-10 sm:px-6 lg:pt-20 xl:px-14">
	<div>Tags:</div>
	<div class="flex items-center gap-2">
		{#each data.metadata.tags as tag}<span class="border-neutral/40 border px-2 py-0.5">{tag}</span>{/each}
	</div>
</div>

<!-- Prevents vite from removing it when tree shaking -->
<span class="line highlighted add remove diff hidden"></span>
<!-- Prevents vite from removing it when tree shaking -->
