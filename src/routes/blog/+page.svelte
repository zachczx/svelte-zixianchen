<script lang="ts">
	let { data } = $props();
	import dayjs from 'dayjs';
</script>

<svelte:head>
	<title>Zixian's Blog</title>
	<meta name="description" content="Zixian's blog on web dev, javascript, or random stuff." />
</svelte:head>

<main class="grid">
	{#each data.posts as post, i}
		<div class="border-base-content/10 px-4 py-6 lg:px-6 {i > 0 ? 'border-t' : ''}">
			<h2 class="text-2xl font-bold">
				<a
					href="/blog/{post.slug}"
					class="decoration-accent decoration-2 underline-offset-4 transition-colors hover:underline"
					><span class="text-base-content/75 font-mono text-[0.85em]">{i + 1}.</span> {post.title}</a>
			</h2>
			<div class="text-base-content/50 mt-1 font-mono text-sm tracking-tight uppercase">
				{dayjs(post.date).format('D MMM YYYY')}
			</div>
			<div class="mt-1 flex flex-wrap gap-x-1.5 font-mono text-sm tracking-tight text-base-content/50">
				{#each post.tags as tag, j}
					{#if j > 0}<span class="text-base-content/30">/</span>{/if}
					<span>{tag}</span>
				{/each}
			</div>
		</div>
	{/each}
</main>
<div class="text-base-content/30 mt-10 px-3 text-center font-mono text-xs tracking-widest sm:px-6 xl:px-14">
	— END OF LIST —
</div>
