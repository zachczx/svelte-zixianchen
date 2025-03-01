<script>
	let { data } = $props();
	import changeDateFormat from '$lib/BlogDate';
	let content = $state(data.content);
</script>

<svelte:head>
	<title>{data.metadata.title} | Zixian's Blog</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>
<h1 class="px-3 py-1 text-2xl font-medium sm:px-6 xl:px-14 xl:text-5xl">{data.metadata.title}</h1>
<div class="text-medium text-base-content/60 px-3 sm:px-6 xl:px-14">
	{changeDateFormat(data.metadata.date)}
	{#if data.metadata.date_updated}
		<span class="ms-2">(Updated: {changeDateFormat(data.metadata.date_updated)})</span>
	{/if}
</div>
<article
	class="prose prose-a:font-semibold prose-a:text-orange-600 prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-orange-400 prose-blockquote:my-8 prose-blockquote:ms-8 prose-code:font-['Fira_Code_Variable'] prose-pre:p-0 mt-6 w-screen px-3 sm:px-6 md:max-w-none lg:mt-10 lg:max-w-[1024px] xl:w-[1024px] xl:px-14">
	{#if content}
		{@const Component = content}
		<Component />
	{/if}
</article>
<div class="flex items-center gap-4 px-3 pt-10 text-gray-600 sm:px-6 lg:pt-20 xl:px-14">
	<div>Tags:</div>
	<div class="flex items-center gap-2">
		{#each data.metadata.tags as tag}<span class="border-neutral/40 border px-2 py-0.5">{tag}</span>{/each}
	</div>
</div>

<!-- Prevents vite from removing it when tree shaking -->
<span class="line highlighted add remove diff hidden"></span>
<!-- Prevents vite from removing it when tree shaking -->
