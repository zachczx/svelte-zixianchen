<script>
	let { data } = $props();
	import changeDateFormat from '$lib/BlogDate';
</script>

<svelte:head>
	<title>{data.metadata.title} | Zixian's Blog</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>
<h1 class="px-3 py-1 text-2xl sm:px-6 xl:text-4xl">{data.metadata.title}</h1>
<div class="text-medium px-3 sm:px-6">
	{changeDateFormat(data.metadata.date)}
	{#if data.metadata.date_updated}
		<span class="ms-2">(Updated: {changeDateFormat(data.metadata.date_updated)})</span>
	{/if}
</div>
<article
	class="prose mt-6 w-screen px-3 prose-a:font-semibold prose-a:text-orange-600 prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-orange-400 prose-blockquote:my-8 prose-blockquote:ms-8 prose-code:font-['Fira_Code_Variable'] prose-pre:p-0 sm:px-6 md:max-w-none lg:mt-10 xl:w-[1024px]">
	<svelte:component this={data.content} />
</article>
<div class="px-3 pt-10 text-gray-600 sm:px-6 lg:pt-20">
	Tags: {#each data.metadata.tags as tag}<span class="me-2 border border-neutral px-2 py-1">{tag}</span>{/each}
</div>

<!-- Prevents vite from removing it when tree shaking -->
<span class="line highlighted add remove diff hidden"></span>
<!-- Prevents vite from removing it when tree shaking -->
