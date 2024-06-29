<script>
	let { data } = $props();
</script>

<h1 class="text-4xl">{data.metadata.title}</h1>
<div class="text-medium">{data.metadata.date}</div>
<article
	class="prose:max-w-sm prose prose-sm mt-6 prose-a:text-green-600 hover:prose-a:text-orange-600 lg:mt-10 lg:max-w-none">
	<svelte:component this={data.content} />
</article>
