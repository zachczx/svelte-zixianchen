<script lang="ts">
	let { data } = $props();
	import changeDateFormat from '$lib/BlogDate';
</script>

<svelte:head>
	<title>Zixian's Blog</title>
	<meta name="description" content="Zixian's blog on web dev, javascript, or random stuff." />
</svelte:head>

<main class="grid gap-y-8">
	{#each data.posts as post}
		<div class="border-neutral/10 items-end border-2 px-4 py-2 lg:px-6 lg:py-4">
			<h2 class="text-2xl font-bold text-orange-600 underline hover:text-orange-400">
				<a href="/blog/{post.slug}">{post.title}</a>
			</h2>
			<div class="text-base-content/50">{changeDateFormat(post.date)}</div>
			<div class="flex flex-wrap">
				{#each post.tags as tag}<span class="text-base-content/50 me-2 mb-2 border border-gray-300 px-2">{tag}</span
					>{/each}
			</div>
		</div>
	{/each}
</main>
