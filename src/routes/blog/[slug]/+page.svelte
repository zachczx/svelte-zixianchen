<script lang="ts">
	import TagIcon from '~icons/material-symbols/sell-outline';
	import dayjs from 'dayjs';

	let { data } = $props();
	let content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.metadata.title} | Zixian's Blog</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>
<div class="px-3 pb-3 sm:px-6 xl:px-14"><a href="/blog" class="text-base-content/50 hover:text-base-content font-mono text-sm tracking-tight transition-colors">[back to main]</a></div>
<h1 class="px-3 py-1 font-fraunces text-2xl font-extrabold sm:px-6 sm:text-3xl lg:text-4xl xl:px-14 xl:text-5xl xl:font-black">{data.metadata.title}</h1>
<div class="text-base-content/50 px-3 font-mono text-sm tracking-tight sm:px-6 xl:px-14">
	<div class="flex flex-wrap items-baseline gap-x-1.5">
		<span class="uppercase">{dayjs(data.metadata.date).format('D MMM YYYY')}</span>
		{#if data.metadata.date_updated}
			<span class="uppercase">[++ {dayjs(data.metadata.date_updated).format('D MMM YYYY')}]</span>
		{/if}
		<span class="text-base-content/30">/</span>
		<span>{data.readingTime} min read</span>
	</div>
	<div class="mt-1 flex flex-wrap items-center gap-x-1.5">
		<TagIcon class="size-[1em]" />
		{#each data.metadata.tags as tag, i}
			{#if i > 0}<span class="text-base-content/30">/</span>{/if}
			<span>{tag}</span>
		{/each}
	</div>
</div>
{#if data.headings.length > 0}
	<nav class="text-base-content/50 mt-6 border-y border-base-content/10 px-3 py-4 font-mono text-sm tracking-tight sm:px-6 xl:px-14">
		<div class="text-base-content/80 mb-2 text-xs font-bold uppercase tracking-widest">Contents</div>
		<ol class="grid gap-1">
			{#each data.headings as heading, i}
				<li class={heading.level === 3 ? 'ml-4' : ''}>
					<a href="#{heading.slug}" class="group hover:text-base-content inline-flex items-baseline gap-1 transition-colors"><span class="w-3 shrink-0 text-center text-[0.7em] opacity-0 transition-opacity group-hover:opacity-100">❯</span>{heading.text}</a>
				</li>
			{/each}
		</ol>
	</nav>
{/if}
<article
	class="prose max-w-none font-fraunces prose-a:font-semibold prose-a:decoration-1 prose-a:underline-offset-3 prose-a:hover:text-orange-700 prose-blockquote:my-8 prose-blockquote:ms-8 prose-h2:text-2xl prose-h2:font-bold prose-p:leading-relaxed prose-li:leading-relaxed prose-p:my-6 prose-code:font-mono prose-pre:px-0 prose-pre:py-3 mt-6 w-full px-3 sm:px-6 lg:mt-10 xl:px-14">
	{#if content}
		{@const Component = content}
		<Component />
	{/if}
</article>
<div class="text-base-content/30 mt-10 px-3 text-center font-mono text-xs tracking-widest sm:px-6 xl:px-14">— END OF POST —</div>

<!-- Prevents vite from removing it when tree shaking -->
<span class="line highlighted add remove diff hidden"></span>
<!-- Prevents vite from removing it when tree shaking -->

<style>
	article {
		counter-reset: para;
	}

	article > :global(p) {
		counter-increment: para;
	}

	article > :global(p)::before {
		content: counter(para) '.\00a0\00a0';
		font-family: var(--font-mono);
		font-size: 0.85em;
		opacity: 0.75;
	}

	article :global(ul),
	article :global(ol) {
		padding-left: 3em;
	}

	article :global(li)::marker {
		font-family: var(--font-mono);
		font-size: 0.85em;
		opacity: 0.75;
	}
</style>
