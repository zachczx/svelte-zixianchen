<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import Moon from '$lib/assets/luke-stackpoole-TRXSkmJb40c-unsplash.webp';
	import Computer from '$lib/assets/jl-cabrera-tcH6W-49jTU-unsplash.webp?enhanced';
	import CrayonPortrait from '$lib/assets/crayon-drawing.webp?enhanced';
	import Projects from './Projects.svelte';
	import LinkedInIcon from '~icons/uiw/linkedin';
	import GitHubIcon from '~icons/octicon/mark-github-16';
	import ArticleIcon from '~icons/material-symbols/article';
	import { codeSnippets } from './code-snippets';
	import { jobs } from './jobs';
	import dayjs from 'dayjs';

	let { data } = $props();
	let navCurrent: string = $state('header');

	function shuffle(arr: string[]) {
		const a = [...arr];
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	const snippets = codeSnippets.filter((s) => s !== '');

	function makeText() {
		return shuffle(snippets).join(' ');
	}

	let display = $state(makeText());
	let cursorPos = $state(0);

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		let interval: ReturnType<typeof setInterval> | undefined;

		if (prefersReducedMotion) {
			display = snippets.join(' ');
			cursorPos = 0;
		} else {
			let old = display;
			let next = makeText();
			let pos = 0;

			interval = setInterval(() => {
				pos += 1;
				if (pos >= old.length) {
					old = next;
					next = makeText();
					pos = 0;
				}
				display = next.slice(0, pos) + old.slice(pos);
				cursorPos = pos;
			}, 70);
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) navCurrent = entry.target.id;
			});
		});
		document.querySelectorAll<HTMLElement>('.navItem').forEach((el) => observer.observe(el));
		return () => {
			if (interval) clearInterval(interval);
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Hi! I'm Zixian.</title>
	<meta name="description" content="Hello, I'm Zixian Chen." />
</svelte:head>

<Nav {navCurrent} />
<div class="bg-base-200 grid min-h-dvh justify-items-center 2xl:overflow-x-clip">
	<header id="header" class="navItem relative w-full place-items-center py-20 lg:grid lg:min-h-dvh lg:py-0">
		<div class="bg-base-200 flex w-full flex-wrap items-center justify-center gap-8 lg:min-h-dvh">
			<div class="grid justify-items-center" style="view-transition-name: logo">
				<div class="text-[3.3rem] leading-none font-black tracking-tight lg:text-[7.1rem]">ZIXIAN</div>
				<div
					class="code-z relative my-1 h-44 w-44 overflow-hidden bg-slate-900 lg:my-2 lg:h-96 lg:w-96"
					aria-hidden="true">
					<div class="code-fill font-mono">
						{display.slice(0, cursorPos)}<span class="code-cursor"></span>{display.slice(cursorPos)}
					</div>
				</div>
			</div>
		</div>
		<div class="flex w-full items-center justify-center gap-16 max-lg:pt-12 xl:hidden">
			<a href="https://www.linkedin.com/in/zixianchen/" aria-label="LinkedIn" class="active:text-gray-500">
				<LinkedInIcon class="size-8" />
			</a>
			<a href="https://github.com/zachczx?tab=repositories" aria-label="Github" class="active:text-gray-500">
				<GitHubIcon class="size-8" />
			</a>
			<a href="/blog" aria-label="blog" class="active:text-gray-500">
				<ArticleIcon class="size-9" />
			</a>
		</div>
		<a
			href="#about"
			aria-label="Scroll to interests"
			class="text-base-content/35 hover:text-base-content/70 absolute inset-x-0 bottom-32 mx-auto hidden w-fit transition-colors xl:block">
			<span class="inline-block rotate-90 text-2xl">❯</span>
		</a>
	</header>

	<section id="about" class="navItem bg-base-200 grid w-full justify-items-center px-4 py-20 lg:py-32">
		<div class="border-base-content/15 bg-base-100 w-full max-w-3xl border">
			<div class="border-base-content/15 flex items-baseline justify-between border-b px-6 py-5 sm:px-8">
				<h3 class="text-2xl font-bold tracking-tight lg:text-3xl">Interests</h3>
				<span class="text-base-content/40 text-[0.7rem] tracking-[0.25em] uppercase">Profile</span>
			</div>
			<div class="sm:flex">
				<div class="border-base-content/10 border-b px-4 py-4">
					<enhanced:img
						src={CrayonPortrait}
						alt="Crayon portrait of Zixian"
						class="border-base-content/15 w-32 border sm:w-96" />
				</div>
				<dl class="divide-base-content/10 divide-y px-4">
					<div class="grid gap-x-8 gap-y-1.5 py-4">
						<dt class="text-base-content/45 text-xs tracking-[0.18em] uppercase sm:pt-1">Stack</dt>
						<dd class="text-base-content/80 text-sm leading-relaxed lg:text-base">Go, TypeScript, and a bit of Zig.</dd>
					</div>
					<div class="grid gap-x-8 gap-y-1.5 py-4">
						<dt class="text-base-content/45 text-xs tracking-[0.18em] uppercase sm:pt-1">Since</dt>
						<dd class="text-base-content/80 text-sm leading-relaxed lg:text-base">
							2000 on/off. Back in the Frontpage, XHTML, PHP days.
						</dd>
					</div>
					<div class="grid gap-x-8 gap-y-1.5 py-4">
						<dt class="text-base-content/45 text-xs tracking-[0.18em] uppercase sm:pt-1">Now</dt>
						<dd class="text-base-content/80 text-sm leading-relaxed lg:text-base">
							Building a home admin app. Trying to write organic, free-range code by hand. It's tempting to let Claude
							Code and OpenCode do it automatically but it doesn't feel the same.
						</dd>
					</div>
					<div class="grid gap-x-8 gap-y-1.5 py-4">
						<dt class="text-base-content/45 text-xs tracking-[0.18em] uppercase sm:pt-1">Offline</dt>
						<dd class="text-base-content/80 text-sm leading-relaxed lg:text-base">
							Building PCs (love bargains, hate cable management). Learning about product design, business, and
							entrepreneurship.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</section>

	<div class="bg-base-200 grid min-h-dvh w-full justify-items-center lg:grid-cols-5">
		<div id="com" class="hidden h-full w-full overflow-hidden pe-12 lg:col-span-2 lg:grid">
			<enhanced:img
				src={Computer}
				alt=""
				loading="lazy"
				class="h-full w-full max-w-175 object-contain object-bottom-left" />
		</div>
		<section
			class="bg-base-200 grid w-full max-w-250 grid-rows-[auto_1fr_auto] content-start gap-y-8 lg:col-span-3 lg:gap-y-24">
			<div class="justify-self-start px-4 lg:pt-28">
				<p class="text-base-content/45 font-mono text-xs tracking-[0.2em] uppercase">Work history</p>
				<h2 id="jobs" class="text-5xl font-extrabold sm:text-6xl lg:text-9xl">Day</h2>
				<p class="text-base-content/65 mt-3 max-w-xl text-sm leading-relaxed lg:text-base">
					Public sector tech, policy, comms, and service delivery roles.
				</p>
			</div>
			<div class="grid content-start gap-y-10 px-4 lg:gap-y-16">
				{#each jobs as job}
					<div class="job-row grid gap-y-1 lg:grid-cols-[auto_1fr]">
						<div class="text-base-content/70 items-baseline text-sm lg:pe-12 lg:pt-1.5 lg:text-base">
							{job.year}
						</div>
						<div>
							<h4 class="job-title relative w-fit text-lg font-bold lg:text-2xl">
								<span class="job-arrow absolute top-1/2 -left-5 -translate-y-1/2 text-[0.7em] font-normal opacity-0"
									>❯</span
								>{job.title}
							</h4>
							<p
								class="job-desc text-base-content/70 text-sm leading-relaxed transition-colors duration-200 lg:text-base">
								{job.desc}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</div>

	<div class="text-neutral-content grid w-full content-start justify-items-center bg-[#0E0E0E] lg:grid-cols-5">
		<div class="grid w-full justify-items-center pt-8 lg:col-span-3 lg:pt-28">
			<section class="grid w-full max-w-250 justify-items-start px-4 pb-8 lg:grid-cols-3 lg:justify-self-end lg:pb-28">
				<div class="justify-self-start pb-8 lg:col-span-3 lg:pb-24">
					<p class="text-neutral-content/45 font-mono text-xs tracking-[0.2em] uppercase">Side projects</p>
					<h2 id="projects" class="navItem text-5xl font-extrabold sm:text-6xl lg:text-9xl">Night</h2>
					<p class="text-neutral-content/65 mt-3 max-w-xl text-sm leading-relaxed lg:text-base">
						Personal tools, experiments, and small products built outside the day job.
					</p>
				</div>

				<div
					class="grid w-full content-start justify-items-center gap-y-8 text-center lg:col-span-3 lg:grid-cols-1 lg:justify-items-start lg:text-start">
					<Projects />
				</div>
			</section>
		</div>
		<div
			id="moon"
			class="hidden h-full w-full overflow-hidden bg-black lg:col-span-2 lg:grid"
			style="background-image:url({Moon}); background-size: cover; background-position: center;">
		</div>
		<section id="musings" class="navItem grid w-full justify-items-center px-4 py-20 lg:col-span-5 lg:py-32">
			<div class="w-full max-w-3xl border border-white/15 bg-white/5">
				<div class="border-b border-white/15 px-6 py-5 sm:px-8">
					<h3 class="text-2xl font-bold tracking-tight lg:text-3xl">Musings</h3>
					<p class="text-neutral-content/55 mt-2 text-sm leading-relaxed lg:text-base">Recent writing from the blog.</p>
				</div>
				<div class="divide-y divide-white/10 px-6 sm:px-8">
					{#each data.posts as post}
						<a href="/blog/{post.slug}" class="group grid gap-x-8 gap-y-1.5 py-5 sm:grid-cols-[7rem_1fr]">
							<span class="text-neutral-content/45 font-mono text-xs tracking-[0.18em] uppercase sm:pt-1.5">
								{dayjs(post.date).format('D MMM YYYY')}
							</span>
							<span class="block">
								<span
									class="decoration-accent block leading-snug font-bold decoration-2 underline-offset-4 transition-colors group-hover:underline lg:text-lg">
									{post.title}
								</span>
								<span class="text-neutral-content/45 mt-1.5 flex flex-wrap gap-x-1.5 font-mono text-xs tracking-tight">
									{#each post.tags as tag, j}
										{#if j > 0}<span class="text-neutral-content/25">/</span>{/if}
										<span>{tag}</span>
									{/each}
								</span>
							</span>
						</a>
					{/each}
					<a
						href="/blog"
						class="text-neutral-content/60 hover:text-neutral-content flex justify-end py-5 font-mono text-sm tracking-tight transition-colors">
						All musings ❯
					</a>
				</div>
			</div>
		</section>
		<div class="lg:col-span-5">
			<WebsiteFooter />
		</div>
	</div>
</div>

<style>
	.code-z {
		clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 25% 80%, 100% 80%, 100% 100%, 0% 100%, 0% 80%, 75% 20%, 0% 20%);
	}

	.job-row:hover .job-arrow {
		opacity: 1;
	}

	.job-row:hover .job-desc {
		color: var(--color-base-content);
	}

	.job-row:hover .job-title {
		background-size: 100% 100%;
	}

	.job-arrow {
		transition: opacity 0.2s ease;
	}

	.job-title {
		background-image: linear-gradient(var(--color-accent), var(--color-accent));
		background-size: 0% 100%;
		background-repeat: no-repeat;
		background-position: left;
		transition: background-size 0.25s ease;
	}

	.code-fill {
		/* font-family: monospace; */
		font-size: 0.7em;
		line-height: 1.3;
		word-break: break-all;
		width: 100%;
		height: 100%;
		color: var(--color-primary-content);
	}

	.code-cursor {
		border-left: 4px solid yellow;
		animation: blink 0.7s step-end infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.code-cursor {
			display: none;
			animation: none;
		}
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
