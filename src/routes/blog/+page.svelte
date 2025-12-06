<script lang="ts">
	let { data } = $props();
	import dayjs from 'dayjs';
</script>

<svelte:head>
	<title>Zixian's Blog</title>
	<meta name="description" content="Zixian's blog on web dev, javascript, or random stuff." />
</svelte:head>

<main class="grid gap-y-8">
	{#each data.posts as post}
		<div class=" items-end px-4 lg:px-6">
			<h2 class="text-2xl font-bold hover:text-orange-700">
				<a href="/blog/{post.slug}">{post.title}</a>
			</h2>
			<div class="text-base-content/50">{dayjs(post.date).format('D MMM YYYY')}</div>
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag, i}
					<span class="text-base-content/50 border-base-content/15"
						>{tag}{#if i !== post.tags.length - 1},{/if}</span>
				{/each}
			</div>
		</div>
	{/each}
</main>

<style>
	a {
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-thickness: 1px;
	}
</style>
