<script>
	let { data } = $props();
	import changeDateFormat from '$lib/BlogDate';
</script>

<svelte:head><title>{data.metadata.title} | Zixian's Blog</title></svelte:head>
<h1 class="text-2xl xl:text-4xl">{data.metadata.title}</h1>
<div class="text-medium">{changeDateFormat(data.metadata.date)}</div>
<article
	class="prose:max-w-sm prose prose-sm mt-6 prose-a:font-semibold prose-a:text-orange-600 prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-orange-400 prose-code:font-['Fira_Code_Variable'] lg:mt-10 lg:max-w-none">
	<svelte:component this={data.content} />
</article>
<div class="pt-10 text-gray-600 lg:pt-20">
	Tags: {#each data.metadata.tags as tag}<span class="me-2 border border-neutral px-2 py-1">{tag}</span>{/each}
</div>
