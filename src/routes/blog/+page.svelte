<script>
	let { data } = $props();
	console.log(data);
</script>

<div class="space-y-8">
	{#each data.posts as post}
		<div class="items-end">
			<h2 class="text-2xl text-green-600 underline hover:text-orange-600">
				<a href="/blog/{post.slug}">{post.title}</a>
			</h2>
			<div>{post.date}</div>
		</div>
	{/each}
</div>
