<script>
	let { data } = $props();
	import changeDateFormat from '$lib/BlogDate';
</script>

<svelte:head>
	<title>Zixian's Blog</title>
	<meta name="description" content="Zixian's blog on web dev, javascript, or random stuff." />
</svelte:head>

<main class="space-y-8">
	{#each data.posts as post}
		<div class="items-end border-2 border-neutral/30 px-4 py-2 lg:px-6 lg:py-4">
			<h2 class="text-2xl font-bold text-orange-600 underline hover:text-orange-400">
				<a href="/blog/{post.slug}">{post.title}</a>
			</h2>
			<div>{changeDateFormat(post.date)}</div>
			<div class="flex flex-wrap pt-4">
				{#each post.tags as tag}<span class="mb-2 me-2 border border-gray-400 px-2">{tag}</span>{/each}
			</div>
		</div>
	{/each}
</main>
