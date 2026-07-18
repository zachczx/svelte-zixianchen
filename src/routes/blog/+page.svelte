<script lang="ts">
	import dayjs from 'dayjs';

	let { data } = $props();
</script>

<svelte:head>
	<title>Zixian's Blog</title>
	<meta name="description" content="Zixian's blog on web dev, javascript, or random stuff." />
</svelte:head>

<header class="border-base-content/10 border-b px-4 pt-2 pb-8 lg:px-6">
	<div class="text-base-content/45 font-mono text-sm">{data.posts.length} listed posts</div>
	<h1 class="text-base-content mt-3 text-3xl font-black sm:text-4xl">Notes, fixes, and stray thoughts</h1>
	<p class="text-base-content/65 mt-3 max-w-2xl text-base leading-relaxed">
		Web development, infra, AI, writing, and odd problems worth writing down.
	</p>
</header>

<main class="grid">
	{#each data.posts as post, i}
		<a
			href="/blog/{post.slug}"
			class="group border-base-content/10 hover:bg-base-content/[0.03] focus-visible:outline-accent block px-4 py-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] lg:px-6"
			class:border-t={i > 0}>
			<article class="grid gap-2">
				<h2 class="text-xl font-bold sm:text-2xl">
					<span class="decoration-accent decoration-2 underline-offset-4 group-hover:underline">
						<span class="text-base-content/55 font-mono text-[0.85em]">{i + 1}.</span>
						{post.title}
					</span>
				</h2>
				{#if post.description}
					<p class="text-base-content/70 max-w-2xl text-sm leading-relaxed sm:text-base">{post.description}</p>
				{/if}
				<div class="text-base-content/50 flex flex-wrap items-center gap-x-1.5 font-mono text-sm">
					<span class="uppercase">{dayjs(post.date).format('D MMM YYYY')}</span>
					{#if post.date_updated}
						<span class="text-base-content/30">/</span>
						<span class="uppercase">updated {dayjs(post.date_updated).format('D MMM YYYY')}</span>
					{/if}
				</div>
				<div class="text-base-content/50 flex flex-wrap gap-x-1.5 font-mono text-sm">
					{#each post.tags as tag, j}
						{#if j > 0}<span class="text-base-content/30">/</span>{/if}
						<span>{tag}</span>
					{/each}
				</div>
			</article>
		</a>
	{/each}
</main>
<div class="text-base-content/30 mt-10 px-3 text-center font-mono text-xs tracking-widest sm:px-6 xl:px-14">
	— END OF LIST —
</div>
