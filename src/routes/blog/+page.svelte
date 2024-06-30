<script>
	let { data } = $props();
	import changeDateFormat from '$lib/BlogDate';
</script>

<svelte:head><title>Zixian's Blog</title></svelte:head>
<div class="space-y-8">
	{#each data.posts as post}
		<div class="items-end">
			<h2 class="text-2xl text-green-600 underline hover:text-orange-600">
				<a href="/blog/{post.slug}">{post.title}</a>
			</h2>
			<div>{changeDateFormat(post.date)}</div>
		</div>
	{/each}
</div>
