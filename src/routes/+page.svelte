<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import Moon from '$lib/assets/luke-stackpoole-TRXSkmJb40c-unsplash.webp';
	import Computer from '$lib/assets/federica-galli-aiqKc07b5PA-unsplash.webp';
	import Projects from './Projects.svelte';
	import LinkedInIcon from '~icons/uiw/linkedin';
	import GitHubIcon from '~icons/octicon/mark-github-16';
	import ArticleIcon from '~icons/material-symbols/article';
	import { codeSnippets } from './code-snippets';
	import { jobs } from './jobs';

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
		let old = display;
		let next = makeText();
		let pos = 0;

		const interval = setInterval(() => {
			pos += 1;
			if (pos >= old.length) {
				old = next;
				next = makeText();
				pos = 0;
			}
			display = next.slice(0, pos) + old.slice(pos);
			cursorPos = pos;
		}, 70);

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) navCurrent = entry.target.id;
			});
		});
		document.querySelectorAll<HTMLElement>('.navItem').forEach((el) => observer.observe(el));
		return () => {
			clearInterval(interval);
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
	<header id="header" class="navItem w-full place-items-center py-20 lg:grid lg:min-h-dvh lg:py-0">
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
	</header>

	<div id="about" class="navItem mt-20 grid w-full justify-items-center bg-gray-400/5 lg:min-h-dvh">
		<div class="grid justify-items-center">
			<div
				class="grid w-full max-w-250 content-start gap-y-4 px-4 py-16 lg:min-h-[50vh] lg:grid-cols-3 lg:content-center lg:gap-y-24">
				<h3 class="text-4xl font-bold">Interests</h3>
				<div class="col-span-2 mb-4 space-y-8">
					<p>
						I've been tinkering on the web since 2000. It started with Frontpage, XHTML, and PHP. My stack now looks
						more like <span class="text-base-content/85 font-mono text-[1.05em] font-medium">Go, TypeScript,</span> and
						a bit of <span class="text-base-content/85 font-mono text-[1.05em] font-medium">Zig</span>.
					</p>
					<p>
						Lately making a deliberate effort to write organic, free-range code. Incredibly tempting to do it
						automagically with Claude Code and OpenCode, but it doesn't feel the same.
					</p>
					<p>Most of that energy goes into building my travel planner and my home admin app.</p>
					<p>
						Off screen, I like <strong>building PCs</strong> (love bargains but hate cable management), and I spend a
						lot of time learning about <strong>product design</strong>, <strong>business</strong>, and
						<strong>entrepreneurship</strong>.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-base-200 grid min-h-dvh w-full justify-items-center lg:grid-cols-5">
		<div
			id="com"
			class="hidden h-full w-full overflow-hidden py-4 saturate-[0.4] lg:col-span-2 lg:grid"
			style="background-image:url({Computer}); background-size: cover; background-position: bottom;">
			<div class="to-base-200 h-full w-full bg-linear-to-r from-transparent from-90%"></div>
		</div>
		<section
			class="bg-base-200 grid w-full max-w-250 grid-rows-[auto_1fr_auto] content-start gap-y-8 lg:col-span-3 lg:gap-y-24">
			<h2 id="jobs" class="justify-self-start px-4 text-9xl font-extrabold lg:pt-28">Day</h2>
			<div class="grid content-start gap-y-4 px-4 lg:gap-y-16">
				{#each jobs as job}
					<div class="job-row grid lg:grid-cols-[auto_1fr]">
						<div class="text-base-content/70 items-baseline pe-12 pt-1.5 font-mono max-lg:pt-8">{job.year}</div>
						<div>
							<h4 class="job-title relative w-fit text-2xl font-bold">
								<span
									class="job-arrow absolute top-1/2 -left-5 -translate-y-1/2 font-mono text-[0.7em] font-normal opacity-0"
									>❯</span
								>{job.title}
							</h4>
							<p class="job-desc text-base-content/70 leading-relaxed transition-colors duration-200">
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
				<h2 id="projects" class="navItem justify-self-start pb-8 text-9xl font-extrabold lg:col-span-3 lg:pb-24">
					Night
				</h2>

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

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
